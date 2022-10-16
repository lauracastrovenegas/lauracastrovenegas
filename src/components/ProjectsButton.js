import styled from "styled-components";
import ButtonWrapper from "./ButtonWrapper";

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

const ProjectsButton = () => {
    return (
      <Button>
        <ButtonWrapper link="/projects" target="_self">
            <Content>
                <Label>Explore My Projects</Label>
            </Content>
        </ButtonWrapper>
       </Button>
    )
}
  
export default ProjectsButton;