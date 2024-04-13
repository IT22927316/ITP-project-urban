import React from 'react'
import './StartupPage.css';
import { Link } from 'react-router-dom';

function StartupPage() {
  return (
    <div className="home-container">
      <div className="overlay">
        <div className="content">
          <p className='text-5xl text-bold'>URBAN HARVEST HUB</p>
          <br/> <br/> <br/> <br/>
          <p className='text-4xl text-bold'>Cultivate, Connect, and Thrive<br/>Urban Farming at Your Fingertips</p>
          <br/>
          <p className="subtitle">
            Empowering your urban green spaces with smart technology.Join our community of city farmers today!
          </p>
          <div className="buttons">
          <br/>
            
            <button className="btn get-started">Get Started</button>
            <br/> <br/> <br/>
            <Link to="sign-up">
                <button className="btn sign-in">Register</button>
            </Link>
            
            <Link to="login">
                <button className="btn login">Login</button>
            </Link>

          </div>
        </div>
      </div>
    </div>
  )
}

export default StartupPage