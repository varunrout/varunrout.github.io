import React from 'react';
import { Box, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const slideIn = keyframes`
    from {
        opacity: 0;
        transform: translateX(-100%);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

const BannerContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '400px',
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    textAlign: 'center',
    padding: theme.spacing(3),
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '10px',
    boxShadow: theme.shadows[4],
    margin: '10px auto',
    [theme.breakpoints.down('sm')]: {
        height: 'auto',
        padding: theme.spacing(2),
    },
}));

const AnimatedTypography = styled(Typography)(({ theme }) => ({
    animation: `${fadeIn} 2s ease-out`,
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.5rem',
    },
}));

const AnimatedDetails = styled(Box)(({ theme }) => ({
    animation: `${slideIn} 3s ease-out`,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: theme.spacing(2),
    borderRadius: '10px',
    marginTop: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(1),
        fontSize: '0.9rem',
    },
}));

const BannerButton = styled(Button)(({ theme }) => ({
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
    },
    animation: `${fadeIn} 2.5s ease-out`,
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(1, 2),
        fontSize: '0.8rem',
    },
}));

const Banner = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <BannerContainer>
            <AnimatedTypography variant={isSmallScreen ? 'h4' : 'h2'}>
                Welcome to My Portfolio
            </AnimatedTypography>
            <AnimatedTypography variant={isSmallScreen ? 'h6' : 'h5'}>
                Discover My Projects and Skills
            </AnimatedTypography>
            <AnimatedDetails>
                <Typography variant="h6">About Me</Typography>
                <Typography>
                    I am a passionate data scientist with a love for uncovering insights from data.
                    My skills include machine learning, data visualization, and statistical analysis.
                    Let's explore my work together.
                </Typography>
            </AnimatedDetails>
            <BannerButton variant="contained">Learn More</BannerButton>
        </BannerContainer>
    );
};

export default Banner;
