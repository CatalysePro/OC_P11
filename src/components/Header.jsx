// Header.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../pictures/logos/argentBankLogo.png'; 
import '../style/Header.css';

function Header({ isLoggedIn, handleSignOut }) {
  const userName = useSelector(state => state.auth.username); //  username instaed of userName / useSelector for extracting from Redux store

  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo"/>
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div className="header_user_info_bloc">
        {isLoggedIn ? (
          <>
            <div> 
              <i className="fa fa-user-circle"></i> 
              <span className="headerNameClass">{userName}</span>
            </div>

            <a
              className="main-nav-item"
              href="/"
              onClick={handleSignOut}
            > 
              <i className="fa fa-sign-out"></i>
              Sign Out
            </a>
          </>
        ) : (
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
