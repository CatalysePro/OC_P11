import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation & useNavigate
import '../style/GenericAccResume.css';

function GenericAccResume({ title, accountNumber, amount, description }) {
  const navigate = useNavigate();
  const location = useLocation(); // UseLocation to access location state
  const { state } = location; // Destructure state from location

  // check if state is null before destructuring firstName & lastName
  const firstName = state ? state.firstName : null; // Needed for retrieval
  const lastName = state ? state.lastName : null; // Needed for retrieval

  const handleViewTransactions = () => {
    console.log('firstName in GenericAcc:', firstName);
    console.log('lastName in GenericAcc:', lastName);
    // Pass the necessary data via URL while directed to transac page
    navigate('/transactions', {
      state: { firstName, lastName, title, accountNumber, amount, description }
    });
  };

  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title} ({accountNumber})</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button" onClick={handleViewTransactions}>View transactions</button>
      </div>
    </section>
  );
}

export default GenericAccResume;
