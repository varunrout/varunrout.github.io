// src/pages/Home.jsx
import React from 'react';
import { Grid } from '@mui/material';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import ProjectDeck from '../components/ProjectDeck';
import sampleData from "../assets/Data/sampleData";


const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner/>
            <ProjectDeck projects={sampleData}/>
        </div>
    );
};

export default Home;
