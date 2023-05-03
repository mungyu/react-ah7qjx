import React, { useState } from 'react';
import { Routes, Route, Link, NavLink } from 'react-router-dom';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import ServicesPage from './ServicesPage';
import NotFoundPage from './NotFoundPage';
import NavBar from './NavBar';

import './style.css';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
