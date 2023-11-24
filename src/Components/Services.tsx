import styled from "styled-components";
import Header from "./Header";

const Services = () => {
  return (
    <Wrapper>
      <Header title="Specialized in  " subTitle="SERVICES" />
      <Main>
        <ServiceBox></ServiceBox>
        <ServiceBox></ServiceBox>
      </Main>
    </Wrapper>
  );
};

export default Services;

const Wrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.bg.point};
  padding: 8%;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  padding: 8% 0;
  padding-bottom: 0;
  display: flex;
  justify-content: space-between;
`;

const ServiceBox = styled.div`
  background-color: white;
  width: 480px;
  height: 480px;
`;

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
