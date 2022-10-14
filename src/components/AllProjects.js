import React from 'react';
import styled from 'styled-components/macro';
import theme from '../theme';
import { all_projects } from '../projects';

const ProjectsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    width: 80%;
    grid-auto-rows: 1fr;
    margin: 1rem auto;

    @media only screen and (max-width: 768px){
        grid-template-columns: repeat(1,1fr);
    }
`;

const TitleText = styled.h1`
    text-align: center;
    margin-right: 2.5rem;
    margin-top: 6rem;
    color: white;
    font-weight: 600;
    text-transform: uppercase;

    @media only screen and (max-width: ${theme.sizes.tablet}){
        font-size: 30px;
        margin: 2rem auto 0rem auto;
    }
`;

const Wrapper = styled.div`
    a {
        color: black;
        text-decoration: none;
    }

    margin: 1rem;
    transition: transform .2s;

    .text {
        display: none;
    }

    :hover{
        transform: scale(1.05);

        img {
            filter: brightness(50%);
        }

        .text {
            display: flex;
        }
    }
`;

const Image = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto 0 auto 0;
    position: relative;

    width: 100%;   
    height: 100%; 

        img{
            width: 100%;   
            height: 100%; 
            object-fit: cover;
        }
    }
`;

const Text = styled.div`
    
    display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        width: 15rem;
        margin: 0 auto;
        position: absolute;
        color: white;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        z-index: 5;

    @media only screen and (max-width: ${theme.sizes.mobile}){
        width: 15rem;
    }
`;

const Title = styled.div`
    font-size: 1.5rem;
    font-weight: 500;

    @media only screen and (max-width: ${theme.sizes.tablet}){
        font-size: 1rem;
    }
`;

const Author = styled.div`
    margin-top: 1rem;
    font-family: "Inter";

    @media only screen and (max-width: 768px){
        font-size: 0.875rem;
        margin-top: 0.5rem;
    }
`;

const Project = ({ link, image, title, author, isIllo }) => {
    return (
        <Wrapper>
            <a href={link} target="_blank">
                <Image>
                    <img src={image} />
                    <Text className='text'>
                        <Title>{title}</Title>
                        <Author>{author}</Author>
                    </Text>
                </Image>
            </a>
        </Wrapper>
    )
};

const AllProjects = ({ }) => {
    return (
        <>
            {all_projects.map(project_group => (
                <>
                    <TitleText>{project_group.title}</TitleText>
                    <ProjectsContainer>
                        {project_group.projects.map(project => (
                            <Project link={project.project_link} image={project.image_url} title={project.project_title} author={project.article_authors} isIllo={project.isIllo} />
                        ))}
                    </ProjectsContainer>
                </>
            ))}
        </>
    )
};

export default AllProjects;