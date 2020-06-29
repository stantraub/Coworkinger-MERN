import React, { useState, useEffect } from 'react';
import PicsCarousel from '../modals/pics_carousel';
import AmenitiesModal from '../modals/amenities_modal';
import Spinner from '../spinner/spinner';
import ReviewsContainer from '../reviews/reviews_container'


const SpaceShow = props => {
  const [picsCarousel, setPicsCarousel] = useState(false)
  const [amenitiesModal, setAmenitiesModal] = useState(false)

  function togglePicsCarousel() {
    setPicsCarousel(!picsCarousel)
  }

  function toggleAmenitiesModal() {
    setAmenitiesModal(!amenitiesModal)
  }

    function renderImage(photo) {
    let domainName = 'https://coworking-dev.s3-us-west-1.amazonaws.com/'
    if (!photo.includes(domainName)) {
      return (
        <img 
          className="space-show-main-pic"
          src={
            domainName +
            photo
          }
          alt="space"
        />
      )
    } else {
      return <img src={photo} alt="space" className="space-show-main-pic" />;
    }
  }

  function showPicsCarousel(space) {
      return (
        picsCarousel ? 
          <div className="carousel-background">
            <PicsCarousel spacePics={space.spacePhotos} togglePicsCarousel={togglePicsCarousel} />
          </div> 
          : 
          null
      )
  }

  function showAmenitiesModal(space) {
    return (
      amenitiesModal ?
        <div className="amenities-background">
          <div className="amenities-modal-child">
            <AmenitiesModal amenityCategories={space.amenityCategories} toggleAmenitiesModal={toggleAmenitiesModal} />
          </div>
        </div> : null
    )
  }

      useEffect(() => {
        if (!props.space) {
          let {
            id: spaceId
          } = props.match.params
          props.fetchSpace(spaceId)
        }


      }, [])
  

        // if space is undefined, set space equal to an empty object
  console.log(props.space)
  const {space = {}} = props

  return space.mainPhoto ? 
      (
        <div className="space-show-main-div">
          {showPicsCarousel(space)}
          {showAmenitiesModal(space)}
          <div className="space-pics">
            <div className="main-pic-container">
              {renderImage(space.mainPhoto)}
              >
              <button
                onClick={() => togglePicsCarousel()}
                  className="photos-btn-main-pic"
              >
              View Photos
              </button>
            </div>
            <div className="space-show-space-pics">
              <div className="space-show-pic-column">
                <img
                  className="space-show-pic-image"
                  src={space.spacePhotos[1]}
                  alt="main"
                ></img>
                <img
                  className="space-show-pic-image"
                  src={space.spacePhotos[2]}
                  alt="second"
                ></img>
                <button
                onClick={() => togglePicsCarousel()}
                  className="photos-btn-first-column"
              >
              View Photos
              </button>
              </div>
              <div className="space-show-pic-column">
                <img
                  className="space-show-pic-image"
                  src={space.spacePhotos[3]}
                  alt="third"
                ></img>
                <img
                  className="space-show-pic-image"
                  src={space.spacePhotos[4]}
                  alt="fourth"
                ></img>
                <button
                  onClick={() => togglePicsCarousel()}
                  className="photos-btn"
                >
                  View Photos
                </button>
              </div>
            </div>
          </div>
          <div className="space-info-wrapper">
            <div className="space-show-info">
              <div className="space-summary">
                <span className="space-show-name">{space.name}</span>
                <div className="space-show-city">{space.city}</div>
              </div>
              <div className="description-wrapper">
                <p className="space-show-description">
                  {space.description}
                </p>
              </div>
              <div className="amenities-wrapper">
                <div className="amenities-header">Amenities</div>
                <div className="amenities-div">
                  {space.amenityCategories ? includedAmenities(space.amenityCategories) : `${space.name} has not listed any amenities yet`}
                </div>
                {space.amenityCategories ? otherAmenities(space.amenityCategories): null}
              </div>
              <ReviewsContainer  />
            </div>
            <div className="reserve-widget-wrapper">
              <div className="reserve-widget">
                <span className="reserve-cost">${space.cost} </span>
                <span className="reserve-per-month">per desk / month</span>
              </div>
              <div className="contact-info-wrapper">
                <div className="contact-item-top">
                  <a className="space-website-link" href={space.website}>{space.website}</a>
                </div>
                <div className="contact-item">{space.email}</div>
                <div className="contact-item">{space.phone}</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )

}



export default SpaceShow