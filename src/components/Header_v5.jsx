import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../pictures/logos/argentBankLogo.png'; 
import '../style/Header.css';

function Header({ isLoggedIn, handleSignOut, firstName }) { // props as parameters managed by SignIn.jsx
  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo"/>
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {isLoggedIn ? ( // if looged in include all necessary elements
          
          <NavLink 
            className="main-nav-item"
            to="/" // link directing to homepage
            onClick={handleSignOut} // disconnexion function insert
          > 
            <i className="fa fa-user-circle"></i> 
            {firstName} {/* Display first name */}
            <i className="fa fa-sign-out"></i>
            Sign Out
          </NavLink>

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
