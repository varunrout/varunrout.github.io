import React from 'react';
import { Grid, Container } from '@mui/material';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import ProjectDeck from '../components/ProjectDeck';
import sampleData from '../assets/Data/sampleData';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Banner />
                    </Grid>
                    <Grid item xs={12}>
                        <ProjectDeck projects={sampleData} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Home;
