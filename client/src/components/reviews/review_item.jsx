import React from 'react'

const ReviewItem = ({review}) => {

    function formatDate(reviewDate) {
        let formattedDate = Date(reviewDate).split(" ")
        let month = formattedDate[1]
        let year = formattedDate[3]
        return `${month} ${year}`
    }

    function renderImage(photo) {
        let domainName = 'https://coworking-dev.s3-us-west-1.amazonaws.com/'
        if (!photo.includes(domainName)) {
        return (
            <img 
            className="review-item__reviewer-pic"
            src={
                domainName +
                photo
            }
            alt="Reviewer"
            />
        )
        } else {
            return (
                <img 
                src={photo}
                className="review-item__reviewer-pic"
                alt="Reviewer"
                />
            )
        }
    }
    return (
        <div className="review-item">
            <div className="review-item__reviewer flex-row">
                {renderImage(review.reviewer.profilePic)}
                <div className="review-item__reviewer-container flex-col">
                    <div className="review-item__reviewer-username">{review.reviewer.username}</div>
                    <div className="review-item__reviewer-date">{formatDate(review.date)}</div>
                </div>
            </div>
                
            <div className="review-item__text">{review.text}</div>
        </div>
    )
}

export default ReviewItem