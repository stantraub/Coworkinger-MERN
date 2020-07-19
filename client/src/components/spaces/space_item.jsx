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

  return (
    <div className="space-item flex-row">
      <Link to={`/spaces/${props.spaceId}`} className="space-item__link-pic">
        {renderImage()}
      </Link>
      <Link to={`/spaces/${props.spaceId}`} className="space-item__link-info">
        {rating > 0 ? (
          <div className="space-rating flex-row">
            <div className="space-rating__star-container">
              <img
                className="space-rating__star-img"
                src={
                  "https://coworking-dev.s3-us-west-1.amazonaws.com/blue-star-icon-14-min.png"
                }
                alt="star"
              />
            </div>
            <div className="space-rating__average">
              {rating > 0 ? formatRating(rating) : null}
            </div>
            <span className="space-rating__num-reviews">
              ({props.reviews.length})
            </span>
          </div>
        ) : null}
        <div className="space-item__name">{props.name}</div>
        <div className="space-item__amenities">
          <div>
            {props.city}, {props.state}
          </div>
          <span>{props.neighborhood}</span>
          <div className="space-item__amenities-list">
            {includedAmenities()}
          </div>
          <div>{props.phone !== "N/A" ? props.phone : null}</div>
          <div>{props.email !== "N/A" ? props.email : null}</div>
        </div>
        <div className="space-item__cost">
          <strong>${props.cost}</strong> per desk / month
        </div>
      </Link>
    </div>
  );
};

export default SpaceItem;
