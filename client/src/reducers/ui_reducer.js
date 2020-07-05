import { combineReducers } from 'redux';

import menu from './menu_reducer'
import carousel from './carousel_reducer'

export default combineReducers({
    menu,
    carousel
});