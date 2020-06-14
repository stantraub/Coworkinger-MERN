import { combineReducers } from 'redux';


import modal from './modal_reducer';
import menu from './menu_reducer'

export default combineReducers({
    modal,
    menu
});