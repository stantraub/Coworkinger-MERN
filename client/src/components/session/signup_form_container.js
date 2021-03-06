import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import SignupForm from './signup_form';

const msp = (state) => ({
    signedIn: state.session.isSignedIn,
    errors: state.errors.session
})

const mdp = (dispatch) => ({
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user))
})

export default connect(msp, mdp)(SignupForm);