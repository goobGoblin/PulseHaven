import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; // Importing the CSS for styling

function Navbar() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    return (
        <nav className="navbar">
            <Link 
                to="/members" 
                className={activeLink === '/members' ? 'active' : ''} 
                onClick={() => setActiveLink('/members')}
            >
                Members
            </Link>
            <Link 
                to="/" 
                className={activeLink === '/' ? 'active' : ''} 
                onClick={() => setActiveLink('/')}
            >
                Home
            </Link>
            <Link 
                to="/upcoming-events" 
                className={activeLink === '/upcoming-events' ? 'active' : ''} 
                onClick={() => setActiveLink('/upcoming-events')}
            >
                Events
            </Link>
        </nav>
    );
}

export default Navbar;
