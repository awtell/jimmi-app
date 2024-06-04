import React from 'react';
import { Link } from 'react-router-dom';
import './ImageGallery.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact Us</Link>
    </nav>
  );
}

export default NavBar;
