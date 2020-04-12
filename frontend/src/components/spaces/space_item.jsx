import React from "react";
import { Link } from "react-router-dom";


import "./space_item.css"

const SpaceItem = props => {
  let rating = props.rating.$numberDecimal
  function formatRating(rating) {
    let formatted = parseFloat(rating)
    return formatted.toString().length === 1 ? formatted.toFixed(1) : formatted.toFixed(2)
  }

  function includedAmenities() {
    let included = "";

    if (props.availability) {
      included += "Space available · ";
    }

    if (props.deskDay) {
      included += "Day Passes Available · ";
    }

    included += `${props.peopleCapacity} total capacity`;

    if (props.officeCapacity > 0) {
      included += ` · ${props.officeCapacity} offices`;
    }
    return included;
  }

  function phone() {
    if (props.phone !== "N/A") return props.phone;
  }

  function email() {
    if (props.email !== "N/A") return props.email;
  }

  return (
    <div className="space-item-wrapper">
      <Link to={`/spaces/${props.spaceId}`} className="space-link">
        <img className="main-pic" src={props.mainPhoto} />
      </Link>
      <Link to={`/spaces/${props.spaceId}`} className="space-link">
        <div className="space-item-info">
          {rating > 0 ? (
            <div className="space-rating-container">
              <div className="space-star-container">
                <img className="star" src={"https://coworking-dev.s3-us-west-1.amazonaws.com/blue-star-icon-14-min.png"} />
              </div>
              <span className="space-rating">{rating > 0 ? formatRating(rating) : null}</span>
              <span className="space-num-reviews">({props.reviews.length})</span>
            </div>
          ) : null}
          <div className="space-item-name">{props.name}</div>
          <div className="space-item-amenities">
            <div>
              {props.city}, {props.state}
            </div>
            <span>{props.neighborhood}</span>
            <div className="space-amenity-wrapper">{includedAmenities()}</div>
            <div className="space-item-contact">
              <div>{phone()}</div>
              <div>{email()}</div>
            </div>
          </div>
          <div className="space-item-cost">
            <strong>${props.cost}</strong> per desk / month
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SpaceItem;
