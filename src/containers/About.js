import SubPageWrapper from './SubPageWrapper';
import styled from 'styled-components';
import theme from '../theme';
import SocialMediaLinks from '../components/SocialMediaLinks';
import ResumeButton from '../components/ResumeButton';
import ProjectsButton from '../components/ProjectsButton';
import DownloadResumeButton from '../components/DownloadResumeButton';
import laura from '../images/laura.JPG'

const Content = styled.div`
  padding: 2rem 2rem;
  color: white;

  @media only screen and (max-width: ${theme.sizes.tablet}){
    padding: 1rem;
  }
`

const MobileOnly = styled.div`
  display: none;

  @media only screen and (max-width: ${theme.sizes.tablet}){
    display: flex;
    flex-direction: column;
    width: fit-content;
    margin: 0rem auto;
  }
`

const Media = styled.div`
  width: 15rem;
  margin: 0rem auto;
`

const DesktopOnly = styled.div`
  display: flex;
  width: fit-content;
  margin: 0rem auto;

  @media only screen and (max-width: ${theme.sizes.tablet}){
    display: none;
  }
`

const Top = styled.div`
  display: flex;
  width: fit-content;
  margin: 1rem 1rem;

  @media only screen and (max-width: ${theme.sizes.tablet}){
    flex-direction: column;
  }
`

const Button = styled.div`
  margin: 0rem 1rem;
  width: fit-content;
`
const ProfilePic = styled.div`
  max-width: 20rem;
  margin: auto auto;
  border-radius: 15px;

  img {
    border-radius: 15px;
    width: 100%;
    object-fit: contain;
  }
`

const About = () => {
  return (
    <SubPageWrapper title="About Me">
      <Top>
        <ProfilePic>
          <img src={laura} alt="Headshot of Laura wearing her light blue Columbia University graduation gown."/>
        </ProfilePic>
        <Content>
          <p>Hello, I'm <b>Laura Castro Venegas</b>!</p>
          <p>I am a master's student at Stanford University, studying Computer Science with a specialization in Human-Computer Interaction.</p>
          <p>I have a Bachelor of Science from Columbia University in Computer Science with a minor in Applied Mathematics.</p>
          <p>My interests lie in User-Centered Design, Human-Computer Interaction, and Frontend Development. I have extensive experience in Full-Stack Javascript development and spend most of my time working on React and React Native Projects.</p>
        </Content>
      </Top>
      <DesktopOnly>
        <Button>
          <ProjectsButton className="button" />
        </Button>
        <Button>
          <ResumeButton className="button" />
        </Button>
      </DesktopOnly>
      <MobileOnly>
        <ProjectsButton />
        <DownloadResumeButton />
        <Media>
          <SocialMediaLinks />
        </Media>
      </MobileOnly>
    </SubPageWrapper>
  );
}

export default About;