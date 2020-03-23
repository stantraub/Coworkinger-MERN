import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

const Navbar = (props) => {

    function logoutUser(e) {
        e.preventDefault();
        props.logout();
    }

    function getLinks() {
        if (props.loggedIn) {
            return (
            <div className='action-buttons-wrapper'>
                <div className='action-item'>
                    <span><Link style={{ textDecoration: 'none', color: 'black' }} to={"/create_space"}>List a workspace</Link></span>
                </div>
                <div className='action-item'>
                        <span><Link style={{ textDecoration: 'none', color: 'black' }} to={"/profile"}>Profile</Link></span>
                </div>
                <div className='action-item'>
                        <span><Link style={{ textDecoration: 'none', color: 'black' }} to={"/spaces"}>Find a Workspace</Link></span>
                </div>
                <button className='signup-button' onClick={logoutUser}>Logout</button>
            </div>
            );
        } else {
            return (
                <div className="action-buttons-wrapper">
                    <div className='action-item'>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to={'/spaces'}><span>Find a workspace</span></Link>
                    </div>
                    <div className='action-item'>
                        <span onClick={() => props.openModal('login')}>Sign In</span>
                    </div>
                    <div className='action-item'>
                        <button onClick={() => props.openModal('signup')} className='signup-button'>
                            Signup
                        </button>
                    </div>
                </div>
            );
        }
    }
    return (
            <div className='main-nav'>
                <span><Link to="/" className='main-logo'>Coworking</Link></span>
                { getLinks() }
            </div>
        );
}

export default Navbar;
