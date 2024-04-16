import React from 'react';

const WelcomePage = ({ firstName, lastName }) => {
  return (
    <div>
      <h1>Welcome, {firstName} {lastName}!</h1>
      {/* Ajoutez ici le contenu de la page de bienvenue */}
    </div>
  );
};

export default WelcomePage;
