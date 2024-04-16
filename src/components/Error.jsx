import React from 'react';
import { NavLink } from 'react-router-dom'; 

import '../style/Error.css';

function Error() {
  return (
    <div className="error_block">
          <h1 className="error_title">404</h1>
          <p className="error_msg">Oups ! La page que vous demandez n'existe pas.</p>
          <NavLink exact="true" to="/">
          <p className="link_to_homepage">Retourner sur la page d'accueil.</p>
          </NavLink>
        </div>
  );
}

export default Error;
