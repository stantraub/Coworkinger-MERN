import axios from 'axios'

export const RECEIVE_NEW_REVIEW = 'RECEIVE_NEW_REVIEW'

export const receiveNewReview = (review) => ({
    type: RECEIVE_NEW_REVIEW,
    review
})

export const addReview = (data) => dispatch => (
    axios.post('/api/reviews', data)
    .then(review => dispatch(receiveNewReview(review)))
    .catch(err => console.log(err))
)