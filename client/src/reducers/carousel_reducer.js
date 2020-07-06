import { TOGGLE_CAROUSEL_HIDDEN } from '../actions/carousel_actions'

const INITIAL_STATE = { 
    hidden: true
}

const carouselReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_CAROUSEL_HIDDEN:
            return {...state,
                hidden: !state.hidden
            }
        default: 
            return state
    }
}

export default carouselReducer