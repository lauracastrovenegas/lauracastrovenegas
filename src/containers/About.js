import SubPageWrapper from './SubPageWrapper';
import styled from 'styled-components';
import theme from '../theme';

const Content = styled.div`
  padding: 5rem;
  color: white;

  @media only screen and (max-width: ${theme.sizes.tablet}){
    padding: 1rem;
  }
`

const SubTitle = styled.div`
  color: white;
  font-size: 3rem;
  margin: 0rem auto;

  @media only screen and (max-width: ${theme.sizes.tablet}){
    font-size: 20px;
  }
`

const About = () => {
  return (
    <SubPageWrapper title="About Me">
        <SubTitle>Laura Castro Venegas</SubTitle>
        <Content>
          <p>Hello! I am a fourth-year student at Columbia University in the School of Engineering and Applied Sciences majoring in Computer Science on the Applications Track with a minor in Applied Mathematics.</p>
          <p>My interests lie in User-Centered Design and Human-Computer Interaction. I have extensive esperience in Full-Stack development and spend most of my time working on React and React Native Projects.</p>
          <p>I am currently working at the Columbia Daily Spectator Newspaper as Head of Engineering and Full-Stack JavaScript Developer.</p>
        </Content>
    </SubPageWrapper>
  );
}

export default About;