import AllProjects from './components/AllProjects';
import styled from 'styled-components';
import theme from './theme';

const Title = styled.div`
  text-align: center;
  color: white;
  font-size: 5rem;

  @media only screen and (max-width: ${theme.sizes.tablet}){
      font-size: 30px;
      margin: 2rem auto 0rem auto;
  }
`

const SubTitle = styled.div`
  text-align: center;
  color: white;
  font-size: 2.5rem;

  @media only screen and (max-width: ${theme.sizes.tablet}){
      font-size: 15px;
      margin: 2rem auto 0rem auto;
  }
`

const Wrapper = styled.div`
  background-color: #8399be;
  padding-top: 6rem;
`

const App = () => {
  return (
    <Wrapper>
      <SubTitle>Laura Castro Venegas</SubTitle>
      <Title>Projects Portfolio</Title>
      <AllProjects/>
    </Wrapper>
  );
}

export default App;
