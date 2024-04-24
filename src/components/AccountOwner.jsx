import React from 'react';
import { useLocation } from 'react-router-dom';
import '../style/AccountOwner.css';


const AccountOwner = ({ token }) => { // add token as prop

  const location = useLocation();
  const { state } = location;
  const { firstName, lastName, userName } = state || {}; // State data Destructuring

  console.log('token in AccountOwner:',token)
  console.log('userName in AccountOwner:', userName)
  console.log('firstName in AccountOwner:', firstName)
  console.log('lastName in AccountOwner:', lastName)

  return (
    <div className="owner_name">
      <span className="label">Account Owner :</span> 
      <span className="first_name">{firstName}</span>
      <span className="last_name">{lastName}</span>
    </div>
  );
};


export default AccountOwner;
