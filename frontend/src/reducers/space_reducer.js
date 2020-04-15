import {
    RECEIVE_SPACE,
    RECEIVE_ALL_SPACES,
}
    from '../actions/space_actions'

import { RECEIVE_NEW_REVIEW } from '../actions/review_actions'

import merge from "lodash/merge";

const SpacesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_SPACE:
            return {
                ...oldState,
                [action.space.data._id]: action.space.data
            }
        case RECEIVE_ALL_SPACES:
            return merge({}, action.spaces)
        case RECEIVE_NEW_REVIEW:
            return {
                ...oldState[action.review.data.spaceId].reviews.push(action.review.data)
            }
        default:
            return oldState;
    }
}

export default SpacesReducer;