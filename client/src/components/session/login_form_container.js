import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';

const msp = state => {
    return {
        errors: state.errors.session,
        user: state.session.user
    };
};

const mdp = (dispatch) => ({
    login: user => dispatch(login(user))
})


export default withRouter(connect(msp, mdp)(LoginForm));