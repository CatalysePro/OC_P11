import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import useSelector 
import UserWelcome from '../components/UserWelcome';
import CurrentAccResume from '../components/CurrentAccResume';
import SavingAccResume from '../components/SavingAccResume';
import CreditCardAccResume from '../components/CreditCardAccResume';
import Footer from '../components/Footer';
import EditUsernameModal from '../components/EditUsernameModal';

function UserPage() {
  const location = useLocation();
  const { state } = location;
  

  //  useSelector for  firstName & lastName from Redux store
  const firstName = useSelector(state => state.auth.firstName);
  const lastName = useSelector(state => state.auth.lastName);
  const token = useSelector(state => state.auth.token);

  // Check if state is null before destructurering firstName & lastName
  const userName = state ? state.userName : null;

  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal open/close control 

  const openModal = () => {
    setIsModalOpen(true);
    console.log('Modal opened with token (UserPage):', token); // check if token is present when modal is called - Do not work
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  console.log('token value in UserPage :', token)

  return (
    <div>
      <div className="main bg-dark">
        {/* Pass  userName, firstName & lastName to UserWelcome */}
        <UserWelcome 
        firstName={firstName} 
        lastName={lastName} 
        userName={userName}
        token={token}  
        onEditUserName={openModal} />
        <CurrentAccResume />
        <SavingAccResume />
        <CreditCardAccResume />
      </div>
      <Footer />
      {/* Display modal window for user name change */}
      {isModalOpen && (
        <EditUsernameModal
          firstName={firstName}
          lastName={lastName}
          userName={userName} // Pass userName to EditUsernameModal
          onClose={closeModal} // Pass fonction modal closing
          token={token}
        />
      )}
    </div>
  );
}

export default UserPage;
