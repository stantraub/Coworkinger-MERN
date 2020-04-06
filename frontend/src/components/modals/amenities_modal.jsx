import React, { Fragment } from 'react';

import './amenities_modal.css'

const Amenities = props => {

    function amenitiesList(categoryAmenities) {
        if (categoryAmenities) {
            let amenities = Object.entries(categoryAmenities)
            return amenities.map((amenity, i) => {
                if (amenity[0] === "deskDay") {
                    return (
                    <Fragment key={i}>
                        <div className="amenity-modal-item">
                        Day pass available
                        </div>
                        <div className="amenity-modal-item">
                        Individual desk option
                        </div>
                    </Fragment>
                    );
                } else if (amenity[0] === 'officeCapacity') {
                    return (
                        <div
                        className="amenity-modal-item"
                        key={i}
                        >
                        {" "}
                        {amenity[1]} offices{" "}
                        </div>
                    );
                } else if (amenity[0] === 'transitStationMiles') {
                    if (amenity[1] < 1) {
                        return <div className="amenity-modal-item" key={i}>&lt;1 mile to nearest transit station </div>
                    } else {
                        return <div className="amenity-modal-item" key={i}>{amenity[1]} miles to nearest transit station </div>
                    }
                } else if (amenity[0] === "hours24Access") {
                        return (
                            <div className="amenity-modal-item" key={i}>
                            24/7 Access
                            </div>
                        );
                } else if (amenity[0] === "sharedDeskOption") {
                        return (
                            <div className="amenity-modal-item" key={i}>
                            Shared Desk Option
                            </div>
                        );
                    } else if (amenity[0] === "phoneBooths") {
                        return (
                            <div className="amenity-modal-item" key={i}>
                            {amenity[1]} phone booths
                            </div>
                        );
                    }  else if (amenity[0] === "bikeParking") {
                        return (
                            <div className="amenity-modal-item" key={i}>
                                Bike parking available
                            </div>
                        );
                    }   else if (amenity[0] === "printersIncluded") {
                        return (
                            <div className="amenity-modal-item" key={i}>
                                Printers and scanners included
                            </div>
                        );
                    } else if (amenity[0] === "wellnessRoom") {
                        return (
                        <div className="amenity-modal-item" key={i}>
                            Wellness room
                        </div>
                        );
                    } else if (amenity[0] === "eventSpace") {
                        return (
                        <div className="amenity-modal-item" key={i}>
                            Event space available
                        </div>
                        );
                    } 
                    else if (amenity[0] === "meetingRooms") {
                    return (
                        <div className="amenity-modal-item" key={i}>
                        {amenity[1]} meeting rooms{" "}
                        </div>
                    );
                    } else if (amenity[0] === "availability") {
                    return (
                        <div className="amenity-modal-item" key={i}>
                        Space available
                        </div>
                    );
                    } else if (amenity[0] === "napRoom") {
                    return (
                        <div className="amenity-modal-item" key={i}>
                        Nap room
                        </div>
                    );
                    } else if (amenity[0] === "petFriendly") {
                        return (
                            <div className="amenity-modal-item" key={i}>
                            Pet friendly
                            </div>
                        );
                    } else if (amenity[0] === "teaCoffeeIncluded") {
                        return (
                            <div className="amenity-modal-item" key={i}>
                            Tea and coffee included
                            </div>
                        );
                    } else if (amenity[0] === "bocceBall") {
                        return (
                            <div className="amenity-modal-item" key={i}>
                            Bocce ball
                            </div>
                        );
                    }   else if (amenity[0] === "peopleCapacity") {
                        return (
                            <div className="amenity-modal-item" key={i}>
                            {" "}
                            {amenity[1]} total capacity{" "}
                            </div>
                        );
                    } else {
                    return (
                        <div className="amenity-modal-item" key={i}>
                        {(
                            amenity[0][0].toUpperCase() +
                            amenity[0].slice(1)
                        )
                            .split("_")
                            .join(" ")}
                        </div>
                    );
                    }
                })
            }
        }
   

    const { amenityCategories = {} } = props
    return (
        <div className="amenities-modal-wrapper">
            <div className="x-button" onClick={() => props.toggleAmenitiesModal()}>
                <img className="x-img" src="http://cdn.onlinewebfonts.com/svg/img_170267.png"></img>
            </div>
            <div className="amenities-modal-header">Amenities</div>
            <div className="amenities-content">
                {Object.keys(amenityCategories).map((category, i) => {
                    if (category === "seatingAndSpace") {
                        return (
                            <div className="amenity-category-wrapper" key={i}>
                            <div className="amenity-category-item">
                                Seating and space
                            </div>
                            <div>
                                {amenitiesList(amenityCategories[category])}
                            </div>
                            </div>
                        );
                    }

                    if (category === "lifeEnhancements") {
                        return (
                        <div className="amenity-category-wrapper" key={i}>
                            <div className="amenity-category-item">
                            Life enhancements
                            </div>
                            <div>
                            {amenitiesList(amenityCategories[category])}
                            </div>
                        </div>
                        );
                    }

                    if (category === "recreationalGames") {
                        return (
                            <div className="amenity-category-wrapper" key={i}>
                            <div className="amenity-category-item">
                                Recreational Games
                            </div>
                            <div>
                                {amenitiesList(amenityCategories[category])}
                            </div>
                            </div>
                        );
                    }

                    if (category === "foodAndDrinks") {
                        return (
                            <div
                                className="amenity-category-wrapper"
                                key={i}
                            >
                                <div className="amenity-category-item">
                                    Food and Drinks
                                </div>
                                <div>
                                    {amenitiesList(
                                    amenityCategories[category]
                                    )}
                                </div>
                            </div>
                        );
                    }

                    return (
                        <div className="amenity-category-wrapper" key={i}>
                            <div className="amenity-category-item">{category[0].toUpperCase() + category.slice(1)}</div>
                            <div>{amenitiesList(amenityCategories[category])}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


export default Amenities