import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import UserWelcome from '../components/UserWelcome';
import CurrentAccResume from '../components/CurrentAccResume';
import SavingAccResume from '../components/SavingAccResume';
import CreditCardAccResume from '../components/CreditCardAccResume';
import Footer from '../components/Footer';

function UserPage() {
  // Use "useLocation" to retrieve user info sent from  SignIn.jsx
  const location = useLocation();
  const { state } = location;
  const { firstName, lastName } = state;

  return (
    <div >
      <Header />
      <div className="main bg-dark">
      <UserWelcome firstName={firstName} lastName={lastName} />
      <CurrentAccResume />
      <SavingAccResume />
      <CreditCardAccResume />
      </div>
      <Footer />
    </div>
  );
}

export default UserPage;
