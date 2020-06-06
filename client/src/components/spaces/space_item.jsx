import React from "react";
import { Link } from "react-router-dom";

const SpaceItem = props => {
  let rating = props.rating.$numberDecimal

  function formatRating(rating) {
    let formatted = parseFloat(rating)
    return formatted.toString().length === 1 ? formatted.toFixed(1) : formatted.toFixed(2)
  }

  function renderImage() {
    let domainName = 'https://coworking-dev.s3-us-west-1.amazonaws.com/'
    if (!props.mainPhoto.includes(domainName)) {
      return (
        <img 
          className="space-item__pic"
          src={
            domainName +
            props.mainPhoto
          }
          alt="Main"
        />
      )
    } else {
      return (
        <img 
          src={props.mainPhoto}
          className="space-item__pic"
          alt="Main"
        />
      )
    }
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
    <div className="space-item">
      <Link to={`/spaces/${props.spaceId}`} className="space-item__link-pic">
        {renderImage()}
      </Link>
      <Link to={`/spaces/${props.spaceId}`} className="space-item__link-info">
        {rating > 0 ? (
          <div className="space-rating-container flex-row">
            <div className="space-star-container">
              <img
                className="star"
                src={
                  "https://coworking-dev.s3-us-west-1.amazonaws.com/blue-star-icon-14-min.png"
                }
                alt="star"
              />
            </div>
            <span className="space-rating">
              {rating > 0 ? formatRating(rating) : null}
            </span>
            <span className="space-num-reviews">
              ({props.reviews.length})
            </span>
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
        <div className="space-item__cost">
          <strong>${props.cost}</strong> per desk / month
        </div>
      </Link>
    </div>
  );
};

export default SpaceItem;
