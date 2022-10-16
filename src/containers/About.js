import SubPageWrapper from './SubPageWrapper';
import styled from 'styled-components';
import theme from '../theme';
import SocialMediaLinks from '../components/SocialMediaLinks';
import ResumeButton from '../components/ResumeButton';
import ProjectsButton from '../components/ProjectsButton';
import DownloadResumeButton from '../components/DownloadResumeButton';
import laura from '../images/laura.jpg'

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

  img {
    width: 100%;
    object-fit: contain;
  }
`

const About = () => {
  return (
    <SubPageWrapper title="About Me">
      <Top>
        <ProfilePic>
          <img src={laura}/>
        </ProfilePic>
        <Content>
          <p>Hello, I'm <b>Laura Castro Venegas</b>!</p>
          <p>I am a fourth-year student at Columbia University in the School of Engineering and Applied Sciences, majoring in Computer Science on the Applications Track and minoring in Applied Mathematics.</p>
          <p>My interests lie in User-Centered Design, Human-Computer Interaction, and Frontend Development. I have extensive experience in Full-Stack Javascript development and spend most of my time working on React and React Native Projects.</p>
          <p>I am the Head of Engineering at the Columbia Spectator, where I lead the Engineering Team and work as a Full-Stack JavaScript Developer.</p>
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