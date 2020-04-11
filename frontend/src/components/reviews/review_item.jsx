import React from 'react'
import './reviews.css'

const ReviewItem = props => {
    console.log(props)
    const { review } = props

    function formatDate(reviewDate) {
        let formattedDate = Date(reviewDate).split(" ")
        let month = formattedDate[1]
        let year = formattedDate[3]
        return `${month} ${year}`
    }
    return (
        <div className="review-item-container">
            <div className="reviewer-info-container">
                <img src={review.reviewer.profilePic} className="reviewer-pic" />
                <div className="reviewer-info">
                    <div className="reviewer-username">{review.reviewer.username}</div>
                    <div className="review-date">{formatDate(review.date)}</div>
                </div>
            </div>
                
            <div className="review-text">{review.text}</div>
        </div>
    )
}

export default ReviewItem