import React from 'react';
import '../style/ResumeRecall.css';

const ResumeRecall = ({ title, accountNumber, amount, description }) => {
  return (
    <div className="resume-recall">
      <h2>Account Details</h2>
      <div className="account-details">
        
        <p><strong>Title:</strong> {title}</p>
        <p><strong>Account Number:</strong> {accountNumber}</p>
        <p className='current_balance'><strong>Current Balance:</strong> {amount}</p>
        {/* <p><strong>Description:</strong> {description}</p> */}
      </div>
    </div>
  );
};

export default ResumeRecall;
