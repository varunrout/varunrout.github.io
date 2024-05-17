// src/pages/Home.jsx
import React from 'react';
import { Grid } from '@mui/material';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Grid container justifyContent="center" style={{ padding: '20px', textAlign: 'center' }}>
                <Grid item xs={12}>
                    <h1>Welcome to My Portfolio</h1>
                    <p>
                        This is the home page of my portfolio website. Here, you can find information about my work,
                        projects, blog posts, and how to get in touch with me. Feel free to browse around and learn more about what I do.
                    </p>
                </Grid>
            </Grid>
            <Footer />
        </div>
    );
};

export default Home;
