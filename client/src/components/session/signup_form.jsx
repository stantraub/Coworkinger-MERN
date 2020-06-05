import React from "react";
import { withRouter } from "react-router-dom";
import './session_modal.css';
import Spinner from "../spinner/spinner";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      password2: "",
      loading: false,
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.processDemo = this.processDemo.bind(this);
    this.clearedErrors = false;
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    let user = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history)
    .then(() => this.setState({loading: false}))
    .then(this.props.closeModal);;
  }

  processDemo() {
    let user = {
      email: "demouser@gmail.com",
      password: "123456"
    }

    this.props.login(user, this.props.history)
    .then(() => this.setState({
      loading: false
    }))
    .then(this.props.closeModal)
  }

  render() {
    return this.state.loading ? (
     <Spinner />
    ) : (
      <div className="session-container">
        <div className="session-header">Create your account</div>
          <form onSubmit={() => {
            this.setState({loading: true})
            this.handleSubmit()
          }} className="session-form">
            <div className="signup-form">
              <br />
              <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email"
                className="session-input"
                required
              />
              <br />
              <input
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
                placeholder="Username"
                className="session-input"
                required
              />
              <br />
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
                className="session-input"
                required
              />
              <br />
              <input
                type="password"
                value={this.state.password2}
                onChange={this.update("password2")}
                placeholder="Confirm Password"
                className="session-input"
                required
              />
              <br />
              <button 
                type="submit"
                value="Sign In"
                className="session-submit"
              >Sign Up</button>              
              <button className="demo-login-button" onClick={() => {
                this.setState({
                  loading: true
                })
                this.processDemo()
            }
            }>Demo Login</button>
            </div>
          </form>
          <br />
          <div className="change-form-div">Have an Account? <span className="session-switch" onClick={() => this.props.openModal('login')}>Log In</span></div>
      </div>
    )
  }
}

export default withRouter(SignupForm);