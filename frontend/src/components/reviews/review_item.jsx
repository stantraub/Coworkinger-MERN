import React from 'react'
import './reviews.css'

const ReviewItem = props => {
    console.log(props)
    const { review } = props
    return (
        <div className="review-item-container">
            <p>{review.text}</p>
        </div>
    )
}

export default ReviewItem