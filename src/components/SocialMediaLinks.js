import styled from 'styled-components';
import ButtonWrapper from './ButtonWrapper';
import githublogo from '../images/githublogo.png'
import linkedinlogo from '../images/linkedinlogo.png'

const Wrapper = styled.div`
    margin-top: auto;
`

const Logo = styled.div`
    height: 2rem;

    img {
        height: 100%;
        width: 100%
    }
`

const Label = styled.div`
    margin: auto 1rem;
    color: white;
`

const Content = styled.div`
    margin: 0rem auto;
    display: flex;
`

const SocialMediaLinks = () => {
    return (
        <Wrapper>
            <GithubLink/>
            <LinkedInLink/>
        </Wrapper>
    )
}

export default SocialMediaLinks;

const GithubLink = () => {
    return (
        <ButtonWrapper link="https://github.com/lauracastrovenegas">
            <Content>
                <Logo><img src={githublogo} /></Logo>
                <Label>Github</Label>
            </Content>
        </ButtonWrapper>
    )
}

const LinkedInLink = () => {
    return (
        <ButtonWrapper link="https://www.linkedin.com/in/laura-castro-venegas-7b63b7189">
            <Content>
                <Logo><img src={linkedinlogo} /></Logo>
                <Label>LinkedIn</Label>
            </Content>
        </ButtonWrapper>
    )
}