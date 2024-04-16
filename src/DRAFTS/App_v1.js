import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import UserPage from './pages/UserPage';
import ErrorPage from './pages/ErrorPage';
import WelcomeHomePage from './pages/WelcomeHomePage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Sign-in" element={<SignInPage />} />
        <Route path="/welcome" element={<WelcomeHomePage />} />
        <Route path="/User/:idUser" element={<UserPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
