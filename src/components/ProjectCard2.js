import styled from "styled-components";
import theme from "../theme";

const Wrapper = styled.div`
    margin: 1rem;
    transition: transform .2s;
    background-color: #1c4687;
    padding: 1rem;

    a {
        text-decoration: none;
        color: white;
    }

    :hover{
        transform: scale(1.05);
        cursor: pointer;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 15rem;
    color: white;
    text-align: center;
    margin-left: auto;
    margin-right: auto;

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

const ProjectCard2 = ({ project }) => {
    return (
        <Wrapper>
            <a href={project.github_link}>
                <Content>
                    <Title>{project.project_title}</Title>
                </Content>
            </a>
        </Wrapper>
    )
};

export default ProjectCard2;