import React from 'react';
import '../style/SignInPage.css';
import Header from '../components/Header';
import SignIn from '../components/SignIn';
import Footer from '../components/Footer';

const SignInPage = () => {
  return (
    <div>
      <Header />
      <main className="main bg-dark">
        <SignIn />
      </main>
      <Footer />
    </div>
  );
};

export default SignInPage;
