import { connect } from 'react-redux'
import { toggleMenuHidden } from '../../actions/menu_actions'
import { openModal } from '../../actions/modal_actions'
import { logout } from "../../actions/session_actions";

import MenuDropdown from './menu-dropdown.jsx'

const msp = (state) => ({
  loggedIn: state.session.isAuthenticated,
  currentUser: state.session.user
});

const mdp = (dispatch) => ({
    toggleMenuHidden: () => dispatch(toggleMenuHidden()),
    openModal: modal => dispatch(openModal(modal)),
    logout: () => dispatch(logout())
})

export default connect(msp, mdp)(MenuDropdown) 