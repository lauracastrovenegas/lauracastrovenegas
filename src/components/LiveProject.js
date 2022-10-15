import styled from 'styled-components';
import ButtonWrapper from './ButtonWrapper';

const Label = styled.div`
    margin: auto auto;
`

const LiveProjectButton = ({ link }) => {
    return (
        <ButtonWrapper link={link} light={true}>
            <Label>Live Project</Label>
        </ButtonWrapper>
    )
}

export default LiveProjectButton;