import React from 'react'
import ReviewItem from './review_item'
const Reviews = props => {
    const { reviews, rating } = props
    return reviews.length > 0 ? (
        <div>
            <div className='reviews-header'>
                <h2>Reviews</h2>
                <div className="reviews-header-info">
                    <div className="star-container">
                        <img className="star" src={"https://coworking-dev.s3-us-west-1.amazonaws.com/blue-star-icon-14-min.png"} />
                    </div>
                    <div className="reviews-rating">{rating}</div>
                    <div className="separator"></div>
                    <span className="reviews-length-counter">{reviews.length}</span>
                    <span>reviews</span>
                </div>
            </div>
            {reviews.map((review) => {
                return <ReviewItem key={review._id} review={review} />
            })}
            
        </div>
    ) : (
        <div className='reviews-header'>
            <h2>No reviews (yet)</h2>
        </div>
    )
}

export default Reviews;