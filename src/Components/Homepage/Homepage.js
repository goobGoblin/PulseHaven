import React from 'react';
import './Homepage.css';  // Importing the CSS file for styles
// import logo from '/images/Pulse Haven V10 (Final Lavender).jpg'; // Adjust the path as necessary


function HomePage() {
  return (
    <div className="homepage">
      <div className="content">
        <img src="PulseHaven/LavLogo.jpg" alt="Logo" className="homepage-logo" />
        <h1>Welcome to My React App!</h1>
        <p>This is the homepage.</p>
      </div>
    </div>
  );
}

export default HomePage;
