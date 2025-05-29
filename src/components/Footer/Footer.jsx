import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">

          <div className="footer-section">
            <span className="footer-logo">ADIION</span>
            <p className="footer-description">
              Empowering businesses with innovative IT solutions and smart automation.
            </p>
            <div className="footer-socials">
              <a href="#"><Facebook /></a>
              <a href="#"><Twitter /></a>
              <a href="#"><Linkedin /></a>
              <a href="#"><Instagram /></a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li><a href="#">Data Solutions</a></li>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Mobile Apps</a></li>
              <li><a href="#">AI & Automation</a></li>
              <li><a href="#">Cloud Services</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li><a href="#">Services</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Career</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact</h3>
            <ul>
              <li>Adiion Tower</li>
              <li>Chennai, IN 600001</li>
              <li>Contact@adiion.com</li>
              <li>+91 987654321</li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} ADIION. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
