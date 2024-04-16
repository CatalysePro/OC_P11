import React from 'react';
import { useLocation } from 'react-router-dom';
import '../style/UserWelcome.css';

const UserWelcome = () => {
  const location = useLocation();
  const { state } = location;
  const { firstName, lastName } = state || {}; // State data Destructuring 

  return (
    <div className="header">
      {/*check data existence before displaying */}
      {firstName && lastName && (
        <h1>Welcome, {firstName} {lastName}!</h1>
      )}
      <button className="edit-button">Edit Name</button>
    </div>
    
  );
};

export default UserWelcome;
