// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Stylesheets/Navbar.css';

const Navbar = () => (
    <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">MyPortfolio</Link>
        </div>
        <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>
);

export default Navbar;
