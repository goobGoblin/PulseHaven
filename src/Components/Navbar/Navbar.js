import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Importing the CSS for styling

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/upcoming-events">Events</Link>
            <Link to="/members">Members</Link>
        </nav>
    );
}

export default Navbar;
