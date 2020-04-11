import {
    RECEIVE_SPACE,
    RECEIVE_ALL_SPACES,
    RECEIVE_NEW_SPACE
}
    from '../actions/space_actions'

import { RECEIVE_NEW_REVIEW } from '../actions/review_actions'

import merge from "lodash/merge";

const SpacesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = {}
    switch (action.type) {
        case RECEIVE_SPACE:
            newState[action.space.data._id] = action.space.data
           
            return newState
        case RECEIVE_ALL_SPACES:
            return merge({}, action.spaces)
        case RECEIVE_NEW_SPACE:
            return {
                ...oldState,
                [action.space.data._id]: action.space.data
            }
        case RECEIVE_NEW_REVIEW:
            newState[action.review.data._id].reviews = action.review.data
            return newState
        default:
            return oldState;
    }
}

export default SpacesReducer;