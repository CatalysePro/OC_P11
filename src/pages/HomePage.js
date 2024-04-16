import React from 'react';
import '../style/HomePage.css';
// import Header from '../components/Header'; // no need already generically added via App.js
import BannerHomePage from '../components/BannerHomePage';
import AllServices from '../components/AllServices';
import Footer from '../components/Footer';


function HomePage() {
  return (
    
      <div className="home_page">
        {/* <Header /> */}
        <BannerHomePage />
        <AllServices />
        <Footer />
      </div>
  );
}

export default HomePage;
