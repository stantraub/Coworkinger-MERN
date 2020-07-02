import React from 'react'
import ReviewItem from './review_item'
import { Link } from 'react-router-dom'

const Reviews = props => {
    const { reviews, rating } = props
    const { id: spaceId } = props.match.params
    const { isAuthenticated } = props
    
    return reviews.length > 0 ? (
        <section>
            <div className="reviews-stats__header">Reviews</div>
            <div className='reviews-stats'>
                <div className="reviews-stats__header-info flex-row">
                    <div className="reviews-stats__star-container">
                        <img className="reviews-stats__star" src={"https://coworking-dev.s3-us-west-1.amazonaws.com/blue-star-icon-14-min.png"} alt="star" />
                    </div>
                    <div className="reviews-stats__rating">{rating}</div>
                    <div className="reviews-stats__separator"></div>
                    <span className="reviews-stats__length-counter">{reviews.length}</span>
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
                    <span onClick={() => props.openModal('login')} className="review-login-action">Log in </span>
                    <span>to post a review</span>
                </div>
                )
            }

            {reviews.map((review) => {
                return <ReviewItem key={review._id} review={review} />
            })}
            
        </section>
    ) : (
        <section>
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
                    <span onClick={() => props.openModal('login')} className="review-login-action">Log in </span>
                    <span>to post a review</span>
                </div>
                )
            }
        </section>
    )
}

export default Reviews;