import styled from "styled-components/macro";
import ButtonWrapper from "./ButtonWrapper";

const Button = styled.div`
    max-width: 15rem;
    margin: 0rem auto;
    height: fit-content;
`

const Label = styled.div`
    margin: auto 1rem;
    color: white;
`

const Content = styled.div`
    margin: 0rem auto;
    display: flex;
`

const DownloadResumeButton = () => {
    return (
      <Button>
        <ButtonWrapper link="https://docs.google.com/document/d/1lmRXsrpDICmdPVsx14Al5RSfuBFstQvVy_imo21Er20/export?format=pdf">
            <Content>
                <Label>Download Resume</Label>
            </Content>
        </ButtonWrapper>
       </Button>
    )
}
  
export default DownloadResumeButton;