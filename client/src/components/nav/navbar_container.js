import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions'

import NavBar from './navbar';

const msp = state => ({
    loggedIn: state.session.isAuthenticated,
    currentUser: state.session.user,
    hidden: state.ui.menu.hidden
});

const mdp = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    logout: () => dispatch(logout())
})

export default connect(msp, mdp)(NavBar)