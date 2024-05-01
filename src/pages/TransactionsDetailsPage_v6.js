
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Footer from '../components/Footer';
import ResumeRecall from '../components/ResumeRecall';
import AccountOwner from '../components/AccountOwner';
import TransactionsList from '../components/TransactionsList';

import '../style/TransactionsDetailsPage.css';


const TransactionsDetailsPage = () => {
    const location = useLocation();
    const { state } = location;

    const navigate = useNavigate();

    const { title, accountNumber, amount, description } = state || {};
    const { firstName, lastName } = state || {};

    const token = useSelector(state => state.auth.token);

    console.log(token ==='')
  
    useEffect (()=>{
  
      if (token === undefined || token === '') { // check token avaibility ---> Sign In
      console.log('here I am !!!')
      navigate ('/Sign-in', {replace:true})
    }
    else {
  
      fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({ includeUserName: true })
          }).then((rep)=>{
  
            if (rep.status !==200){ // check token viability ---> Sign In
              console.log('me again !!!')
              navigate ('/Sign-in', {replace:true})
            }
          })
  
    }
      
    }, [token, navigate]) // Use effect dependancies --> warning if not filled in
  

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
