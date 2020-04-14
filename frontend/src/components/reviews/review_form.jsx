import React, { useState, useEffect } from 'react'
import './review_form.css'
import Spinner from '../spinner/spinner';


const ReviewForm = (props) => {
    const [form, setState] = useState({
        rating: "",
        text: ""
    })

    const { space } = props

    useEffect(() => {
        if (!space) {
            let {
                id: spaceId
            } = props.match.params
            props.fetchSpace(spaceId)
        }
        
    
    }, [])

    const handleSubmit = () => {

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
            <form>
                <div className="review-input-container">
                    <input 
                        type="textarea"
                        placeholder="rating"
                        // onChange={}
                    />
                    <br />
                    <textarea 
                        // value={}
                        placeholder="Write your review..."
                        className="review-text"
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