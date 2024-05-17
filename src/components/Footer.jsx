// src/components/Footer.js
import React from 'react';
import { Box, Typography, Link } from '@mui/material';
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
        <Typography variant="body1" align="center">
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </Typography>
        <Box display="flex" justifyContent="center" mt={2}>
            <Link href="https://www.linkedin.com" color="inherit" target="_blank" rel="noopener">LinkedIn</Link>
            <Box mx={2}>|</Box>
            <Link href="https://github.com" color="inherit" target="_blank" rel="noopener">GitHub</Link>
            <Box mx={2}>|</Box>
            <Link href="https://twitter.com" color="inherit" target="_blank" rel="noopener">Twitter</Link>
        </Box>
    </Box>
);

export default Footer;
