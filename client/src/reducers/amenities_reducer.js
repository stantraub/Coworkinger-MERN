import { TOGGLE_AMENITIES_HIDDEN} from '../actions/amenities_actions'

const INITIAL_STATE = {
    hidden: true
}

const amenitiesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_AMENITIES_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default: 
            return state
    }
}

export default amenitiesReducer