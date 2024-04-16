// NOT NECESSARY YET
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, isLoggedIn, setIsLoggedIn }) => {
  return (
    <div>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
