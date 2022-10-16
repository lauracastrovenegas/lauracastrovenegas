import styled from 'styled-components/macro';
import LCVResume from '../assets/Laura-Castro-Venegas-Resume-2022.pdf'
import SubPageWrapper from './SubPageWrapper';
import ButtonWrapper from '../components/ButtonWrapper';
import theme from '../theme';

const EmbeddedDoc = styled.div`
  display: flex;

  embed {
    margin: 0rem auto;
    width: 630pt;
    height: 83vh;

    @media only screen and (max-width: ${theme.sizes.tablet}){
      height: 78vh;
    }
  }
`

const Button = styled.div`
    max-width: 15rem;
    margin: 0rem auto;
`

const Label = styled.div`
    margin: auto 1rem;
    color: white;
`

const Content = styled.div`
    margin: 0rem auto;
    display: flex;
`

const Resume = () => {
  return (
    <SubPageWrapper title="">
      <EmbeddedDoc>
        <embed src="https://docs.google.com/document/d/e/2PACX-1vSAbn3yih-qKpedVZaSgIbbbKim1qdRAvBdC2KkOw94crAE_kkHDkXJfhMXd1ykzo6pmT-MW7D0TlGr/pub?embedded=true"></embed>
      </EmbeddedDoc>
      <DownloadButton/>
        {/* <iframe src={"https://docs.google.com/document/d/e/2PACX-1vSAbn3yih-qKpedVZaSgIbbbKim1qdRAvBdC2KkOw94crAE_kkHDkXJfhMXd1ykzo6pmT-MW7D0TlGr/pub"} style={{width: '100%', height: '90vh'}}></iframe> */}
    </SubPageWrapper>
  );
}

export default Resume;

const DownloadButton = () => {
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