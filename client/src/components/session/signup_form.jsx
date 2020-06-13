import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Spinner from "../spinner/spinner";

const SignupForm = (props) => {
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    passwordConfirm: ""
  })

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault()

    await props.signup(form, props.history)
    setLoading(false)
    props.closeModal()
  }

  const processDemo = async () => {

    let user = {
      email: "demouser@gmail.com",
      password: "123456"
    }

    await props.login(user, props.history)
    setLoading(false)
    props.closeModal()
  }

  return loading ? (
    <Spinner />
  ) : (
    <div className="session flex-column">
      <div className="session__header">Create your account</div>
        <form onSubmit={() => {
          setLoading(true)
          handleSubmit()
        }} className="session__form">
            <input
              type="text"
              onChange={e => setForm({email: e.target.value})}
              placeholder="Email"
              className="session__input"
              required
            />
            <br />
            <input
              type="text"
              onChange={e => setForm({username: e.target.value})}
              placeholder="Username"
              className="session__input"
              required
            />
            <br />
            <input
              type="password"
              onChange={e => setForm({password: e.target.value})}
              placeholder="Password"
              className="session__input"
              required
            />
            <br />
            <input
              type="password"
              onChange={e => setForm({passwordConfirm: e.target.value})}
              placeholder="Confirm Password"
              className="session__input"
              required
            />
            <br />
            <button 
              type="submit"
              value="Sign In"
              className="session-btn"
            >Sign Up</button>              
            <button className="session-btn" onClick={() => {
              setLoading(true)
              processDemo()
          }
          }>Demo Login</button>
        </form>
        <br />
        <div className="session__change">Have an Account? <span className="session__change__switch" onClick={() => props.openModal('login')}>Log In</span></div>
    </div>
  )
}

export default withRouter(SignupForm);
