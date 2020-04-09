import React from 'react';
import { withRouter } from 'react-router-dom';
import './session_modal.css'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {}
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.processDemo = this.processDemo.bind(this)
        // this.renderErrors = this.renderErrors.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push('/reviews');
        }

        this.setState({ errors: nextProps.errors})
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();

        let user = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.login(user).then(this.props.closeModal);
    }

    processDemo() {
        let user = {
            email: "demouser@gmail.com",
            password: "123456"
        }

        this.props.login(user, this.props.history).then(this.props.closeModal)
    }

    render() {
        return (
          <div className="session-container">
            <div className="session-header">Sign in to your account</div>
            <form onSubmit={this.handleSubmit} className="session-form">
              <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email Address"
                className="session-input"
              />
              <br />
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
                className="session-input"
              />
              <br />
              <input 
                  type="submit"
                  value="Sign In"
                  className="session-submit"
              />
            <button className="demo-login-button" onClick={() => this.processDemo()}>Demo Login</button>

            </form>
            <br />
            <div className="change-form-div">Don't have an account? <span className="session-switch" onClick={() => this.props.openModal('signup')}>Sign Up</span></div>

          </div>
        );
    }
}

export default withRouter(LoginForm);