import styled from 'styled-components/macro';
import SubPageWrapper from './SubPageWrapper';
import theme from '../theme';
import DownloadResumeButton from '../components/DownloadResumeButton';

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

const Resume = () => {
  return (
    <SubPageWrapper title="">
      <EmbeddedDoc>
        <embed src="https://docs.google.com/document/d/e/2PACX-1vSAbn3yih-qKpedVZaSgIbbbKim1qdRAvBdC2KkOw94crAE_kkHDkXJfhMXd1ykzo6pmT-MW7D0TlGr/pub?embedded=true"></embed>
      </EmbeddedDoc>
      <DownloadResumeButton/>
        {/* <iframe src={"https://docs.google.com/document/d/e/2PACX-1vSAbn3yih-qKpedVZaSgIbbbKim1qdRAvBdC2KkOw94crAE_kkHDkXJfhMXd1ykzo6pmT-MW7D0TlGr/pub"} style={{width: '100%', height: '90vh'}}></iframe> */}
    </SubPageWrapper>
  );
}

export default Resume;

