import React from 'react';
import GenericAccResume from './GenericAccResume';

function SavingAccResume() {
  const accountData = {
    title: "Argent Bank Savings",
    accountNumber: "x6712",
    amount: "$10,928.42",
    description: "Available Balance"
  };

  return (
    <GenericAccResume {...accountData} />  // uses the spread operator in JavaScript. 
                                          // This passes properties of the accountData object as props to GenericAccResume
  );
}

export default SavingAccResume;
