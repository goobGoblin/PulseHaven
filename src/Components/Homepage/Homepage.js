import React from 'react';
import './Homepage.css';  // Importing the CSS file for styles
import SocialNavbar from '../Navbar/SocialNavbar';
import Navbar from '../Navbar/Navbar';


function HomePage() {
  return (
    <div className="homepage">


      <div className="content"> 
        <h1>Welcome to My React App!</h1>
        <p>This is the homepage.</p>
      </div>
    </div>
  );
}

export default HomePage;
