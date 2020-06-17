import React from 'react'
import { Link } from 'react-router-dom'

const MenuDropdown = (props) => {
    function logoutUser(e) {
        e.preventDefault();
        props.logout();
    }


    return props.loggedIn ? (
      <div className="menu-dropdown flex-column">
        <Link className="menu-dropdown__link" to={"/create_space"}>
          List a workspace
        </Link>

        <Link
          className="menu-dropdown__link"
          to={`/profile/${props.currentUser.id}`}
        >
          Profile
        </Link>

        <Link
          className="menu-dropdown__link"
          to={"/spaces"}
          onClick={() => props.toggleMenuHidden()}
        >
          Find a Workspace
        </Link>

        <div className="menu-dropdown__link" onClick={logoutUser}>
          Logout
        </div>
      </div>
    ) : (
      <div className="menu-dropdown flex-column">
        <Link
          className="menu-dropdown__link"
          to={"/spaces"}
          onClick={() => props.toggleMenuHidden()}
        >
          Find a workspace
        </Link>
        <div
          className="menu-dropdown__link"
        >
          Sign In
        </div>
        <div
          className="menu-dropdown__link"
        >
          Signup
        </div>
      </div>
    );
 
}

export default MenuDropdown
