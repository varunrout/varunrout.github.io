import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Switch, Avatar, Box, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NavbarContainer = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: '#ffffff',
    borderRadius: '10px',
    margin: '10px auto',
    boxShadow: theme.shadows[4],
    width: '100%',
}));

const LinkButton = styled(Button)(({ theme }) => ({
    color: '#ffffff',
    margin: theme.spacing(0, 2),
}));

const Navbar = () => {
    const [darkMode, setDarkMode] = React.useState(false);
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const handleThemeChange = () => {
        setDarkMode(!darkMode);
    };

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const drawerList = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <IconButton onClick={toggleDrawer(false)} sx={{ marginLeft: 'auto' }}>
                <CloseIcon />
            </IconButton>
            <List>
                {['About', 'Portfolio', 'Blogs'].map((text) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                <IconButton color="inherit">
                    <LinkedInIcon />
                </IconButton>
                <IconButton color="inherit">
                    <GitHubIcon />
                </IconButton>
                <IconButton color="inherit">
                    <TwitterIcon />
                </IconButton>
                <Switch checked={darkMode} onChange={handleThemeChange} />
            </Box>
        </Box>
    );

    return (
        <NavbarContainer position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}>
                    MyPortfolio
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                    <LinkButton>About</LinkButton>
                    <LinkButton>Portfolio</LinkButton>
                    <LinkButton>Blogs</LinkButton>
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <IconButton color="inherit">
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton color="inherit">
                        <GitHubIcon />
                    </IconButton>
                    <IconButton color="inherit">
                        <TwitterIcon />
                    </IconButton>
                    <Switch checked={darkMode} onChange={handleThemeChange} />
                    <Avatar alt="Profile Picture" src="/path/to/profile.jpg" />
                </Box>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="end"
                    onClick={toggleDrawer(true)}
                    sx={{ display: { xs: 'block', md: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                {drawerList}
            </Drawer>
        </NavbarContainer>
    );
};

export default Navbar;
