import React from 'react'

const PicturesGrid = (props) => {
    const { photos } = props

    return (
      <div className="pictures flex-row">
        <div className="pictures__main-container">
          <img className="pictures__main-pic" src={photos[0]} alt="main" />
        </div>
        <div className="pictures__secondary-container flex-row">
          <div className="pictures__secondary-col-1 flex-col">
            <img
              className="pictures__secondary-photo-img"
              src={photos[1]}
              alt="first"
            />
            <img
              className="pictures__secondary-photo-img"
              src={photos[2]}
              alt="second"
            />
          </div>
          <div className="pictures__secondary-col-2 flex-col">
            <img
              className="pictures__secondary-photo-img"
              src={photos[3]}
              alt="third"
            />
            <img
              className="pictures__secondary-photo-img"
              src={photos[4]}
              alt="fourth"
            />
          </div>
        </div>
      </div>
    );
}

export default PicturesGrid