import React from 'react'
import ReviewItem from './review_item'
import { Link } from 'react-router-dom'
const Reviews = props => {
    const { reviews, rating } = props
    const { id: spaceId } = props.match.params
    const { isAuthenticated } = props

    function checkAuth() {

    }
    
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
  
            {isAuthenticated ? ( 
                <div className = "write-review-container" >
                    <span className="write-review-question">Worked at this space? </span>
                    <span><Link className="start-review-link" to={`write-review/${spaceId}`}>Write a review</Link></span>
                </div>
            ) : (
                <div className = "write-review-container" >
                    <span>Log In to post a review</span>
                </div>
                )
            }

            {reviews.map((review) => {
                return <ReviewItem key={review._id} review={review} />
            })}
            
        </div>
    ) : (
        <div>
            <div className='no-reviews-header'>
                <h2>No reviews (yet)</h2>
            </div>
            {isAuthenticated ? ( 
                <div className = "write-review-container" >
                    <span className="write-review-question">Worked at this space? </span>
                    <span><Link className="start-review-link" to={`write-review/${spaceId}`}>Write a review</Link></span>
                </div>
            ) : (
                <div className = "write-review-container" >
                    <span>Log In to post a review</span>
                </div>
                )
            }
        </div>
    )
}

export default Reviews;