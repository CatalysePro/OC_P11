import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import UserWelcome from '../components/UserWelcome';
import CurrentAccResume from '../components/CurrentAccResume';
import SavingAccResume from '../components/SavingAccResume';
import CreditCardAccResume from '../components/CreditCardAccResume';
import Footer from '../components/Footer';
import EditUsernameModal from '../components/EditUsernameModal'; // Importer la fenêtre modale

function UserPage() {
  const location = useLocation();
  const { state } = location;
  const { firstName, lastName, userName } = state;

  const [isModalOpen, setIsModalOpen] = useState(false); // État pour contrôler l'ouverture/fermeture de la fenêtre modale

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="main bg-dark">
        <UserWelcome firstName={firstName} lastName={lastName} onEditUserName={openModal} /> {/* Passer la fonction pour ouvrir la modale */}
        <CurrentAccResume />
        <SavingAccResume />
        <CreditCardAccResume />
      </div>
      <Footer />
      {/* Afficher la fenêtre modale si isModalOpen est true */}
      {isModalOpen && (
        <EditUsernameModal
          firstName={firstName}
          lastName={lastName}
          userName={userName} // Passer le userName à EditUsernameModal
          onClose={closeModal} // Passer la fonction pour fermer la modale
        />
      )}
    </div>
  );
}

export default UserPage;
