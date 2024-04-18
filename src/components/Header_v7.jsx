import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../pictures/logos/argentBankLogo.png'; 
import '../style/Header.css';

function Header({ isLoggedIn, handleSignOut, userName }) {
  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo"/>
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {isLoggedIn ? (
          <>
            <NavLink 
              className="main-nav-item"
              to="/Sign-in" // homepage or other by default plan to redirect to /Profil
            > 
              <i className="fa fa-user-circle"></i> 
              <span className="headerNameClass">{userName}</span> {/* Display userName next to icon */}
            </NavLink>

            <a
              className="main-nav-item"
              href="/" // link directing to homepage
              onClick={handleSignOut} // disconnexion function insert
            > 
              <i className="fa fa-sign-out"></i>
              Sign Out
            </a>
          </>
        ) : ( // if not looged in show elements by default
          <NavLink 
            className="main-nav-item"
            to="/Sign-in"
          >
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default Header;
