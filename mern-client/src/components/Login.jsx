// Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css'; // make sure the path to your CSS module is correct
import { Link } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    user_email: '',
    password: '',
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', loginData);
      if (response.data) {
        // Assuming the response data contains a token you want to store
        localStorage.setItem('token', response.data.token);
        // Redirect to the desired route after login
        alert('Login Successful!');
        navigate('/'); //where you need to redirect
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed!');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginContainer1}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className="text-3xl font-bold text-center">LOGIN</h2>
        <br/>
        <input
          className={styles.inputField}
          type="email"
          name="user_email"
          placeholder="Email"
          required
          onChange={handleChange}
        />
        <input
          className={styles.inputField}
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={handleChange}
        />
        <button className={styles.loginButton} type="submit">Login</button>
        <br/>
        <p className='text-center'>New To UrbanHarvestHub? <Link to="/startup/sign-up"><span className='text-blue-700'>Register</span></Link> Here!</p>
        
      </form>
    </div>
    </div>
  );
}

export default Login;
