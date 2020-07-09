import React from 'react'

const PicturesGrid = ({ photos, toggleCarouselHidden }) => (
  <section className="pictures flex-row">
    <div className="pictures__main-container">
      <img className="pictures__main-pic" src={photos[0]} alt="main" />
      <button
        className="pictures__view-photo-btn pictures__btn-mobile"
        onClick={() => toggleCarouselHidden()}
      >
        View Photos
      </button>
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
        <button
          className="pictures__view-photo-btn pictures__btn-tablet"
          onClick={() => toggleCarouselHidden()}
        >
          View Photos
        </button>
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
        <button
          className="pictures__view-photo-btn"
          onClick={() => toggleCarouselHidden()}
        >
          View Photos
        </button>
      </div>
    </div>
  </section>
);


export default PicturesGrid