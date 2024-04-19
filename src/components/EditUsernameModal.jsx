import React, { useState } from 'react';
import '../style/EditUsernameModal.css';

const EditUsernameModal = ({ firstName, lastName, userName, onClose }) => {
  const [newUserName, setNewUserName] = useState(userName);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleModify = () => {
    setIsEditMode(true);
  };

  const handleValidate = () => {
    // Add logic to validate and save the new username
    setIsEditMode(false);
    // Call a function to handle saving the new username
  };

  const handleCancel = () => {
    setNewUserName(userName); // Reset the new username to the current one
    setIsEditMode(false);
  };

  return (
    <div className="modal-container">
      <div className="modal">
        <span className="close" onClick={onClose}>×</span>
        <h2>User Details</h2>
        <div className="user-details">
          <div className="id-data-group"><label>First Name:</label> <span>{firstName}</span></div>
          <div className="id-data-group"><label>Last Name:</label> <span>{lastName}</span></div>
          <div className="id-data-group"><label>User Name:</label>
          {isEditMode ? (
            <input
              type="text"
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
            />
          ) : (
            <span>{userName}</span>
          )}
          {!isEditMode && (
            <button className="modify-button" onClick={handleModify}>Modify</button>
          )}</div>
        </div>
        {isEditMode && (
          <div className="action-buttons">
            <button onClick={handleValidate}>Validate</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditUsernameModal;
