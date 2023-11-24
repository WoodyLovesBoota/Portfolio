import styled from "styled-components";
import Header from "./Header";

const Services = () => {
  return (
    <Wrapper>
      <Header title="Education & Skills  " subTitle="LEARNING PATH" />
      <Main></Main>
    </Wrapper>
  );
};

export default Services;

const Wrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.bg.normal};
  padding: 8%;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div``;

const EducationColumn = styled.div``;

const EducationTitle = styled.h2``;

const EducationSubTitle = styled.h2``;

const EducationYear = styled.h2``;

const EducationInfo = styled.div``;

const Feature = styled.div``;

const Circle = styled.div``;

const SkillColumn = styled.div``;

const SkillDescription = styled.h2``;

const SkillGraph = styled.div``;

const SkillRow = styled.div``;

const SkillName = styled.h2``;

const SkillBar = styled.div``;

const SkillFill = styled.div<{ width: string }>``;

const cursorVar = {};
