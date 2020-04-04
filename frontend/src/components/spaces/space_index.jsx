import React, { useState, useEffect } from 'react'
import SpaceItem from './space_item';
import './space_index.css'
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";

import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";

const Spaces = props => {
  const [activeSpace, setActiveSpace] = useState(null)
  useEffect(() => {
      props.fetchSpaces()
  }, [])

  if (isBrowser) {
      if (props.spaces.length === 0) {
          return <div>There are no spaces in this location</div>;
      } else {
          const { spaces } = props
          return (
            <div className="space-index-main">
              <div className="spaces-index-spaces-wrapper">
                <div className="space-index-header">
                  Coworking spaces in San Francisco
                </div>
                {spaces.map(({ _id, ...otherSpaceProps }) => {
                  return (
                    <SpaceItem key={_id} spaceId={_id} {...otherSpaceProps} />
                  );
                })}
              </div>
              <div className="space-index-map">
                <Map center={[37.773943, -122.449484]} zoom={13.4}>
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  />

                  {spaces.map(space => (
                      <Marker
                        key={space._id}
                        position={[
                          space.latitude,
                          space.longitude
                        ]}
                        onClick={() => setActiveSpace(space)}
                      />

                      
                  ))}

                  {activeSpace && (
                    <Popup
                      position = {[
                        activeSpace.latitude,
                        activeSpace.longitude
                      ]}
                      onClose={() => setActiveSpace(null)}
                    >
                      <div>
                        <h2>{activeSpace.name}</h2>
                        <img className="main-pic" src={activeSpace.mainPhoto}></img>
                        <span className="popup-space-description"><strong>${activeSpace.cost}</strong> per desk / month</span>
                      </div>
                    </Popup>
                  )}
                  
                </Map>
              </div>
            </div>
          );
      }
  } else {
      if (props.spaces.length === 0) {
          return <div>There are no spaces in this location</div>;
      } else {
          const { spaces } = props

          return (
              <div className="space-index-main-mobile">
                  <h1 className="space-index-header-mobile">
                      All San Francisco workspaces
            </h1>
                  <div className="spaces-index-wrapper">
                      {spaces.map(({ _id, ...otherSpaceProps }) => {
                          return <SpaceItem key={_id} spaceId={_id} {...otherSpaceProps} />;
                      })}
                  </div>
              </div>
          );
      }
  }
}

export default Spaces
