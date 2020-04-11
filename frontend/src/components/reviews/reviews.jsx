import React from 'react'
import ReviewItem from './review_item'
const Reviews = props => {
    const { reviews } = props
    
    return reviews.length > 0 ? (
        <div>
            <div className='reviews-header'>
                <h2>Reviews</h2>
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