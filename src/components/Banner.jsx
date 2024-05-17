// src/components/Banner.jsx
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import '../assets/Stylesheets/Banner.css';
import AvatarImage from '../assets/images/avatar.png'; // Assuming your avatar image is named 'avatar.jpg'

const Banner = () => (
    <Box className="banner">
        <Grid container justifyContent="center" alignItems="center" style={{ height: '100%' }}>
            <Grid item>
                <div className="avatar-container">
                    <img src={AvatarImage} alt="Avatar" className="avatar" />
                </div>
            </Grid>
        </Grid>
    </Box>
);

export default Banner;
