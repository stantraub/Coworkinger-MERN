import React from 'react'
import ReviewsContainer from '../../components/reviews/reviews_container'

const SpaceInfo = ({name, city, description, amenityCategories, toggleAmenitiesHidden}) => {
    function includedAmenities(spaceAmenities) {
        let { seatingAndSpace, transportation, facilities, accessibility, lifeEnhancements } = spaceAmenities
        let combinedArr = { ...seatingAndSpace, ...transportation, ...facilities, ...accessibility, ...lifeEnhancements }
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
        let combinedArr = { ...seatingAndSpace, ...transportation, ...facilities, ...accessibility, ...lifeEnhancements, ...equipment, ...recreationalGames, ...foodAndDrinks }
        let numAmenities = Object.keys(combinedArr).length

        if (numAmenities > 6) {
            return (
                <div className="num-amenities-wrapper">
                    <div
                        className="num-amenities-text"
                        onClick={() => toggleAmenitiesHidden()}
                    >
                        Show all {combinedArr['deskDay'] ? numAmenities += 1 : numAmenities} amenities
          </div>
                </div>
            );
        }
    }
    return (
        <div className="space-info">
            <div className="space-info__summary">
                <span className="space-info__name">{name}</span>
                <div className="space-info__city">{city}</div>
            </div>
            <div className="space-info__description-wrapper">
                <p className="space-info__description-text">
                    {description}
                </p>
            </div>
            <div className="amenities-container">
                <div className="amenities-container__header">Amenities</div>
                <div className="amenities-container__grid">
                    {amenityCategories ? includedAmenities(amenityCategories) : `${name} has not listed any amenities yet`}
                </div>
                {amenityCategories ? otherAmenities(amenityCategories) : null}
            </div>
            <ReviewsContainer />
        </div>
    )
}

export default SpaceInfo