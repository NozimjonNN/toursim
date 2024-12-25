import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/features">Features</a></li>
            <li><a href="/marketplace">Marketplace</a></li>
            <li><a href="/forum">Forum</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>

        <div className="footer-socials">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://telegram.org" target="_blank" rel="noopener noreferrer">Telegram</a></li>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <ul>
            <li><a href="mailto:nnnizomjonovich@gmail.com">Email: nnnizomjonovich@gmail.com</a></li>
            <li><a href="tel:+997048899">Phone: +99 (777) 33-00</a></li>
            <li><a href="https://www.google.com/maps/place/London,+UK/@51.528607,-0.4312337,10z/data=!3m1!4b1!4m6!3m5!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5072178!4d-0.1275862!16zL20vMDRqcGw?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Location: 123 Tourism St, City, Country</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Tourism. All rights reserved. Site created by Niyozov Nozimjon. Especially thanks for Mahfuza Rakhmonova & Umarov Ahmad</p>
      </div>
    </footer>
  );
}

export default Footer;
