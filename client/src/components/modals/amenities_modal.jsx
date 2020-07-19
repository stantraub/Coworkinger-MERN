import React from 'react';
import {decamelize, formatAmenities } from '../../util/helpers'

const Amenities = ({toggleAmenitiesHidden, amenityCategories}) => {

    function amenitiesList(categoryAmenities) {
        let amenities = Object.entries(categoryAmenities)
        return amenities.map((amenity, i) => {
            return formatAmenities(amenity, i, "amenity-modal-item")
        })
    }

    return (
        <div className="amenities-modal__backdrop">
            <div className="amenities-modal">
                <div className="x-button" onClick={() => toggleAmenitiesHidden()}>
                    <img className="x-img" src="https://coworking-dev.s3-us-west-1.amazonaws.com/img_170267-min.png" alt="X button"></img>
                </div>
                <h2 className="amenities-modal__header">Amenities</h2>
                <div className="amenities-modal__content flex-col">
                    {Object.keys(amenityCategories).map((category, i) => {
                        return (
                            <div className="amenity-category-wrapper" key={i}>
                                <div className="amenity-category-item">{decamelize(category, " ")}</div>
                                <div>{amenitiesList(amenityCategories[category])}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Amenities