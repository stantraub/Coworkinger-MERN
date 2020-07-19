import React, { Fragment } from 'react';

const Amenities = ({toggleAmenitiesHidden, amenityCategories}) => {
    // https://ourcodeworld.com/articles/read/608/how-to-camelize-and-decamelize-strings-in-javascript
    function decamelize(str, separator) {
        separator = typeof separator === "undefined" ? "_" : separator;

        let newString = str
        .replace(/([a-z\d])([A-Z])/g, "$1" + separator + "$2")
        .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, "$1" + separator + "$2")
        .split(" ")
        
        return newString.map(word => word === "And" ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1)).join(" ")
    }

    function amenitiesList(categoryAmenities) {
        let amenities = Object.entries(categoryAmenities)
        return amenities.map((amenity, i) => {
            switch (amenity[0]) {
                case "deskDay":
                    return (
                        <Fragment key={i}>
                            <div className="amenity-modal-item">Day pass available</div>
                            <div className="amenity-modal-item">
                            Individual desk option
                            </div>
                        </Fragment>
                    );
                case "peopleCapacity":
                    return (
                        <div className="amenity-modal-item" key={i}>
                            {" "}
                            {amenity[1]} total capacity{" "}
                        </div>
                    );
                case "officeCapacity":
                    return (
                        <div className="amenity-modal-item" key={i}>
                            {" "}
                            {amenity[1]} offices{" "}
                        </div>
                    );
                case "transitStationMiles":
                    return amenity[1] < 1 ? (
                        <div className="amenity-modal-item" key={i}>
                            &lt;1 mile to nearest transit station{" "}
                        </div>
                        ) : (
                        <div className="amenity-modal-item" key={i}>
                            {amenity[1]} miles to nearest transit station{" "}
                        </div>
                    );
                case "hours24Access":
                    return (
                        <div className="amenity-modal-item" key={i}>
                            24/7 Access
                        </div>
                    );
                case "sharedDeskOption":
                    return (
                        <div className="amenity-modal-item" key={i}>
                            Shared Desk Option
                        </div>
                    );
                case "phoneBooths":
                    return (
                        <div className="amenity-modal-item" key={i}>
                            {amenity[1]} phone booths
                        </div>
                    );
                case "bikeParking":
                    return (
                        <div className="amenity-modal-item" key={i}>
                            Bike parking available
                        </div>
                    );
                case "printersIncluded":
                    return (
                        <div className="amenity-modal-item" key={i}>
                            Printers and scanners included
                        </div>
                    );
                case "wellnessRoom":
                    return (
                        <div className="amenity-modal-item" key={i}>
                            Wellness room
                        </div>
                    );
                case "eventSpace":
                    return (
                        <div className="amenity-modal-item" key={i}>
                            Event space available
                        </div>
                    );
                case "meetingRooms":
                    return (
                        <div className="amenity-modal-item" key={i}>
                            {amenity[1]} meeting rooms{" "}
                        </div>
                    );
                case "availability":
                    return (
                        <div className="amenity-modal-item" key={i}>
                            Space available
                        </div>
                    );
                case "napRoom":
                    return (
                        <div className="amenity-modal-item" key={i}>
                            Nap room
                        </div>
                    );
                case "petFriendly":
                    return (
                        <div className="amenity-modal-item" key={i}>
                            Pet friendly
                        </div>
                    );
                case "teaCoffeeIncluded":
                    return (
                        <div className="amenity-modal-item" key={i}>
                            Tea and coffee included
                        </div>
                    );
                case "bocceBall":
                    return (
                        <div className="amenity-modal-item" key={i}>
                            Bocce ball
                        </div>
                    );
                default:
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