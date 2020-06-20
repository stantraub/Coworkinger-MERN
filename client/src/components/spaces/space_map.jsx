import React, { useState } from 'react'
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

const SpaceMap = (props) => {
    const [activeSpace, setActiveSpace] = useState(null);

    function renderImage() {
        let domainName = "https://coworking-dev.s3-us-west-1.amazonaws.com/";
        if (!activeSpace.mainPhoto.includes(domainName)) {
            return (
            <img
                className="main-pic"
                src={domainName + activeSpace.mainPhoto}
                alt="Main"
            />
            );
        } else {
            return (
              <img
                src={activeSpace.mainPhoto}
                className="main-pic"
                alt="Main"
              />
            );
        }
    }

    const { spaces = {}} = props;

    return (
      <div className="map">
        <Map center={[37.773943, -122.449484]} zoom={13.4}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />

       
        {spaces.map((space) => (
            <Marker
              key={space._id}
              position={[space.latitude, space.longitude]}
              onClick={() => setActiveSpace(space)}
            />
          ))}
    

          {activeSpace && (
            <Popup
              position={[activeSpace.latitude, activeSpace.longitude]}
              onClose={() => setActiveSpace(null)}
            >
              <div>
                <h2>{activeSpace.name}</h2>
                {renderImage()}
                <div className="popup-space-description">
                  <strong>${activeSpace.cost}</strong> per desk / month
                </div>
              </div>
            </Popup>
          )}
        </Map>
      </div>
    );
}

export default SpaceMap