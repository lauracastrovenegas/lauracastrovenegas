import githublogo from '../images/githublogo.png'
import styled from 'styled-components';

const Link = styled.a`
    text-decoration: none;
    color: white;
    margin: 0.25rem 1rem;
`

const Wrapper = styled.div`
    border-radius: 30px;
    display: flex;
    background-color: black;
    padding: 0.5rem 1rem;
    height: fit-content;
    min-height: 2rem;
`

const ButtonWrapper = ({ link, children }) => {
    return (
        <Link href={link}>
            <Wrapper>
                {children}
            </Wrapper>
        </Link>
    )
}

export default ButtonWrapper;