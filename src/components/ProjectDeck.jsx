import React, { useState, useMemo } from 'react';
import { Box, Tabs, Tab, IconButton, Collapse, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ProjectCard from './ProjectCard';

const ProjectDeckContainer = styled(Box)(({ theme }) => ({
    // width: '100%',
    display: 'flex',
    padding: theme.spacing(2),
    borderRadius: '15px',
    boxShadow: theme.shadows[4],
    margin: '10px auto',
    position: 'relative',
    overflowX: 'auto',
    overflowY: 'hidden',
    whiteSpace: 'nowrap',
    justifyContent: 'center',
    '&::-webkit-scrollbar': {
        display: 'none',
    },
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        overflowX: 'visible',
        justifyContent: 'flex-start',
        height: '500px',
        overflowY: 'scroll'
    },
}));

const ExpandButton = styled(IconButton)(({ theme }) => ({
    position: 'relative',
    // right: theme.spacing(2),
    bottom: theme.spacing(3),
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
    },
}));

const ProjectDeck = ({ projects }) => {
    const [selectedDomain, setSelectedDomain] = useState('All');
    const [expanded, setExpanded] = useState(false);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

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
                variant="scrollable"
                scrollButtons="auto"
                sx={{ marginBottom: 2 }}
            >
                {domains.map((domain) => (
                    <Tab key={domain} label={domain} value={domain} />
                ))}
            </Tabs>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <ProjectDeckContainer
                    sx={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        height: 'auto',
                        overflowY: 'scroll',
                        overflowX: 'hidden',
                    }}
                >
                    {filteredProjects.map((project) => (
                        <Box key={project.id} sx={{ display: 'inline-block', [theme.breakpoints.down('sm')]: { display: 'block' } }}>
                            <ProjectCard project={project} />
                        </Box>
                    ))}
                </ProjectDeckContainer>
            </Collapse>

            <Collapse in={!expanded} timeout="auto" unmountOnExit>
                <ProjectDeckContainer
                    sx={{
                        flexDirection: 'row',
                        flexWrap: 'nowrap',
                        justifyContent: 'flex-start',
                        height: 'auto',
                        overflowY: 'hidden',
                        overflowX: 'auto',
                    }}
                >
                    {filteredProjects.map((project) => (
                        <Box key={project.id} sx={{ display: 'inline-block', [theme.breakpoints.down('sm')]: { display: 'block' } }}>
                            <ProjectCard project={project} />
                        </Box>
                    ))}
                </ProjectDeckContainer>
            </Collapse>

            <ExpandButton onClick={handleExpand}>
                <ExpandMoreIcon />
            </ExpandButton>
        </Box>
    );
};

export default ProjectDeck;
