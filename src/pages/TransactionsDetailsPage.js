// TransactionsDetailsPage

// import React from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import ResumeRecall from '../components/ResumeRecall';
// import TransactionsDetail from '../components/TransactionsDetail';
// import { useLocation } from 'react-router-dom';

// const TransactionsDetailsPage = ({ token }) => { // add token as prop

//     const location = useLocation();
//     const { state } = location;
//     const { firstName, lastName } = state || {}; // State data Destructuring
//     const { title, accountNumber, amount, description } = state || {}; // State data Destructuring

//     console.log('token presence in Transactions Page:', token); //check if token is present

//     return (
//       <>
//         <div className="Account_Owner_names">
//           {firstName && lastName && (
//             <h1>{firstName} {lastName}<span>'s account</span></h1>
//           )}
//         </div>
       
//         <Header />
//         <div className="transactions_bloc">
//           <ResumeRecall 
//           title={title} 
//           accountNumber={accountNumber}
//           amount={amount}
//           description={description}  />
//           <TransactionsDetail/>
//         </div>
//         <Footer />
//       </>
//     );
// };

// export default TransactionsDetailsPage;