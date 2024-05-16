import React from 'react';
import './Homepage.css';  // Importing the CSS file for styles
import SocialNavbar from '../Navbar/SocialNavbar';
import Navbar from '../Navbar/Navbar';


function HomePage() {
  return (
    <div className="homepage">
      <div className="top-content">
        <img src="PulseHaven/Logos/ph_logo.png" alt="Logo" className="homepage-logo" />
        <h1>Put your fucking phone away and dance</h1>
        <div className= "social-nav">
          <SocialNavbar />
        </div>
        <div className= "nav">
          <Navbar />
        </div>
      </div>

      <div className="content"> 
        <h1>Welcome to My React App!</h1>
        <p>This is the homepage.</p>
      </div>
    </div>
  );
}

export default HomePage;
