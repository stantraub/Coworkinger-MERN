import React from 'react'
import { formatAmenities } from '../../util/helpers'
import ReviewsContainer from '../../components/reviews/reviews_container'

const SpaceInfo = ({name, city, description, amenityCategories, toggleAmenitiesHidden}) => {
    function includedAmenities() {
        let amenities = Object.entries(amenityCategories).slice(0, 6)

        return amenities.map((amenity, i) => {
            return (
                <div className="amenities-container__item" key={i}>
                    {formatAmenities(amenity)}
                </div>
            ) 
        })
    }

    function numAmenities() {
        let total = Object.keys(amenityCategories).length

        if (total > 6) {
            return (
                <div
                    className="amenities-container__total"
                    onClick={() => toggleAmenitiesHidden()}
                >
                Show all {total} amenities
                </div>
            );
        }
    }
    return (
        <section className="space-info">
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
                    {amenityCategories ? includedAmenities() : `${name} has not listed any amenities yet`}
                </div>
                {amenityCategories ? numAmenities() : null}
            </div>
            <ReviewsContainer />
        </section>
    )
}

export default SpaceInfo