import styled from "styled-components";
import Header from "./Header";

const Services = () => {
  return (
    <Wrapper>
      <Header title="Specialized in  " subTitle="SERVICES" />
      <Main>
        <ServiceBox>
          <ServiceIcon></ServiceIcon>
          <ServiceTitle>Web Development</ServiceTitle>
          <ServiceDescription>Create and maintain websites</ServiceDescription>
        </ServiceBox>
        <ServiceBox>
          <ServiceTitle>Block-Chain Development</ServiceTitle>
          <ServiceDescription></ServiceDescription>
        </ServiceBox>
      </Main>
    </Wrapper>
  );
};

export default Services;

const Wrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.bg.blur};
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
  border-radius: 12px;
`;

const ServiceIcon = styled.h2``;

const ServiceTitle = styled.h2``;

const ServiceDescription = styled.h2``;

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
