import githublogo from '../images/githublogo.png'
import styled from 'styled-components';
import ButtonWrapper from './ButtonWrapper';

const Logo = styled.div`
    height: 2rem;
    width: 2rem;
    margin: auto 0rem;

    img {
        height: 100%;
        object-fit: contain;
    }

    @media only screen and (max-width: 1220px){
        height: 1.2rem;
        width: 1.2rem;
    }
`

const Label = styled.div`
    margin: auto 1rem;

    @media only screen and (max-width: 1220px){
        margin: auto 0.5rem;
    }
`

const Content = styled.div`
    margin: 0rem auto;
    display: flex;
`

const GithubButton = ({ link }) => {
    return (
        <ButtonWrapper link={link} light={true}>
            <Content>
                <Logo><img src={githublogo} alt="github logo"/></Logo>
                <Label>Github Repo</Label>
            </Content>
        </ButtonWrapper>
    )
}

export default GithubButton;