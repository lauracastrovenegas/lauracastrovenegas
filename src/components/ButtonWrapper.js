import githublogo from '../images/githublogo.png'
import styled from 'styled-components';
import theme from '../theme';

const Link = styled.div`
    margin-top: 1rem;

    a {
        text-decoration: none;
        color: white;
    }

    @media only screen and (max-width: 1220px){
        margin-top: 0.75rem;
    }
`

const Wrapper = styled.div`
    border-radius: 30px;
    display: flex;
    background-color: ${props => props.light ? theme.colors.mainBlue : theme.colors.darkBlue};
    padding: 0.5rem 1rem;
    height: fit-content;
    min-height: 2rem;
    z-index: 100;
    transition: transform .2s;

    :hover {
         transform: scale(1.025);
    }

    @media only screen and (max-width: 1220px){
        padding: 0.25rem 0.5rem;
        min-height: 2rem;
    }
`

const ButtonWrapper = ({ link, children, light, target }) => {
    return (
        <Link >
            <a href={link} target={target ? target : "_blank"}>
                <Wrapper light={light}>
                    {children}
                </Wrapper>
            </a>
        </Link>
    )
}

export default ButtonWrapper;