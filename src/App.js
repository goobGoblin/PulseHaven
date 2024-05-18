import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import EventsPage from './Components/Events/EventsPage';
import MembersPage from './Components/Members/MembersPage';
import Header from './Components/Universal/Header/Header';
import './App.css';

function App() {
  return (
    <Router basename="/PulseHaven">
      <div className="app">
        <div className="background-video">
          <video autoPlay loop muted playsInline>
            <source src="/PulseHaven/SilverSpirals.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          < Header />
        </div>

        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/upcoming-events" element={<EventsPage />} />
          <Route path="/members" element={<MembersPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
