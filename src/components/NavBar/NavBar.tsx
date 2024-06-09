import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../../assets/log.png';
import '../../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../../assets/vendor/boxicons/css/boxicons.min.css';
import '../../assets/vendor/glightbox/css/glightbox.min.css';
import '../../assets/vendor/swiper/swiper-bundle.min.css';
import '../../assets/vendor/bootstrap-icons/bootstrap-icons.css';


const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('#header') as HTMLElement;
      if (window.scrollY > 0) {
        nav.classList.add('header-scrolled');
      } else {
        nav.classList.remove('header-scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center">
        <div className="logo me-auto">
          <Link to="/">
            <img src={logo} alt="Lumia Logo" className="img-fluid" />
          </Link>
        </div>
        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li><a className="nav-link scrollto active" href="#tables">Home</a></li>
            <li><a className="nav-link scrollto" href="#about">About Us</a></li>
            <li><a className="nav-link scrollto" href="#services">Services</a></li>
            <li><a className="nav-link scrollto " href="#portfolio">Contact Us</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

        <div className="header-social-links d-flex align-items-center">
          <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
          <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
          <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
          <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
        </div>

      </div>
    </header>
  );
};

export default NavBar;
