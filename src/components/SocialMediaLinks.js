import styled from 'styled-components';
import ButtonWrapper from './ButtonWrapper';
import githublogo from '../images/githublogo.png'
import linkedinlogo from '../images/linkedinlogo.png'
import email from '../images/email.png'

const Wrapper = styled.div`
    margin-top: auto;
    padding: 2rem 0rem;
`

const Logo = styled.div`
    height: 2rem;

    img {
        height: 100%;
        object-fit: contain;
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
                <Logo><img src={githublogo} alt="github logo"/></Logo>
                <Label>Github</Label>
            </Content>
        </ButtonWrapper>
    )
}

const LinkedInLink = () => {
    return (
        <ButtonWrapper link="https://www.linkedin.com/in/laura-castro-venegas-7b63b7189">
            <Content>
                <Logo><img src={linkedinlogo} alt="linkedin logo"/></Logo>
                <Label>LinkedIn</Label>
            </Content>
        </ButtonWrapper>
    )
}

const EmailLink = () => {
    return (
        <ButtonWrapper link="mailto:laurasofi1024@gmail.com">
            <Content>
                <Logo><img src={email} alt="email envelope icon"/></Logo>
                <Label>Email</Label>
            </Content>
        </ButtonWrapper>
    )
}