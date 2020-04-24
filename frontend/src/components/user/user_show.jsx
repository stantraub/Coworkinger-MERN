import React from 'react'
import { Link } from 'react-router-dom'
import './user_show.css'

const UserShow = (props) => {
    const { profilePic, username, createdAt, id} = props.currentUser

    function formatDate(joinDate) {
        let formattedDate = Date(joinDate).split(" ")
        let month = formattedDate[1]
        let year = formattedDate[3]
        return `${month} ${year}`
    }

    function renderImage(photo) {
        let domainName = 'https://coworking-dev.s3-us-west-1.amazonaws.com/'
        return (
            <img 
            src={domainName + profilePic} 
            className="user-show-profilePic" 
            />
        )
    }

    return (
        <div className="user-show-container">
            <div className="user-show-div">
                <div className="user-show-profilePic-container">
                {renderImage(profilePic)}
                </div>
                <Link to={`/profile/edit-photo/${id}`} className="user-show-reviews-link">Update photo</Link>
            </div>
            <div className="user-show-info-container">
                <div className="user-show-info-header">Hi, I'm {username}</div>
                <div className="user-show-join-date">Joined in {formatDate(createdAt)}</div>
                <div className="user-show-reviews-div">
                    <Link to={'/users/review'} className="user-show-reviews-link">Reviews by you</Link>
                </div>
            </div>
        </div>
    )
}

export default UserShow