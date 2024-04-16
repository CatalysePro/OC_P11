import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import UserPage from './pages/UserPage';
import Header from './components/Header'; // Import Header.jsx component for generic addition

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Connexion state

  const handleSignIn = () => {
    setIsLoggedIn(true);
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      {/* Include Header.jsx with props isLoggedIn et handleSignOut */}
      <Header isLoggedIn={isLoggedIn} handleSignOut={handleSignOut} />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Pass onSignIn as prop in SignPgaePage */}
        <Route path="/Sign-in" element={<SignInPage onSignIn={handleSignIn} />} /> 
        <Route path="/User" element={<UserPage />} />
      </Routes>
    </Router>
  );
}

export default App;
