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
      {/* <Header title="Specialized in  " subTitle="SERVICES" isCenter={true} /> */}
      {isEng ? (
        <Main>
          <Title>Specialized In</Title>

          <ServiceList>
            <ServiceRow>
              <ServiceTitle>
                <Circle />
                Web Developement
              </ServiceTitle>
              <ServiceDescription>
                HTML, CSS, JavaScript의 기초뿐만 아니라 이를 토대로 웹 인터페이스를 설계하고 개발할
                수 있습니다.
              </ServiceDescription>
              <ServiceDescription>
                React와 같은 Front End 관련 프레임워크를 활용하여 컴포넌트 기반 아키텍처를 통해
                모듈화된 코드를 작성할 수 있고, 상태 관리와 라우팅 등의 핵심 개념을 활용하여 웹
                애플리케이션을 개발한 경험이 있습니다.
              </ServiceDescription>
            </ServiceRow>
            <ServiceRow>
              <ServiceTitle>
                <Circle />
                Block-Chain Development
              </ServiceTitle>
              <ServiceDescription>
                Solidity 언어를 사용하여 이더리움과 같은 주요 플랫폼에서 스마트 컨트랙트를 설계하고
                구현할 수 있는 능력을 지니고 있습니다.
              </ServiceDescription>
              <ServiceDescription>
                스마트 컨트랙트 보안 감사 분야에서의 경험을 바탕으로 코드를 꼼꼼하게 검토하여
                안전하고 효율적인 프로토콜을 개발할 수 있으며, 프로젝트의 안정성을 높이는 데 기여할
                수 있습니다.
              </ServiceDescription>
            </ServiceRow>
          </ServiceList>
        </Main>
      ) : (
        <Main>
          <Title>Specialized In</Title>

          <ServiceList>
            <ServiceRow>
              <ServiceTitle>
                <Circle />
                Web Developement
              </ServiceTitle>
              <ServiceDescription>
                HTML, CSS, JavaScript의 기초뿐만 아니라 이를 토대로 웹 인터페이스를 설계하고 개발할
                수 있습니다.
              </ServiceDescription>
              <ServiceDescription>
                React와 같은 Front End 관련 프레임워크를 활용하여 컴포넌트 기반 아키텍처를 통해
                모듈화된 코드를 작성할 수 있고, 상태 관리와 라우팅 등의 핵심 개념을 활용하여 웹
                애플리케이션을 개발한 경험이 있습니다.
              </ServiceDescription>
            </ServiceRow>
            <ServiceRow>
              <ServiceTitle>
                <Circle />
                Block-Chain Development
              </ServiceTitle>
              <ServiceDescription>
                Solidity 언어를 사용하여 이더리움과 같은 주요 플랫폼에서 스마트 컨트랙트를 설계하고
                구현할 수 있는 능력을 지니고 있습니다.
              </ServiceDescription>
              <ServiceDescription>
                스마트 컨트랙트 보안 감사 분야에서의 경험을 바탕으로 코드를 꼼꼼하게 검토하여
                안전하고 효율적인 프로토콜을 개발할 수 있으며, 프로젝트의 안정성을 높이는 데 기여할
                수 있습니다.
              </ServiceDescription>
            </ServiceRow>
          </ServiceList>

          {/* <ServiceList>
            <ServiceBox>
              <ServiceIcon>
                <FontAwesomeIcon icon={faGlobe} />
              </ServiceIcon>
              <ServiceTitle>Web Development</ServiceTitle>
              <ServiceDescription>
                반응형 웹사이트를 만들고 다양한 기술과 프레임워크를 활용하여 사용자 경험을 향상
                시킵니다.
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
          </ServiceList> */}
        </Main>
      )}
    </Wrapper>
  );
});

export default Services;

const Wrapper = styled.div`
  width: 100%;
  padding-left: 200px;
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    padding: 48px 16px;
  }
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 500;
  padding-left: 80px;
  display: flex;
  align-items: center;
  margin-bottom: 80px;
  padding-bottom: 40px;
  border-bottom: 1px solid #e74946;
`;

const Circle = styled.div`
  width: 5px;
  height: 5px;
  background-color: black;
  border-radius: 100px;
  margin-right: 20px;
`;

const Main = styled.div`
  padding: 125px 0;
  border-left: 0.5px solid gray;
  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

const ServiceList = styled.div``;

const ServiceRow = styled.div`
  padding-left: 80px;
  width: 80%;
  margin-bottom: 80px;
`;

const ServiceTitle = styled.h2`
  font-size: 21px;
  font-weight: 400;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.word.main};
  margin-bottom: 40px;
`;

const ServiceDescription = styled.h2`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.7;
  color: ${(props) => props.theme.word.sub};
  margin-bottom: 20px;
`;
