import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../pictures/logos/argentBankLogo.png'; 
import '../style/Header.css';

function Header() {
  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo"/>
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        <NavLink 
          className={({ isActive }) => (isActive ? 'main-nav-item active' : 'main-nav-item')} 
          activeclassname="router-link-exact-active" 
          to="/Sign-in">
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
