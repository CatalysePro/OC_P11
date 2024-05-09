import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '../style/EditUsernameModal.css';
import UpdateUsernameForm from './UpdateUsernameForm'; // child import

const EditUsernameModal = ({ firstName, lastName, userName, token, onClose}) => {
  console.log ('token value in EditUsernameModal 1:', token)
  const [isEditMode, setIsEditMode] = useState(false);
  const userNameRedux = useSelector(state => state.auth.username); // useSelector for updated username extract from Redux store

  const handleModify = () => {
    setIsEditMode(true);
  };

  const handleClose = () => {
    setIsEditMode(false);
    onClose(); // modal closing when form est canceled
  };

  console.log ('token value in EditUsernameModal 2:', token)

  return (
    <div className="modal-container">
      <div className="modal">
        <span className="close" onClick={onClose}>×</span>
        <h2>User Details</h2>
        <div className="user-details">
          <div className="id-data-group first_name_bloc"><label>First Name:</label> <span>{firstName}</span></div>
          <div className="id-data-group last_name_bloc"><label>Last Name:</label> <span>{lastName}</span></div>
          <div className="id-data-group user_name_bloc"><label>User Name:</label>
            {isEditMode ? (
              <UpdateUsernameForm
              userName={userNameRedux} // display updated value from Redux store
              onSuccess={handleClose}
              currentUsername={userName}
              onCancel={handleClose}
              token={token}
              />
            ) : (
              <span>{userNameRedux}</span> // display updated value from Redux store
            )}
            {!isEditMode && (
            <button className="modify-button" onClick={handleModify}>Modify</button>
            )}
          </div>
        </div>
          
      </div>
    </div>
  );
};

export default EditUsernameModal;
