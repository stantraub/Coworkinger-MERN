import {
    RECEIVE_SPACE,
    RECEIVE_ALL_SPACES
}
    from '../actions/space_actions'

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
        // case REMOVE_SPACE:
        //     delete newState[action.spaceId]
        //     return newState
        default:
            return oldState;
    }
}

export default SpacesReducer;