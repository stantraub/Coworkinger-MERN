import React from 'react'

const PicturesGrid = (props) => {
    const { photos } = props

    return (
      <div className="pictures">
        <div className="pictures__main-container">
          <button
            className="photos-btn-main-pic"
          >
            View Photos
          </button>
          <img className="space-show-pic-image" src={photos[0]} alt="main" />
        </div>
        <div className="space-show-space-pics">
          <div className="space-show-pic-column">
            <img
              className="space-show-pic-image"
              src={photos[1]}
              alt="first"
            ></img>
            <img
              className="space-show-pic-image"
              src={photos[2]}
              alt="second"
            ></img>
            <button className="photos-btn-first-column">View Photos</button>
          </div>
          <div className="space-show-pic-column">
            <img
              className="space-show-pic-image"
              src={photos[3]}
              alt="third"
            ></img>
            <img
              className="space-show-pic-image"
              src={photos[4]}
              alt="fourth"
            ></img>
            <button className="photos-btn">View Photos</button>
          </div>
        </div>
      </div>
    );
}

export default PicturesGrid