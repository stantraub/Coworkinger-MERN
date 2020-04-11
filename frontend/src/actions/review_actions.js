import { addNewReview } from '../util/review_api_util'
export const RECEIVE_NEW_REVIEW = 'RECEIVE_NEW_REVIEW'

export const receiveNewReview = (review) => ({
    type: RECEIVE_NEW_REVIEW,
    review
})

export const addReview = (data) => dispatch => (
    addNewReview(data)
    .then(review => dispatch(receiveNewReview(review)))
    .catch(err => console.log(err))
)