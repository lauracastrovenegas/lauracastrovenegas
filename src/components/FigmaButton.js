import figmalogo from '../images/figmalogo.svg'
import styled from 'styled-components';
import ButtonWrapper from './ButtonWrapper';
import theme from '../theme';

const Logo = styled.div`
    height: 1.8rem;
    margin: auto 0rem;

    @media only screen and (max-width: ${theme.sizes.tablet}){
        width: 1.8rem;
    }

    img {
        height: 100%;
        object-fit: contain;
    }
`

const Label = styled.div`
    margin: auto 1rem;
`

const Content = styled.div`
    margin: 0rem auto;
    display: flex;
`

const FigmaButton = ({ link }) => {
    return (
        <ButtonWrapper link={link} light={true}>
            <Content>
                <Logo><img src={figmalogo} /></Logo>
                <Label>Design File</Label>
            </Content>
        </ButtonWrapper>
    )
}

export default FigmaButton;