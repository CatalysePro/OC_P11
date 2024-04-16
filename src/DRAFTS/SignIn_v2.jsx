import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../style/SignIn.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:3001/api/v1/user/login', {
        email: email, 
        password: password
      });

      const token = response.data.body.token

      console.log(token)

      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      const responseProfil = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` }
      });
      
      const RRR = await responseProfil.json();
    

      // extract name and surname from API request
      const { firstName, lastName } = responseProfil.data.body;
      console.log(RRR)

      // Redirect to welcome page by passing first and last name as URL parameters
      navigate(`/welcome?firstName=${firstName}&lastName=${lastName}`);
      
      // Reset email and password fields after successful submission
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error:', error);
      // Manage errors here with error message
    }
  };

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        
        <button className="sign-in-button" type="submit">Sign In</button>
      </form>
    </section>
  );
};

export default SignIn;
