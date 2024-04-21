import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import EditUsernameModal from './EditUsernameModal';
import '../style/UserWelcome.css';


const UserWelcome = ({ token }) => { // add token as prop

  const location = useLocation();
  const { state } = location;
  const { firstName, lastName, userName } = state || {}; // State data Destructuring

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    console.log('Modal opened with token (UserWelcome):', token); //check if token is present when modal is called
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="header">
      {firstName && lastName && (
        <h1>
          Welcome back <br />
          {firstName} {lastName} !
        </h1>
      )}
      <button className="edit-button" onClick={openModal}>Edit Name</button>
      {isModalOpen && (
        <EditUsernameModal
          firstName={firstName}
          lastName={lastName}
          userName={userName}
          onClose={closeModal}
          token={token} // Pass token to EditUsernameModal
        />
      )}
    </div>
  );
};

export default UserWelcome;
