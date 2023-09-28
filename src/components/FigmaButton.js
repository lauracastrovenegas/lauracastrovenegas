import figmalogo from '../images/figmalogo.svg'
import styled from 'styled-components';
import ButtonWrapper from './ButtonWrapper';
import theme from '../theme';

const Logo = styled.div`
    height: 1.8rem;
    margin: auto 0rem;
    border-radius: 0;

    @media only screen and (max-width: ${theme.sizes.tablet}){
        width: 1.8rem;
    }

    img {
        border: none;
        border-radius: 0;
        height: 100%;
        object-fit: contain;
    }

    @media only screen and (max-width: 1220px){
        width: 1rem;
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

const FigmaButton = ({ link }) => {
    return (
        <ButtonWrapper link={link} light={true}>
            <Content>
                <Logo><img src={figmalogo} alt="figma logo"/></Logo>
                <Label>Design File</Label>
            </Content>
        </ButtonWrapper>
    )
}

export default FigmaButton;