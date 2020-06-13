import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Spinner from '../spinner/spinner';

const LoginForm = (props) => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const [loading, setLoading] = useState(false)

    const handleSubmit = async () => {
        await props.login(form)
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
      <div className="session">
        <div className="session__header">Sign in to your account</div>
        <form
          onSubmit={() => {
            setLoading(true);
            handleSubmit();
          }}
          className="session__form"
        >
          <input
            type="text"
            onChange={(e) => setForm({ email: e.target.value })}
            placeholder="Email Address"
            className="session__input"
            required
          />
          <br />
          <input
            type="password"
            onChange={(e) => setForm({ password: e.target.value })}
            placeholder="Password"
            className="session__input"
            required
          />
          <br />
          <button type="submit" value="Sign In" className="session-btn">
            Sign In
          </button>
          <button
            className="session-btn"
            onClick={() => {
              setLoading(true);
              processDemo();
            }}
          >
            Demo Login
          </button>
        </form>
        <br />
        <div className="session__change">
          Don't have an account?{" "}
          <span
            className="session__change__switch"
            onClick={() => props.openModal("signup")}
          >
            Sign Up
          </span>
        </div>
      </div>
    );
}

export default withRouter(LoginForm);