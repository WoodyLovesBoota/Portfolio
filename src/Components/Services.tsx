import styled from "styled-components";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faLink } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <Wrapper>
      <Header title="Specialized in  " subTitle="SERVICES" isCenter={true} />
      <Main>
        <ServiceBox>
          <ServiceIcon>
            <FontAwesomeIcon icon={faGlobe} />
          </ServiceIcon>
          <ServiceTitle>Web Development</ServiceTitle>
          <ServiceDescription>
            Create responsive websites and use various technologies and frameworks to enhance user experiences.
          </ServiceDescription>
        </ServiceBox>
        <ServiceBox>
          <ServiceIcon>
            <FontAwesomeIcon icon={faLink} />
          </ServiceIcon>
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
  padding: 8%;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  padding: 8% 0;
  padding-bottom: 0;
  display: flex;
  justify-content: center;
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

const ServiceBox = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0px 0px 64px 0 rgba(65, 65, 65, 0.1);
  width: 30rem;
  height: 25rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5rem;
  text-align: center;
  margin: 3.125rem 3.125rem;
`;

const ServiceIcon = styled.h2`
  width: 4rem;
  height: 4rem;
  border-radius: 1.3125rem;
  background-color: ${(props) => props.theme.main.hlbg};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  color: ${(props) => props.theme.word.accent};
  box-shadow: 0px 0px 30px 0px rgba(43, 25, 69, 0.3);
`;

const ServiceTitle = styled.h2`
  font-size: 1.3125rem;
  font-weight: 400;
`;

const ServiceDescription = styled.h2`
  font-weight: 300;
  font-size: 1.0625rem;
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
