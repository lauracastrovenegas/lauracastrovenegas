import LCVResume from '../assets/Laura-Castro-Venegas-Resume-2022.pdf'
import SubPageWrapper from './SubPageWrapper';

const Resume = () => {
  return (
    <SubPageWrapper title="">
        <iframe src={LCVResume} style={{width: '100%', height: '90vh'}}></iframe>
    </SubPageWrapper>
  );
}

export default Resume;