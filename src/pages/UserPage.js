import React, { useState, useEffect } from 'react'; // import hook useEffect for conditional function activation
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import hook useSelector for value retrievement
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
  
  //  useSelector for token (or other data value) from Redux store
  const token = useSelector(state => state.auth.token);

  console.log(token ==='')

  // User page protection (same as transactions page)
  useEffect (()=>{

    if (token === undefined || token === '') { // check token avaibility if not ---> Sign In
    console.log('here I am !!!')
    navigate ('/Sign-in', {replace:true})
  }
  else {
    // js fetch request in cas of token avaibility
    fetch('http://localhost:3001/api/v1/user/profile', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({ includeUserName: true })
        }).then((rep)=>{

          if (rep.status !==200){ // check token viability if not ---> Sign In
            console.log('me again !!!')
            navigate ('/Sign-in', {replace:true}) // {replace:true} previous page not kept in navigation history
                                                  // no way to go back to user page 
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
    console.log('Modal opened with token (UserPage):', token); // check if token is present when modal is called 
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
          userName={userName} // Pass current userName to EditUsernameModal
          onClose={closeModal} // Pass fonction modal closing
          token={token}
        />
      )}
    </div>
  );
}

export default UserPage;
