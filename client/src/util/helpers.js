import React from 'react'

export const formatAmenities = (amenity) => {
    switch (amenity[0]) {
        case "deskDay":
            return "Individual desk option"
        case "peopleCapacity":
            return `${amenity[1]} total capacity`
        case "officeCapacity":
            return `${amenity[1]} offices`
        case "transitStationMiles":
            return amenity[1] < 1 ? 
                "<1 mile to nearest transit station" : 
                `${amenity[1]} miles to nearest transit station`
        case "hours24Access":
            return "24/7 Access"
        case "sharedDeskOption":
            return "Shared Desk Option"
        case "phoneBooths":
            return `${amenity[1]} phone booths`
        case "bikeParking":
            return "Bike parking available"
        case "printersIncluded":
            return "Printers and scanners included"
        case "wellnessRoom":
            return "Wellness room"
        case "eventSpace":
            return "Event space available"
        case "meetingRooms":
            return `${amenity[1]} meetings rooms available`
        case "availability":
            return "Space available"
        case "napRoom":
            return "Nap room"
        case "petFriendly":
            return "Pet friendly"
        case "teaCoffeeIncluded":
            return "Tea and coffee included"
        case "bocceBall":
            return "Bocce ball"
        default:
            return amenity[0][0].toUpperCase() + amenity[0].slice(1)
                .split("_")
                .join(" ")
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