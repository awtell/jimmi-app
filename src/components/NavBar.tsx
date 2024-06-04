import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/log.png'; // Make sure to replace this with the actual path to your logo

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('.navbar') as HTMLElement;

      if (window.scrollY > 0) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <div className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        {menuOpen ? '✖' : '☰'} {/* Conditional rendering of the toggle icon */}
      </div>
    </nav>
  );
}

export default NavBar;
