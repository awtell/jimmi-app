import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../../assets/log.png';

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
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center">
        <div className="logo me-auto">
          <Link to="/">
            <img src={logo} alt="Lumia Logo" className="img-fluid" />
          </Link>
        </div>
        <nav id="navbar" className={`navbar order-last order-lg-0 ${menuOpen ? 'navbar-mobile' : ''}`}>
          <ul>
            <li>
              <Link className="nav-link scrollto" to="/RoomForm#tables">
                About
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" to="#services">
                Services
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto active" to="#portfolio">
                Portfolio
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" to="#testimonials">
                Testimonials
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" to="#contact">
                Contact
              </Link>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" onClick={toggleMenu}></i>
        </nav>

        <div className="header-social-links d-flex align-items-center">
          <a href="#" className="twitter">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#" className="facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" className="linkedin">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
