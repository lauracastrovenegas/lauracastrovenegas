import AllProjects from '../components/AllProjects';
import styled from 'styled-components';
import theme from '../theme';

const Wrapper = styled.div`
  padding: 3rem 1rem;
`

const Title = styled.div`
  text-align: center;
  color: white;
  font-size: 4rem;

  @media only screen and (max-width: ${theme.sizes.tablet}){
      font-size: 30px;
      margin: 2rem auto 0rem auto;
  }
`

const SubPageWrapper = ({title, children}) => {
  return (
    <Wrapper>
        <Title>{title}</Title>
        {children}
    </Wrapper>
  );
}

export default SubPageWrapper;