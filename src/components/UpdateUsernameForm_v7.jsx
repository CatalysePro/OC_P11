import React, { useState, useEffect } from 'react';
import '../style/UpdateUsernameForm.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const UpdateUsernameForm = ({ onCancel, token }) => {
  const [newUsername, setNewUsername] = useState(''); // initialize with empty string
  const [error, setError] = useState(null); // State for error message
  const dispatch = useDispatch();

  // Effect for emptying the new user name filed when component is built
  useEffect(() => {
    setNewUsername('');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newUsername.includes(' ')) {
        setError('Username cannot contain spaces.');
        return;
      }
    if (newUsername.trim().length < 3) {
      setError('Username must be at least 3 characters long.');
      return;
    }
    try {
      console.log('New username before API request:', newUsername); //Check submitted value
      const response = await axios.put('http://localhost:3001/api/v1/user/profile', {
        userName: newUsername // send new username value
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('Response from API:', response.data); // check request answer from API
      // Dispatch for updating username in Redux store
      dispatch({ type: 'UPDATE_USERNAME', payload: newUsername });
      // Re-initialize the form & call onCancel to close it
      setNewUsername('');
      onCancel();
    } catch (error) {
      console.error('Error updating username:', error);
    }
  };

  const handleClosePopup = () => {
    setError(null);
  };

  return (
    <form onSubmit={handleSubmit} className="update_form">
      <label htmlFor="new-username">Enter your new user name :</label>
      <input
        type="text"
        id="new-username"
        value={newUsername}
        onChange={(e) => {
          setNewUsername(e.target.value);
          setError(null); // Clear error when user starts typing
        }}
      />
      {error && (
        <div className="popup">
          <p className="popup-content">{error}</p>
          <button className="popup-close" onClick={handleClosePopup}>
            Close
          </button>
        </div>
      )}
      {/* Display popup with error message */}
      <div className="update_form_btns_bloc">
        <button type="submit" className="validate_btn">Validate</button>
        <button type="button" onClick={onCancel} className="cancel_btn">Cancel</button>
      </div>
    </form>
  );
};

export default UpdateUsernameForm;
