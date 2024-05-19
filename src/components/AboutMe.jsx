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
    width: 150,
    height: 150,
    marginBottom: theme.spacing(4),
}));

const CentralAvatar = styled(Avatar)(({ theme }) => ({
    width: 150,
    height: 150,
    border: `4px solid ${theme.palette.primary.main}`,
}));

const SkillIcon = styled(Avatar)(({ theme }) => ({
    width: 50,
    height: 50,
    border: `2px solid ${theme.palette.secondary.main}`,
    position: 'absolute',
}));

const skillPositions = [
    { top: -25, left: 50 },
    { top: 50, left: -25 },
    { top: 50, right: -25 },
    { bottom: -25, left: 50 },
    { top: -25, right: 50 },
];

const AboutMe = () => {
    return (
        <AboutMeContainer>
            <AvatarContainer>
                <CentralAvatar alt="My Avatar" src="../assets/images/avatar.png" />
                {skillPositions.map((pos, index) => (
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
