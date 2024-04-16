import React from 'react';
import '../style/SignInPage.css';
import SignIn from '../components/SignIn';
import Footer from '../components/Footer';

const SignInPage = ({ onSignIn }) => { // Pass onSignIn as prop
  return (
    <div>
      {/* No need of Header.jsx already generically added via App.js */}
      <main className="main bg-dark">
        {/* Pass onSignIn as prop to SignIn */}
        <SignIn onSignIn={onSignIn} /> 
      </main>
      <Footer />
    </div>
  );
};

export default SignInPage;
