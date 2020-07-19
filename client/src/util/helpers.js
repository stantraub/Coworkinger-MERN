import React from 'react'

export const formatAmenities = (amenity, i, className) => {
    switch (amenity[0]) {
        case "deskDay":
            return (
                <div className={className} key={i}>
                    Individual desk option
                </div>
            );
        case "peopleCapacity":
            return (
                <div className={className} key={i}>
                    {" "}
                    {amenity[1]} total capacity{" "}
                </div>
            );
        case "officeCapacity":
            return (
                <div className={className} key={i}>
                    {" "}
                    {amenity[1]} offices{" "}
                </div>
            );
        case "transitStationMiles":
            return amenity[1] < 1 ? (
                <div className={className} key={i}>
                    &lt;1 mile to nearest transit station{" "}
                </div>
            ) : (
                    <div className={className} key={i}>
                        {amenity[1]} miles to nearest transit station{" "}
                    </div>
                );
        case "hours24Access":
            return (
                <div className={className} key={i}>
                    24/7 Access
                </div>
            );
        case "sharedDeskOption":
            return (
                <div className={className} key={i}>
                    Shared Desk Option
                </div>
            );
        case "phoneBooths":
            return (
                <div className={className} key={i}>
                    {amenity[1]} phone booths
                </div>
            );
        case "bikeParking":
            return (
                <div className={className} key={i}>
                    Bike parking available
                </div>
            );
        case "printersIncluded":
            return (
                <div className={className} key={i}>
                    Printers and scanners included
                </div>
            );
        case "wellnessRoom":
            return (
                <div className={className} key={i}>
                    Wellness room
                </div>
            );
        case "eventSpace":
            return (
                <div className={className} key={i}>
                    Event space available
                </div>
            );
        case "meetingRooms":
            return (
                <div className={className} key={i}>
                    {amenity[1]} meeting rooms{" "}
                </div>
            );
        case "availability":
            return (
                <div className={className} key={i}>
                    Space available
                </div>
            );
        case "napRoom":
            return (
                <div className={className} key={i}>
                    Nap room
                </div>
            );
        case "petFriendly":
            return (
                <div className={className} key={i}>
                    Pet friendly
                </div>
            );
        case "teaCoffeeIncluded":
            return (
                <div className={className} key={i}>
                    Tea and coffee included
                </div>
            );
        case "bocceBall":
            return (
                <div className={className} key={i}>
                    Bocce ball
                </div>
            );
        default:
            return (
                <div className={className} key={i}>
                    {(
                        amenity[0][0].toUpperCase() +
                        amenity[0].slice(1)
                    )
                        .split("_")
                        .join(" ")}
                </div>
            );
    }
}


// https://ourcodeworld.com/articles/read/608/how-to-camelize-and-decamelize-strings-in-javascript
export const decamelize = (str, separator) => {
    separator = typeof separator === "undefined" ? "_" : separator;

    let newString = str
        .replace(/([a-z\d])([A-Z])/g, "$1" + separator + "$2")
        .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, "$1" + separator + "$2")
        .split(" ")

    return newString.map(word => word === "And" ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1)).join(" ")
}

export const amenitiesArr = (amenities) => {
    let { seatingAndSpace, transportation, facilities, accessibility, lifeEnhancements } = amenities
    return { ...seatingAndSpace, ...transportation, ...facilities, ...accessibility, ...lifeEnhancements }
}