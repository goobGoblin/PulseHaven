import React from 'react';
import './SocialNavbar.css'; // Importing the CSS for styling

function SocialNavbar() {
    return (
        <div className="social-navbar">
            <a href="https://soundcloud.com/yourusername" target="_blank" rel="noopener noreferrer">
                <img src="/PulseHaven/Logos/Soundcloud.png" alt="SoundCloud" />
            </a>
            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                <img src="/PulseHaven/Logos/Instagram.png" alt="Instagram" />
            </a>
        </div>
    );
}

export default SocialNavbar;
