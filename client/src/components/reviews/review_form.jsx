import React, { useState, useEffect } from 'react'
import './review_form.css'
import Spinner from '../spinner/spinner';


const ReviewForm = (props) => {
    const [form, setState] = useState({
        rating: "",
        text: ""
    })

    const { space, reviewer } = props
    let { id: spaceId } = props.match.params

    useEffect(() => {
        if (!space) {
            props.fetchSpace(spaceId)
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        let review = {
            rating: form.rating,
            text: form.text,
            reviewer,
            spaceId
        }

        props.addReview(review)
        .then(() => props.history.push(`/spaces/${spaceId}`))
    }

    const update = (field) => {
        return e => (
            setState({
                ...form,
                [field]: e.currentTarget.value
            })
        )
    }

    return space ? (
        <div className="review-form-container">
            <h1>{space.name}</h1>
            <form onSubmit={handleSubmit}>
                <div className="review-input-container">
                    <input 
                        type="textarea"
                        placeholder="rating"
                        onChange={update('rating')}
                    />
                    <br />
                    <textarea 
                        onChange={update('text')}
                        placeholder="Write your review..."
                        className="review-form-text"
                    />
               
                    
                </div>
                <button className="review-submit">Submit Review</button>
            </form>
        </div>
    ) : (
        <Spinner />
    )
}

export default ReviewForm;