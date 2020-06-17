import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Spinner from '../spinner/spinner';

const LoginForm = (props) => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        await props.login(form)
        setLoading(false)
        props.history.push('/spaces')
    }

    const processDemo = async () => {
         let user = {
            email: "demouser@gmail.com",
            password: "123456"
        }

        await props.login(user, props.history)
        setLoading(false)
        props.history.push("/spaces");

    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

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
          <label className="session__label">
            Email
            <input
              type="text"
              name="email"
              onChange={handleInputChange}
              placeholder="name@email.com"
              className="session__input"
              autoComplete="on"
              required
            />
          </label>
          <label className="session__label">
            Password
            <input
              type="password"
              name="password"
              onChange={handleInputChange}
              placeholder="password"
              className="session__input"
              autoComplete="on"
              required
            />
          </label>
          <button
            type="submit"
            value="Sign In"
            onClick={(e) => handleSubmit(e)}
            className="session-btn"
          >
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
        <div className="session__change">
          Don't have an account?{" "}
          <Link to="/users/signup" className="session__change__switch">
            Sign Up
          </Link>
        </div>
      </div>
    );
}

export default withRouter(LoginForm);