import styled from "styled-components";
import Header from "./Header";

const Services = () => {
  return (
    <Wrapper>
      <Header title="Specialized in  " subTitle="SERVICES" isCenter={true} />
      <Main>
        <ServiceBox>
          <ServiceIcon></ServiceIcon>
          <ServiceTitle>Web Development</ServiceTitle>
          <ServiceDescription>
            Create responsive websites and use various technologies and frameworks to enhance user experiences.
          </ServiceDescription>
        </ServiceBox>
        <ServiceBox>
          <ServiceIcon></ServiceIcon>
          <ServiceTitle>Block-Chain Development</ServiceTitle>
          <ServiceDescription>
            Build efficient and secure blockchain applications using smart contracts.
          </ServiceDescription>
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
  height: 400px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 80px;
  text-align: center;
`;

const ServiceIcon = styled.h2`
  width: 64px;
  height: 64px;
  border-radius: 21px;
  background-color: ${(props) => props.theme.main.hlbg};
`;

const ServiceTitle = styled.h2`
  font-size: 21px;
  font-weight: 400;
`;

const ServiceDescription = styled.h2`
  font-weight: 300;
  font-size: 17px;
  line-height: 1.7;
`;

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
