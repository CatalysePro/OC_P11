import React from 'react';

import Footer from '../components/Footer';
import ResumeRecall from '../components/ResumeRecall';
import AccountOwner from '../components/AccountOwner';
import TransactionsList from '../components/TransactionsList';
import { useLocation } from 'react-router-dom';

import '../style/TransactionsDetailsPage.css';


const TransactionsDetailsPage = ({ token }) => {
    const location = useLocation();
    const { state } = location;
    const { title, accountNumber, amount, description } = state || {};
    const { firstName, lastName } = state || {};

    return (
      <>
        <button onClick={() => window.history.back()} className="back-button">Back to Accounts Overview</button>
        <AccountOwner
          firstName={firstName}
          lastName={lastName}
        />
        <div className="transactions_bloc">
          <ResumeRecall 
            title={title} 
            accountNumber={accountNumber}
            amount={amount}
            description={description}
            token={token}  
          />
          <TransactionsList/>
        </div>
        <Footer />
      </>
    );
};

export default TransactionsDetailsPage;
