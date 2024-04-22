import React from 'react';
import GenericAccResume from './GenericAccResume';

function CreditCardAccResume() {
  const accountData = {
    title: "Argent Bank Credit Card",
    accountNumber: "x8349",
    amount: "$184.30",
    description: "Current Balance"
  };

  return (
    <GenericAccResume {...accountData} />  // uses the spread operator in JavaScript. 
                                          // This passes properties of the accountData object as props to GenericAccResume
  );
}

export default CreditCardAccResume;
