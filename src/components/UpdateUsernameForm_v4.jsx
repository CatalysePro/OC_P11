import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const UpdateUsernameForm = ({ currentUsername, onCancel, token }) => {
  const [newUsername, setNewUsername] = useState(currentUsername || ''); // initial value is an empty string if currentUsername is null or undefined
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
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

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-username">New Username:</label>
      <input
        type="text"
        id="new-username"
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
      />
      <button type="submit">Validate</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default UpdateUsernameForm;
