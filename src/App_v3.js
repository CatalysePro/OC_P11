import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import UserPage from './pages/UserPage';
import Header from './components/Header';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [firstName, setFirstName] = useState('');

  const handleSignIn = (firstName) => {
    setIsLoggedIn(true);
    setFirstName(firstName);
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    setFirstName('');
  };

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} handleSignOut={handleSignOut} firstName={firstName} />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Sign-in" element={<SignInPage onSignIn={handleSignIn} />} /> 
        <Route path="/User" element={<UserPage />} />
      </Routes>
    </Router>
  );
}

export default App;
