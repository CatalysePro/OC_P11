<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
>>>>>>> 348bb622512af94611051289ce35f6a5482c2a42
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
  const navigate = useNavigate();
  
  //  useSelector for  firstName & lastName from Redux store
  // const firstName = useSelector(state => state.auth.firstName);
  // const lastName = useSelector(state => state.auth.lastName);
  const token = useSelector(state => state.auth.token);

  console.log(token ==='')

  useEffect (()=>{

    if (token === undefined || token === '') { // check token avaibility ---> Sign In
    console.log('here I am !!!')
    navigate ('/Sign-in', {replace:true})
  }
  else {

    fetch('http://localhost:3001/api/v1/user/profile', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({ includeUserName: true })
        }).then((rep)=>{

          if (rep.status !==200){ // check token viability ---> Sign In
            console.log('me again !!!')
            navigate ('/Sign-in', {replace:true})
          }
        })

  }
    
  }, [token, navigate]) // Use effect dependancies --> warning if not filled in
  

  // Check if state is null before destructurering firstName & lastName
  const userName = state ? state.userName : null;
  const firstName = state ? state.firstName : null; // needed for retrievement
  const lastName = state ? state.lastName : null; // needed for retrievement

  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal open/close control 

  const openModal = () => {
    setIsModalOpen(true);
    console.log('Modal opened with token (UserPage):', token); // check if token is present when modal is called - Do not work
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  console.log('token value in UserPage :', token)
  console.log('first name value in UserPage :', firstName)
  console.log('last name value in UserPage :', lastName)

  return (
    <div>
      <div className="main bg-dark">
        {/* Pass  token userName, firstName & lastName to children */}
        <UserWelcome 
        firstName={firstName} 
        lastName={lastName} 
        userName={userName}
        token={token}  
        onEditUserName={openModal} />
        <CurrentAccResume 
        firstName={firstName} 
        lastName={lastName}/>
        <SavingAccResume 
        firstName={firstName} 
        lastName={lastName}/>
        <CreditCardAccResume 
        firstName={firstName} 
        lastName={lastName}/>
        {/* Pass firstName and lastName as URL parameters */}
        <Link to={{ pathname: "/transactions", state: { firstName, lastName } }}></Link>
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
