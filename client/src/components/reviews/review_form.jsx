import React, { useState, useEffect } from 'react'
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
      <form onSubmit={handleSubmit} className="review-form">
        <div className="review-form__container">
          <h1>{space.name}</h1>
          <input
            type="textarea"
            placeholder="rating"
            onChange={update("rating")}
          />
          <br />
          <textarea
            onChange={update("text")}
            placeholder="Write your review..."
            className="review-form__text"
          />
        </div>
        <button className="review-form__submit-button">Submit Review</button>
      </form>
    ) : (
      <Spinner />
    );
}

export default ReviewForm;