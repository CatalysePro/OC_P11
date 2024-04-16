import React from 'react';
import { useLocation } from 'react-router-dom';
// import Header from '../components/Header'; // not necessary as it's generic in App.js
import UserWelcome from '../components/UserWelcome';
import CurrentAccResume from '../components/CurrentAccResume';
import SavingAccResume from '../components/SavingAccResume';
import CreditCardAccResume from '../components/CreditCardAccResume';
import Footer from '../components/Footer';

function UserPage() {
  // Use "useLocation" to retrieve user info sent from SignIn.jsx
  const location = useLocation();
  const { state } = location;
  const { firstName, lastName } = state;

  return (
    <div>
      {/* <Header /> */}
    <div className="main bg-dark">
      <UserWelcome firstName={firstName} lastName={lastName} /> {/* connexion data transmitted to  UserWelcome.jsx */}
      <CurrentAccResume />
      <SavingAccResume />
      <CreditCardAccResume />
    </div>
    <Footer />
    </div>
  );
}

export default UserPage;
