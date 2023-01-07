import styled from "styled-components";
import GithubButton from './GithubButton';
import FigmaButton from './FigmaButton';
import LiveProjectButton from './LiveProject';
import theme from "../theme";

const Wrapper = styled.div`
    margin: 1rem;
    transition: transform .2s;

    .text {
        display: none;
    }

    :hover{
        transform: scale(1.05);

        .container {
            filter: brightness(50%);
        }

        .text {
            display: flex;
            filter: brightness(100%);
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

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 1rem;
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
    margin-bottom: 1rem;

    @media only screen and (max-width: ${theme.sizes.tablet}){
        font-size: 1.5rem;
    }
`;

const Description = styled.div`
    font-size: 1rem;

    @media only screen and (max-width: 1400px){
        font-size: 0.75rem;
    }
`;

const ProjectCard = ({ project }) => {
    return (
        <Wrapper>
                <Image>
                    <img className="container" src={project.image_url} />
                    <Content className='text'>
                        <Title>{project.project_title}</Title>
                        <Description>{project.description}</Description>
                        {project.github_link && <GithubButton link={project.github_link}/>}
                        {project.figma_link && <FigmaButton link={project.figma_link} />}
                        {project.project_link && <LiveProjectButton link={project.project_link}/>}
                    </Content>
                </Image>
        </Wrapper>
    )
};

export default ProjectCard;