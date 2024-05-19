import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';

const ProjectCardContainer = styled(Card)(({ theme }) => ({
    width: 300,
    margin: theme.spacing(2),
    borderRadius: '15px',
    boxShadow: theme.shadows[4],
}));

const ProjectCard = ({ project }) => {
    return (
        <ProjectCardContainer>
            <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt={project.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {project.description}
                </Typography>
            </CardContent>
        </ProjectCardContainer>
    );
};

export default ProjectCard;
