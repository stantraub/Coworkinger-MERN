import React from 'react'
import { formatAmenities } from '../../util/helpers'
import ReviewsContainer from '../../components/reviews/reviews_container'

const SpaceInfo = ({name, city, description, amenityCategories, toggleAmenitiesHidden}) => {
    function includedAmenities(spaceAmenities) {
        let amenities = Object.entries(spaceAmenities).slice(0, 6)

        return amenities.map((amenity, i) => {
            return formatAmenities(amenity, i, "amenities-container__item")
        })
    }

    function numAmenities(spaceAmenities) {
        let total = Object.keys(spaceAmenities).length

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
                    {amenityCategories ? includedAmenities(amenityCategories) : `${name} has not listed any amenities yet`}
                </div>
                {amenityCategories ? numAmenities(amenityCategories) : null}
            </div>
            <ReviewsContainer />
        </section>
    )
}

export default SpaceInfo