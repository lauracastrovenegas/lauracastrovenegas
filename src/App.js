import AllProjects from './components/AllProjects';
import styled from 'styled-components';
import theme from './theme';
import Navbar from './components/Navbar';
import { Route, Routes, HashRouter } from 'react-router-dom';
import Resume from './containers/Resume';
import Projects from './containers/Projects';
import About from './containers/About';
import {lazy, Suspense} from 'react';

const Wrapper = styled.div`
  background-color: ${theme.colors.mainBlue};
  display:flex;

  @media only screen and (max-width: ${theme.sizes.tablet}){
    flex-direction: column;
  }
`

const Right = styled.div`
  flex: 1;
`

const Left = styled.div`
  width: 20rem;
  height: 100vh;
  position: sticky; 
  top: 0;
  z-index: 10;

  @media only screen and (max-width: ${theme.sizes.tablet}){
    width: 100%;
    height: 2rem;
  }
`

const App = () => {
  return (
    
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Wrapper>
        <Left>
          <Navbar />
        </Left>
        <Right>
          <Routes>
            <Route exact path="/" element={<About/>} />      
            <Route path="/projects" element={<Projects/>} />
            <Route path="/resume" element={<Resume/>} />
          </Routes>
        </Right>
      </Wrapper>
    </HashRouter>
   
  );
}

export default App;