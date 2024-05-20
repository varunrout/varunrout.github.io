import React from 'react';
import { Box, Avatar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const AboutMeContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(4),
    // margin: theme.spacing(2),
    borderRadius: '15px',
    boxShadow: theme.shadows[4],
    backgroundColor: theme.palette.background.paper,
    textAlign: 'center',
}));

const AvatarContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: 250,
    height: 250,
    marginBottom: theme.spacing(4),
}));

const CentralAvatar = styled(Avatar)(({ theme }) => ({
    width: 150,
    height: 150,
    border: `4px solid ${theme.palette.primary.main}`,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
}));

const SkillIcon = styled(Avatar)(({ theme }) => ({
    width: 50,
    height: 50,
    border: `2px solid ${theme.palette.secondary.main}`,
    position: 'absolute',
}));

const skillPositions = (radius, numberOfIcons) => {
    const angleStep = (2 * Math.PI) / numberOfIcons;
    return Array.from({ length: numberOfIcons }, (_, index) => {
        const angle = index * angleStep;
        return {
            top: `${50 + radius * Math.sin(angle)}%`,
            left: `${50 + radius * Math.cos(angle)}%`,
            transform: 'translate(-50%, -50%)',
        };
    });
};

const AboutMe = () => {
    const positions = skillPositions(0.6, 5); // radius as a fraction of the container size, and number of icons

    return (
        <AboutMeContainer>
            <AvatarContainer>
                <CentralAvatar alt="My Avatar" src="/path/to/avatar.jpg" />
                {positions.map((pos, index) => (
                    <SkillIcon
                        key={index}
                        alt={`Skill ${index + 1}`}
                        src={`/path/to/skill-icon-${index + 1}.png`}
                        sx={pos}
                    />
                ))}
            </AvatarContainer>
            <Typography variant="h4">About Me</Typography>
            <Typography variant="body1">
                I am a passionate data scientist with a love for uncovering insights from data.
                My skills include machine learning, data visualization, and statistical analysis.
                Let's explore my work together.
            </Typography>
        </AboutMeContainer>
    );
};

export default AboutMe;
