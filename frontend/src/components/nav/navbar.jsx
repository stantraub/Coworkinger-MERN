import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

class Navbar extends React.Component {
    constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
    e.preventDefault();
    this.props.logout();
    }

    getLinks() {
        if (this.props.loggedIn) {
            return (
            <div>
                <Link to={"/reviews"}>All Reviews</Link>
                <Link to={"/profile"}>Profile</Link>
                <Link to={"/new_review"}>Write a Review</Link>
                <button onClick={this.logoutUser}>Logout</button>
            </div>
            );
        } else {
            return (
                <div className="action-buttons-wrapper">
                    <div className='action-item'>
                        <span>List a workspace</span>
                    </div>
                    <div className='action-item'>
                        <span>Find a workspace</span>
                    </div>
                    <div className='action-item'>
                        <span>Write a Review</span>
                    </div>
                    <div className='action-item'>
                        <Link style={{textDecoration: 'none', color: 'black'}} to={"/login"}>Sign In</Link>
                    </div>
                    <div className='action-item'>
                        <button className='signup-button'>
                            <Link className='signup-link' to={"/signup"}>Signup</Link>
                        </button>
                    </div>
                </div>
            );
        }
    }
    render() {
        return (
            <div className='main-nav'>
                <Link to="/" className='main-logo'>Coworking Reviews</Link>
                { this.getLinks() }
            </div>
        );
    }
}

export default Navbar;
