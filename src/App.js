import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import './App.css';

function App() {
  return (
    <Router basename="/PulseHaven">
      <div className="app">
        <div className="background-video">
          <video autoPlay loop muted playsInline>
            <source src="PulseHaven/SilverSpirals.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <Routes>
          <Route path="/" element={<Homepage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;