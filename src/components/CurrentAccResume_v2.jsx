import React from 'react';
import GenericAccResume from './GenericAccResume';

function CurrentAccResume() {
  const accountData = {
    title: "Argent Bank Checking",
    accountNumber: "x8349",
    amount: "$2,082.79",
    description: "Available Balance"
  };

  return (
    <GenericAccResume {...accountData} /> // uses the spread operator in JavaScript. 
                                          // This passes properties of the accountData object as props to GenericAccResume
  );
}

export default CurrentAccResume;
