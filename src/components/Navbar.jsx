// src/components/Navbar.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Drawer, List, ListItem, ListItemText, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import '../assets/Stylesheets/Navbar.css';

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const handleLinkClick = () => {
        setDrawerOpen(false);
    };

    const menuItems = [
        { text: 'Start Here', path: '/' },
        { text: 'About', path: '/about' },
        { text: 'Portfolio', path: '/portfolio' },
        { text: 'Blog', path: '/blog' },
        { text: 'Contact', path: '/contact' },
    ];

    const drawerList = (
        <List>
            {menuItems.map((item, index) => (
                <ListItem button key={index} component={Link} to={item.path} onClick={handleLinkClick}>
                    <ListItemText primary={item.text} />
                </ListItem>
            ))}
        </List>
    );

    return (
        <AppBar position="static" className="navbar">
            <Toolbar>
                <Grid container alignItems="center">
                    <Grid item xs={6} sm={4}>
                        <Typography variant="h6" component="div">
                            Varun Rout
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm={8} container justifyContent="flex-end">
                        <div className="menuDesktop">
                            {menuItems.map((item, index) => (
                                <Button color="inherit" key={index} component={Link} to={item.path}>
                                    {item.text}
                                </Button>
                            ))}
                        </div>
                        <div className="menuMobile">
                            <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                                <MenuIcon />
                            </IconButton>
                            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                                {drawerList}
                            </Drawer>
                        </div>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
