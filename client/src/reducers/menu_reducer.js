import { TOGGLE_MENU_HIDDEN } from '../actions/menu_actions'

const INITIAL_STATE = {
    hidden: true
}

const menuReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_MENU_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state
    }
}

export default menuReducer