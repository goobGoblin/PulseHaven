import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; // Importing the CSS for styling

function Navbar() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const shouldBeFixed = window.scrollY > 80; // Set the scroll threshold
            if (shouldBeFixed !== isFixed) {
                setIsFixed(shouldBeFixed);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isFixed]);

    return (
        <nav className={isFixed ? "navbar fixed" : "navbar"}>
            <Link 
                to="/members" 
                className={activeLink === '/members' ? 'active' : ''} 
                onClick={() => setActiveLink('/members')}
            >
                MEMBERS
            </Link>
            <Link 
                to="/" 
                className={activeLink === '/' ? 'active' : ''} 
                onClick={() => setActiveLink('/')}
            >
                HOME
            </Link>
            <Link 
                to="/upcoming-events" 
                className={activeLink === '/upcoming-events' ? 'active' : ''} 
                onClick={() => setActiveLink('/upcoming-events')}
            >
                EVENTS
            </Link>
        </nav>
    );
}

export default Navbar;
