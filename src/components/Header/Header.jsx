import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isTransparent, setIsTransparent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsTransparent(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false); // Close menu on page change
  }, [location]);

  return (
    <header className={`header ${isTransparent ? 'transparent' : ''}`}>
      <div className="header-container">
        <h1 className="logo">Adiion</h1>

        <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <div className="nav-left">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
            <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
            <Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>Blog</Link>
            <Link to="/careers" className={location.pathname === '/careers' ? 'active' : ''}>Careers</Link>
          </div>
          <div className="nav-right">
            <Link to="/contact" className={`contact-btn ${location.pathname === '/contact' ? 'active' : ''}`}>
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
