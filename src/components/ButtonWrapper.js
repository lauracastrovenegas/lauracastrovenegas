import githublogo from '../images/githublogo.png'
import styled from 'styled-components';
import theme from '../theme';

const Link = styled.a`
    text-decoration: none;
    color: white;
    margin: 0.25rem 1rem;
`

const Wrapper = styled.div`
    border-radius: 30px;
    display: flex;
    background-color: ${props => props.light ? theme.colors.mainBlue : theme.colors.darkBlue};
    padding: 0.5rem 1rem;
    height: fit-content;
    min-height: 2rem;
`

const ButtonWrapper = ({ link, children, light }) => {
    return (
        <Link href={link} target="_blank">
            <Wrapper light={light}>
                {children}
            </Wrapper>
        </Link>
    )
}

export default ButtonWrapper;