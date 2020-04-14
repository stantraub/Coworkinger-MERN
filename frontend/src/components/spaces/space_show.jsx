import React, { useState, useEffect } from 'react';
import PicsCarousel from '../modals/pics_carousel';
import AmenitiesModal from '../modals/amenities_modal';
import './space_show.css'
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
        />
      )
    } else {
      return (
        <img 
          src={photo}
          className="space-show-main-pic"
        />
      )
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
    props.fetchSpace(props.match.params.id)
  }, [])
  
  function includedAmenities(spaceAmenities) {
      let { seatingAndSpace, transportation, facilities, accessibility, lifeEnhancements } = spaceAmenities
      let combinedArr = {...seatingAndSpace, ...transportation, ...facilities, ...accessibility, ...lifeEnhancements}
      let amenities = Object.entries(combinedArr).slice(0, 6)

      return amenities.map((amenity, i) => {
        if (amenity[0] === 'hours24Access') {
          return <div className="amenities-item" key={i}>24/7 Access</div>
        } else if (amenity[0] === "phoneBooths") {
            return <div className="amenities-item" key={i}>{amenity[1]} phone booths</div>
        } else if (amenity[0] === 'transitStationMiles') {
            if (amenity[1] < 1) { 
              return <div className="amenities-item" key={i}> &lt;1 mile to nearest transit station </div>
            } else {
              return <div className="amenities-item" key={i}> {amenity[1]} miles to nearest transit station </div>
            }
        } else if (amenity[0] === 'meetingRooms') {
            return <div className="amenities-item" key={i}> {amenity[1]} meeting rooms </div>
        } else if (amenity[0] === 'peopleCapacity') {
            return <div className="amenities-item" key={i}> {amenity[1]} total capacity </div>
        } else if (amenity[0] === 'officeCapacity') {
            return <div className="amenities-item" key={i}> {amenity[1]} offices </div>
        } else if (amenity[0] === 'deskDay') {
            return <div className="amenities-item" key={i}>Individual desk option</div>
        } else if (amenity[0] === 'sharedDeskOption') {
            return <div className="amenities-item" key={i}>Shared desk option</div>
        } else if (amenity[0] === 'availability') {
            return <div className="amenities-item" key={i}>Space available</div>
        } else if (amenity[0] === 'eventSpace') {
            return <div className="amenities-item" key={i}>Event space</div>
        } else if (amenity[0] === 'wellnessRoom') {
            return <div className="amenities-item" key={i}>Wellness Room</div>
        } 
        else {
          return <div className="amenities-item" key={i}>{(amenity[0][0].toUpperCase() + amenity[0].slice(1)).split("_").join(" ")}</div>
        }
      })
    }
      

  function otherAmenities(spaceAmenities) {
    let { seatingAndSpace, transportation, equipment, facilities, accessibility, lifeEnhancements, recreationalGames, foodAndDrinks } = spaceAmenities
    let combinedArr = {...seatingAndSpace, ...transportation, ...facilities, ...accessibility, ...lifeEnhancements, ...equipment, ...recreationalGames, ...foodAndDrinks}
    let numAmenities = Object.keys(combinedArr).length

    if (numAmenities > 6) {
      return (
        <div className="num-amenities-wrapper">
          <div
            className="num-amenities-text"
            onClick={() => toggleAmenitiesModal()}
          >
            Show all {combinedArr['deskDay'] ? numAmenities += 1 : numAmenities} amenities
          </div>
        </div>
      );
      }
    }
        // if space is undefined, set space equal to an empty object
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
                ></img>
                <img
                  className="space-show-pic-image"
                  src={space.spacePhotos[2]}
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
                ></img>
                <img
                  className="space-show-pic-image"
                  src={space.spacePhotos[4]}
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