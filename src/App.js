import React, { useState } from 'react'; // useState hook for managing component state and rendering JSX
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Handle client-side routing in the application
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import UserPage from './pages/UserPage';
import TransactionsDetailsPage from './pages/TransactionsDetailsPage';
import Header from './components/Header';

function App() {
  // State variables to manage user authentication and data
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track user's login status (init at false)
  const [userName, setUserName] = useState(''); // State to store the username and other data (init at empty)
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [token, setToken] = useState(''); // State to store the authentication token

  // log in function
  const handleSignIn = (userName, token) => {
    setIsLoggedIn(true); // Set login status to true
    setUserName(userName); // Set the username and other data at their values
    setfirstName(firstName);
    setlastName(lastName);
    setToken(token);
  };

  // log out function
  const handleSignOut = () => {
    setIsLoggedIn(false); // Set login status to false
    setUserName('');
    setfirstName('');
    setlastName('');
    setToken('');
  };

  return (
    <Router>
      {/* Render the Header as generic component with necessary props (state, functions & choosen data) */}
      <Header isLoggedIn={isLoggedIn} handleSignOut={handleSignOut} userName={userName} /> 
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Sign-in" element={<SignInPage onSignIn={handleSignIn} />} /> 
        <Route path="/User" element={<UserPage token={token} />} /> {/* Pass the token as prop */}
        <Route 
        path="/transactions" 
        element={<TransactionsDetailsPage firstName={firstName} lastName={lastName} />} 
        /> {/* Pass choosen data as prop */}
      </Routes>
    </Router>
  );
}

export default App;
