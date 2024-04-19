import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import UserPage from './pages/UserPage';
import Header from './components/Header';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
<<<<<<< HEAD
  const [userName, setUserName] = useState('');
  const [token, setToken] = useState('');

  const handleSignIn = (userName, token) => {
    setIsLoggedIn(true);
    setUserName(userName);
    setToken(token);
=======
  const [userName, setuserName] = useState('');

  const handleSignIn = (userName) => {
    setIsLoggedIn(true);
    setuserName(userName);
>>>>>>> e73b4725a810e0fa1577b1877b5a09002d91fcb6
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
<<<<<<< HEAD
    setUserName('');
    setToken('');
=======
    setuserName('');
>>>>>>> e73b4725a810e0fa1577b1877b5a09002d91fcb6
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
