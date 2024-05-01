import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../pictures/logos/argentBankLogo.png'; 
import '../style/Header.css';

function Header({ isLoggedIn, handleSignOut }) {
  const userName = useSelector(state => state.auth.username);
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();

  const handleSignOutClick = (event) => {
    event.preventDefault();
    setShowPopup(true);
  };

  const handleConfirmSignOut = () => {
    handleSignOut();
    setShowPopup(false);
    navigate('/');
  };

  const handleCancelSignOut = () => {
    setShowPopup(false);
  };

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
              onClick={handleSignOutClick}
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
      {showPopup && (
        <div className="custom-popup-overlay"> 
          <div className="custom-popup">
            <div className="custom-popup-content">
              <p>Do you want to log out ?</p>
            </div>
            <div className="custom-popup-buttons">
              <button onClick={handleConfirmSignOut}>I wanna leave</button>
              <button onClick={handleCancelSignOut}>I'm gonna stay</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
