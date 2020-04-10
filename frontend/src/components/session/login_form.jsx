import React from 'react';
import { withRouter } from 'react-router-dom';
import './session_modal.css'
import Spinner from '../spinner/spinner';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            loading: false,
            errors: {}
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.processDemo = this.processDemo.bind(this)
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    handleSubmit() {
        let user = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.login(user)
        .then(() => this.setState({
            loading: false
        }))
        .then(this.props.closeModal);
    }

    processDemo() {
        let user = {
            email: "demouser@gmail.com",
            password: "123456"
        }

        this.props.login(user, this.props.history)
        .then(() => this.setState({loading: false}))
        .then(this.props.closeModal)
    }

    render() {
        return this.state.loading ? (
         <Spinner />
        ) : (
        <div className="session-container">
            <div className="session-header">Sign in to your account</div>
            <form onSubmit={() => {
                this.setState({
                    loading: true
                })
                this.handleSubmit()}} className="session-form">
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
            <button className="demo-login-button" 
            onClick={() => {
                this.setState({
                    loading: true
                })
                this.processDemo()
            }
            }>Demo Login</button>

            </form>
            <br />
            <div className="change-form-div">Don't have an account? <span className="session-switch" onClick={() => this.props.openModal('signup')}>Sign Up</span></div>

          </div>
        )
    }
}

export default withRouter(LoginForm);