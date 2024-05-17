// src/components/Footer.js
import React from 'react';
import '../assets/Stylesheets/Footer.css';

const Footer = () => (
    <footer className="footer">
        <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
            <div className="social-links">
                <a href="www.linkedin.com/in/varunrout" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/varunrout" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
        </div>
    </footer>
);

export default Footer;
