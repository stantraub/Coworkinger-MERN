import React from 'react'

const PicturesGrid = (props) => {
    const { photos } = props

    return (
      <div className="pictures">
        <div className="pictures__main-container">
          <img className="space-show-pic-image" src={photos[0]} alt="main" />
        </div>
        <div className="pictures__secondary-photo">
          <img
            className="pictures__secondary-photo-1"
            src={photos[1]}
            alt="first"
          />
        </div>
        <div>
          <img
            className="pictures__secondary-photo-2"
            src={photos[2]}
            alt="second"
          />
        </div>
        <div>
          <img
            className="pictures__secondary-photo-2"
            src={photos[3]}
            alt="third"
          />
        </div>
        <div>
          <img
            className="pictures__secondary-photo-2"
            src={photos[4]}
            alt="fourth"
          />
        </div>
 



        </div>
    );
}

export default PicturesGrid