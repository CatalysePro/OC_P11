import React from 'react';
import { useLocation } from 'react-router-dom';

const WelcomeHomePage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const firstName = params.get('firstName');
  const lastName = params.get('lastName');

  return (
    <div>
      <h1>Welcome, {firstName} {lastName}!</h1>
      {/* add content here if necessary */}
    </div>
  );
};

export default WelcomeHomePage;
