import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

import MenuContainer from './menu_icon_container'
import MenuDropdownContainer from './menu-dropdown_container'

const Navbar = (props) => {
  function logoutUser(e) {
      e.preventDefault();
      props.logout();
  }

  function getLinks() {
    if (props.loggedIn) {
      const {id: userId } = props.currentUser
      return (
        <Fragment>
          <div className="nav__links flex-row">
            <Link className="nav__link" to={"/create_space"}>
              List a workspace
            </Link>

            <Link className="nav__link" to={`/profile/${userId}`}>
              Profile
            </Link>

            <Link className="nav__link" to={"/spaces"}>
              Find a Workspace
            </Link>

            <button className="signup-button" onClick={logoutUser}>
              Logout
            </button>
          </div>
          <MenuContainer />
        </Fragment>
      );
    } else {
        return (
          <Fragment>
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
            <MenuContainer />
          </Fragment>
        );
    }
  }
  
  return (
    <nav className="nav flex-row">
      <Link to="/" className="nav__logo">
        Coworkinger
      </Link>
      <span>{getLinks()}</span>
      {props.hidden ? null : <MenuDropdownContainer />}
    </nav>
  );
}

export default Navbar;
