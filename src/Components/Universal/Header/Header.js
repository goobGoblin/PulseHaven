import React, { useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';  // Importing the CSS file for styles
import SocialNavbar from '../../Navbar/SocialNavbar';
import Navbar from '../../Navbar/Navbar';

function Header() {

    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const width = canvas.offsetWidth;
        const height = canvas.offsetHeight;
        canvas.width = width;
        canvas.height = height;

        let phase = 0;
        let frameId;

        const draw = () => {
            ctx.clearRect(0, 0, width, height);
            ctx.beginPath();
            ctx.moveTo(0, height / 2);
            for (let x = 0; x < width; x++) {
                let y = height / 2 + Math.sin(x * 0.04 + phase) * (20 + 10 * Math.sin(phase * 0.2));
                ctx.lineTo(x, y);
            }
            ctx.strokeStyle = '#FFF';
            ctx.lineWidth = 2;
            ctx.stroke();
            phase += 0.1;
            frameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(frameId);
        };
    }, []);
    return (
      <div className="header">
        <Link to="/" className="logo-link">
            <img src="/PulseHaven/Logos/ph_logo.png" alt="Logo" className="homepage-logo" />
        </Link>
        {/* <h1 className="header-title">Put your fucking phone away and dance</h1> */}
        <canvas ref={canvasRef} className="header-canvas"></canvas>
        <div className= "social-nav">
            <SocialNavbar />
        </div>
        <div className= "nav">
            <Navbar />
        </div>
  
      </div>
    );
  }
  
  export default Header;
  