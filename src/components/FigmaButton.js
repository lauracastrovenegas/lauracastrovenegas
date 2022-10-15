import figmalogo from '../images/figmalogo.svg'
import styled from 'styled-components';
import ButtonWrapper from './ButtonWrapper';

const Logo = styled.div`
    height: 1.8rem;

    img {
        height: 100%;
        width: 100%
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
        <ButtonWrapper link={link}>
            <Content>
                <Logo><img src={figmalogo} /></Logo>
                <Label>Design File</Label>
            </Content>
        </ButtonWrapper>
    )
}

export default FigmaButton;