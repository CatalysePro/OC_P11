import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../style/SignIn.css';

const SignIn = ({ onSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      console.log("Submitting form...");
      const response = await axios.post('http://localhost:3001/api/v1/user/login', {
        email: email, 
        password: password
      });
  
      console.log("Login response:", response.data);
  
      const token = response.data.body.token;

      console.log(token)
  
      const userNameResponse = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        
        body: JSON.stringify({ includeUserName: true }) // ask for userName in the response body

        // credentials: 'include' // Ask to include credentials in the request -- generate CORS issues
      });
  
      const userNameData = await userNameResponse.json();
      console.log("User name data:", userNameData);
      const { userName } = userNameData.body;
  
      console.log("User name:", userName);
  
      // Axios request for first name and last name
      const profileResponse = await axios.post('http://localhost:3001/api/v1/user/profile', null, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const { firstName, lastName } = profileResponse.data.body;
      console.log("First name:", firstName);
      console.log("Last name:", lastName);
  
      onSignIn(userName);
  
      navigate('/User', {
        state: { firstName, lastName, userName }
      });
  
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error:', error);
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
