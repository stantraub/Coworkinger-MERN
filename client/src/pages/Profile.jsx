import React from "react";
import { Link } from "react-router-dom";

const ProfilePage = (props) => {
  const { profilePic, username, createdAt, id } = props.currentUser;

  function formatDate(joinDate) {
    let formattedDate = Date(joinDate).split(" ");
    let month = formattedDate[1];
    let year = formattedDate[3];
    return `${month} ${year}`;
  }

  function renderImage(photo) {
    let domainName = "https://coworking-dev.s3-us-west-1.amazonaws.com/";
    return (
      <img
        src={domainName + profilePic}
        className="user-show__pic-image"
        alt="profile"
      />
    );
  }

  return (
    <div className="profile-page">
      <div className="user-show flex-row">
        <div className="user-show__container flex-col">
          <div className="user-show__pic-container">
            {renderImage(profilePic)}
          </div>
          <Link
            to={`/profile/edit-photo/${id}`}
            className="user-show__reviews-link"
          >
            Update photo
          </Link>
        </div>
        <div className="user-show__info-container">
          <div className="user-show__info-header">Hi, I'm {username}</div>
          <div className="user-show__join-date">
            Joined in {formatDate(createdAt)}
          </div>
          <div className="user-show__reviews">
            <Link to={"/users/review"} className="user-show__reviews-link">
              Reviews by you
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
