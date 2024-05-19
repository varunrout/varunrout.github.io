import React, { useState, useMemo } from 'react';
import { Box, Tabs, Tab, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ProjectCard from './ProjectCard';

const ProjectDeckContainer = styled(Box)(({ theme }) => ({
    width: '97%',
    padding: theme.spacing(2),
    display: 'flex',
    borderRadius: '15px',
    boxShadow: theme.shadows[4],
    margin: '10px auto',
    position: 'relative',
    overflowX: 'auto',
    overflowY: 'hidden',
    whiteSpace: 'nowrap',
    '&::-webkit-scrollbar': {
        display: 'none',
    },
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        overflowX: 'visible',
    },
}));

const ExpandButton = styled(IconButton)(({ theme }) => ({
    position: 'relative',
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
    },
}));

const ProjectDeck = ({ projects }) => {
    const [selectedDomain, setSelectedDomain] = useState('All');
    const [expanded, setExpanded] = useState(false);

    const domains = useMemo(() => {
        const allDomains = projects.map((project) => project.domain);
        return ['All', ...new Set(allDomains)];
    }, [projects]);

    const handleTabChange = (event, newValue) => {
        setSelectedDomain(newValue);
    };

    const handleExpand = () => {
        setExpanded(!expanded);
    };

    const filteredProjects = selectedDomain === 'All'
        ? projects
        : projects.filter((project) => project.domain === selectedDomain);

    return (
        <Box sx={{ textAlign: 'center' }}>
            <Tabs
                value={selectedDomain}
                onChange={handleTabChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                {domains.map((domain) => (
                    <Tab key={domain} label={domain} value={domain} />
                ))}
            </Tabs>

            <ProjectDeckContainer
                sx={{
                    flexDirection: expanded ? 'row' : 'row',
                    flexWrap: expanded ? 'wrap' : 'nowrap',
                    height: expanded ? 'auto' : 'auto',
                    justifyContent: expanded ? 'center' : 'flex-start',
                    overflowY: expanded ? 'scroll' : 'hidden',
                    overflowX: expanded ? 'hidden' : 'auto',
                }}
            >
                {filteredProjects.map((project) => (
                    <Box key={project.id} sx={{ display: 'inline-block' }}>
                        <ProjectCard project={project} />
                    </Box>
                ))}
            </ProjectDeckContainer>

            <ExpandButton onClick={handleExpand}>
                <ExpandMoreIcon />
            </ExpandButton>
        </Box>
    );
};

export default ProjectDeck;
