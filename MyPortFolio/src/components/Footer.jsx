// src/components/Footer.jsx

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p className='anton-sc-regular'>Made with ❤️ By Satyam Sundram</p>
      <div className="footer-icons">
        <a href="https://www.instagram.com/_burneds/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram insta"></i>
        </a>
        <a href="https://www.linkedin.com/in/satyam-sundram-584a7a226/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin linkedin"></i>
        </a>
        <a href="https://github.com/BuRNedS" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github github"></i>
        </a>
        <a href="https://wa.me/8210038298" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp whatsapp"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
