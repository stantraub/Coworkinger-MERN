import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    function logoutUser(e) {
        e.preventDefault();
        props.logout();
    }

    function getLinks() {
        if (props.loggedIn) {
          const {id: userId } = props.currentUser
          return (
            <div className="nav__links flex-row">
              <Link
                className="nav__link"
                to={"/create_space"}
              >
                List a workspace
              </Link>

              <Link
                className="nav__link"
                to={`/profile/${userId}`}
              >
                Profile
              </Link>

              <Link
                className="nav__link"
                to={"/spaces"}
              >
                Find a Workspace
              </Link>

              <button className="signup-button" onClick={logoutUser}>
                Logout
              </button>
            </div>
          );
        } else {
            return (
              <div className="nav__links flex-row">
                <Link className="nav__link" to={"/spaces"}>
                  Find a workspace 
                </Link>
                <div
                  className="nav__link"
                  onClick={() => props.openModal("login")}
                >
                  Sign In
                </div>
                <button
                  onClick={() => props.openModal("signup")}
                  className="signup-button"
                >
                  Signup
                </button>
              </div>
            );
        }
    }
    return (
      <div className='nav flex-row'>
          <span><Link to="/" className='nav__logo'>Coworkinger</Link></span>
          { getLinks() }
      </div>
    );
}

export default Navbar;
