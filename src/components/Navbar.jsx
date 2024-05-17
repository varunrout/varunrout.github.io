// src/components/Navbar.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import '../assets/Stylesheets/Navbar.css'; // If you have additional custom styles

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    MyPortfolio
                </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/about">About</Button>
                <Button color="inherit" component={Link} to="/portfolio">Portfolio</Button>
                <Button color="inherit" component={Link} to="/blog">Blog</Button>
                <Button color="inherit" component={Link} to="/contact">Contact</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
