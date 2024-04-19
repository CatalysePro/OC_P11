import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import UserPage from './pages/UserPage';
import Header from './components/Header';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [token, setToken] = useState('');

  const handleSignIn = (userName, token) => {
    setIsLoggedIn(true);
    setUserName(userName);
    setToken(token);
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    setUserName('');
    setToken('');
  };

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} handleSignOut={handleSignOut} userName={userName} />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Sign-in" element={<SignInPage onSignIn={handleSignIn} />} /> 
        <Route path="/User" element={<UserPage token={token} />} /> {/* Pass the token as prop */}
      </Routes>
    </Router>
  );
}

export default App;
