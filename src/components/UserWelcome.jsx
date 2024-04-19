import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import EditUsernameModal from './EditUsernameModal';
import '../style/UserWelcome.css';


const UserWelcome = () => {
  const location = useLocation();
  const { state } = location;
  const { firstName, lastName, userName } = state || {}; // State data Destructuring
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="header">
      {/*check data existence before displaying */}
      {firstName && lastName && (
        <h1>
        Welcome back <br />
        {firstName} {lastName} !
        </h1>
<<<<<<< HEAD
      )}
      <button className="edit-button" onClick={openModal}>Edit Name</button>
      {isModalOpen && (
        <EditUsernameModal
          firstName={firstName}
          lastName={lastName}
          userName={userName}
          onClose={closeModal}
        />
=======
>>>>>>> e73b4725a810e0fa1577b1877b5a09002d91fcb6
      )}
    </div>
    
  );
};

export default UserWelcome;
