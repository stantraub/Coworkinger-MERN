import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';
import { closeModal, openModal } from '../../actions/modal_actions'

const msp = state => {
    return {
        errors: state.errors.session,
        user: state.session.user
    };
};

const mdp = (dispatch) => ({
    login: user => dispatch(login(user)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
})


export default withRouter(connect(msp, mdp)(LoginForm));