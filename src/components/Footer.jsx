// src/components/Footer.js
import React from 'react';
import { Box, Typography, Link, IconButton, Grid } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../assets/Stylesheets/Footer.css'; // If you have additional custom styles

const Footer = () => (
    <Box
        component="footer"
        sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                    ? theme.palette.grey[200]
                    : theme.palette.grey[800],
        }}
    >
        <Grid container justifyContent="center" alignItems="center" direction="column">
            <Grid item>
                <Typography variant="body1" align="center">
                    &copy; {new Date().getFullYear()} Your Name. All rights reserved.
                </Typography>
            </Grid>
            <Grid item>
                <Box display="flex" justifyContent="center" mt={2}>
                    <IconButton component={Link} href="https://www.linkedin.com" color="inherit" target="_blank" rel="noopener">
                        <LinkedInIcon />
                    </IconButton>
                    <Box mx={1}>|</Box>
                    <IconButton component={Link} href="https://github.com" color="inherit" target="_blank" rel="noopener">
                        <GitHubIcon />
                    </IconButton>
                    <Box mx={1}>|</Box>
                    <IconButton component={Link} href="https://twitter.com" color="inherit" target="_blank" rel="noopener">
                        <TwitterIcon />
                    </IconButton>
                </Box>
            </Grid>
        </Grid>
    </Box>
);

export default Footer;
