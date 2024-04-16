
import React from 'react';
// import img_banner_index from '../pictures/images/image_banner_index.jpeg';
import '../style/BannerHomePage.css'; 

function BannerHomePage() {
  return (
    <div className="hero">
      {/* <img src={img_banner_index} alt="Verre transparent rempli de pièces de monnaies d'où émerge une plante" /> */}
      <section className="hero-content">
        <h2 className="sr-only">Promoted Content</h2>
        <p className="subtitle">No fees.</p>
        <p className="subtitle">No minimum deposit.</p>
        <p className="subtitle">High interest rates.</p>
        <p className="text">Open a savings account with Argent Bank today!</p>
      </section>
    </div>
    
  );
}

export default BannerHomePage;