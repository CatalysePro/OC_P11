import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import UserPage from './pages/UserPage';
import TransactionsDetailsPage from './pages/TransactionsDetailsPage';
import Header from './components/Header';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [token, setToken] = useState('');

  const handleSignIn = (userName, token) => {
    setIsLoggedIn(true);
    setUserName(userName);
    setfirstName(firstName);
    setlastName(lastName);
    setToken(token);
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    setUserName('');
    setfirstName('');
    setlastName('');
    setToken('');
  };

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} handleSignOut={handleSignOut} userName={userName} />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Sign-in" element={<SignInPage onSignIn={handleSignIn} />} /> 
        <Route path="/User" element={<UserPage token={token} />} /> {/* Pass the token as prop */}
        <Route 
        path="/transactions" 
        element={<TransactionsDetailsPage firstName={firstName} lastName={lastName} />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
