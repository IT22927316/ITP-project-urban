// Import the CSS module at the top of your Signup.jsx file
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './Signup.module.css'; // Make sure the path is correct
import { Link } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    full_name: '',
    username: '',
    address: '',
    contact_number: '',
    user_email: '',
    password: '',
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/signup', userData);
      alert('Signup successful!');
      navigate('/');
    } catch (error) {
      console.error(error);
      alert('Signup failed!');
    }
  };

  return (
    <div className={styles.signupContainer1}>
    <div className={styles.signupContainer}>
      
      <form onSubmit={handleSubmit}>
      <div className="text-3xl font-bold text-center">REGISTER</div>
      <br/>
        <input
          className={styles.inputField}
          type="text"
          name="full_name"
          placeholder="Full Name"
          required
          onChange={handleChange}
        />
        <input
          className={styles.inputField}
          type="text"
          name="username"
          placeholder="Username"
          required
          onChange={handleChange}
        />
        <input
          className={styles.inputField}
          type="text"
          name="address"
          placeholder="Address"
          required
          onChange={handleChange}
        />
        <input
          className={styles.inputField}
          type="text"
          name="contact_number"
          placeholder="Contact Number"
          required
          onChange={handleChange}
        />
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
        <button className={styles.submitButton} type="submit">Sign-up</button>
        <br/>

        <p className='text-center'>Already Have An Account? <Link to="/startup/login"><span className='text-blue-700'>Login</span></Link> Here!</p>

      </form>
    </div>
    </div>
    
  );
}

export default Signup;
