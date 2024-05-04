import React from 'react';
import '../style/ResumeRecall.css';

const ResumeRecall = ({ title, accountNumber, amount }) => {
  return (
    <div className="resume-recall">
      <h2>Account Details</h2>
      <div className="account-details">
        
        <p className='account_type'><strong>Account type:</strong> {title}</p>
        <p className='account_nb'><strong>Account Number:</strong> {accountNumber}</p>
        <p className='current_balance'><strong>Current Balance:</strong><span className='amount'>{amount}</span></p>
      </div>
    </div>
  );
};

export default ResumeRecall;
