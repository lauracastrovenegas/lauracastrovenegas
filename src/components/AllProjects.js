import React from 'react';
import styled from 'styled-components/macro';
import theme from '../theme';
import { all_projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectCard2 from './ProjectCard2';

const ProjectsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    width: 80%;
    grid-auto-rows: 1fr;
    margin: 1rem auto;

    @media only screen and (max-width: 1230px){
        grid-template-columns: repeat(2,1fr);
    }

    @media only screen and (max-width: 890px){
        grid-template-columns: repeat(1,1fr);
    }
`;

const TitleText = styled.h1`
    text-align: center;
    width: fit-content;
    margin: 6rem auto 0rem auto;
    color: white;
    font-weight: 600;
    text-transform: uppercase;

    @media only screen and (max-width: ${theme.sizes.tablet}){
        font-size: 30px;
        margin: 2rem auto 0rem auto;
    }
`;

const AllProjects = () => {
    return (
        <>
            {all_projects.map(project_group => (
                <>
                    <TitleText>{project_group.title}</TitleText>
                    <ProjectsContainer>
                        {project_group.title === "Other Programming Projects" ?
                            project_group.projects.map(project => (
                                <ProjectCard2 project={project} />
                            )) :
                            project_group.projects.map(project => (
                                <ProjectCard project={project} />
                            ))}
                    </ProjectsContainer>
                </>
            ))}
        </>
    )
};

export default AllProjects;