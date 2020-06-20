import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom"
import Spinner from "../spinner/spinner";

const SignupForm = (props) => {
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    password2: ""
  })

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault()
    await props.signup(form, props.history)
    setLoading(false)
    props.history.push("/spaces");
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

  const handleInputChange = e => {
    const {name, value} = e.target
    setForm({...form, [name]: value})
  }

  return loading ? (
    <Spinner />
  ) : (
    <div className="session flex-column">
      <div className="session__header">Create your account</div>
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
            value={form.email}
            onChange={handleInputChange}
            placeholder="name@email.com"
            className="session__input"
            required
          />
        </label>
        <label className="session__label">
          Username
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleInputChange}
            placeholder="Username"
            className="session__input"
            required
          />
        </label>
        <label className="session__label">
          Password
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleInputChange}
            placeholder="Create a password"
            className="session__input"
            required
          />
        </label>
        <label className="session__label">
          Confirm Password
          <input
            type="password"
            name="password2"
            value={form.password2}
            onChange={handleInputChange}
            placeholder="Confirm password"
            className="session__input"
            required
          />
        </label>
        <button
          type="submit"
          value="Sign In"
          className="session-btn"
          onClick={(e) => handleSubmit(e)}
        >
          Sign Up
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
        Have an Account?{" "}
        <Link className="session__change__switch" to={"/users/login"}>
          Log In
        </Link>
      </div>
    </div>
  );
}

export default withRouter(SignupForm);
