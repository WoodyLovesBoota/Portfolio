import styled from "styled-components";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faLink } from "@fortawesome/free-solid-svg-icons";
import { forwardRef } from "react";
import { useRecoilValue } from "recoil";
import { languageState } from "../atoms";

const Services = forwardRef<HTMLDivElement>((props, ref) => {
  const isEng = useRecoilValue(languageState);

  return (
    <Wrapper ref={ref}>
      <Header title="Specialized in  " subTitle="SERVICES" isCenter={true} />
      {isEng ? (
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
      ) : (
        <Main>
          <ServiceBox>
            <ServiceIcon>
              <FontAwesomeIcon icon={faGlobe} />
            </ServiceIcon>
            <ServiceTitle>Web Development</ServiceTitle>
            <ServiceDescription>
              반응형 웹사이트를 만들고 다양한 기술과 프레임워크를 활용하여 사용자 경험을 향상 시킵니다.
            </ServiceDescription>
          </ServiceBox>
          <ServiceBox>
            <ServiceIcon>
              <FontAwesomeIcon icon={faLink} />
            </ServiceIcon>
            <ServiceTitle>Block-Chain Development</ServiceTitle>
            <ServiceDescription>
              스마트컨트랙트를 활용하여 효율적이고 안전한 블록체인 애플리케이션을 구축합니다.
            </ServiceDescription>
          </ServiceBox>
        </Main>
      )}
    </Wrapper>
  );
});

export default Services;

const Wrapper = styled.div`
  width: 100%;
  padding: 72px;
  padding-top: 144px;
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    padding: 16px;
  }
`;

const Main = styled.div`
  padding: 25px 0;
  display: flex;
  justify-content: center;
  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

const ServiceBox = styled.div`
  background-color: ${(props) => props.theme.bg.lighter};
  box-shadow: 0px 0px 64px 0 ${(props) => props.theme.bg.blur};
  width: min(480px, 100%);
  height: auto;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 80px;
  text-align: center;
  margin: 50px;
  @media (max-width: 1200px) {
    margin: 20px 0;
    padding: 60px 40px;
  }
`;

const ServiceIcon = styled.h2`
  width: 64px;
  height: 64px;
  border-radius: 21px;
  background-color: ${(props) => props.theme.main.hlbg};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: ${(props) => props.theme.word.black};
  box-shadow: 0px 0px 30px 0 ${(props) => props.theme.bg.blur};
  margin-bottom: 40px;
`;

const ServiceTitle = styled.h2`
  font-size: 18px;
  font-weight: 400;
  color: ${(props) => props.theme.word.main};
  margin-bottom: 40px;

  @media (max-width: 800px) {
    font-size: 16px;
  }
`;

const ServiceDescription = styled.h2`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.7;
  color: ${(props) => props.theme.word.sub};
`;
