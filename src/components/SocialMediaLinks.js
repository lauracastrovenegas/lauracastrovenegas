import styled from 'styled-components';
import ButtonWrapper from './ButtonWrapper';
import githublogo from '../images/githublogo.png'
import linkedinlogo from '../images/linkedinlogo.png'
import email from '../images/email.png'

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

    :hover {
        cursor: pointer;
    }
`

const SocialMediaLinks = () => {
    return (
        <Wrapper>
            <GithubLink/>
            <LinkedInLink/>
            <EmailLink/>
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

const EmailLink = () => {
    return (
        <ButtonWrapper link="mailto:laurasofi1024@gmail.com">
            <Content>
                <Logo><img src={email} /></Logo>
                <Label>Email</Label>
            </Content>
        </ButtonWrapper>
    )
}