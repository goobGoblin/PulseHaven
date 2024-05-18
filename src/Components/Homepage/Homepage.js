import React from 'react';
import './Homepage.css';  // Importing the CSS file for styles
import SocialNavbar from '../Navbar/SocialNavbar';
import Navbar from '../Navbar/Navbar';
import TextSphere from './TextSphere'; // Import the TextSphere component

function HomePage() {
  return (
    <div className="homepage">
      <div className="content">
        <TextSphere /> 
      </div>
    </div>
  );
}

export default HomePage;
