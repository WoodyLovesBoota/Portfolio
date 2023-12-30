import styled from "styled-components";
import { forwardRef } from "react";
import { useRecoilValue } from "recoil";
import { languageState } from "../atoms";

const Services = forwardRef<HTMLDivElement>((props, ref) => {
  const isEng = useRecoilValue(languageState);

  return (
    <Wrapper ref={ref}>
      <Title>
        <span>S</span>kills
      </Title>
      {isEng ? (
        <Main>
          <ServiceTitle>Front-End</ServiceTitle>
          <ServiceDescription>
            I can create web interfaces using HTML, CSS, and JavaScript. I have experience using
            front-end frameworks like React to write modularized code through a component-based
            architecture. I am familiar with core concepts such as state management and routing,
            allowing me to develop web applications effectively.
          </ServiceDescription>

          <ServiceTitle>Block-Chain</ServiceTitle>
          <ServiceDescription>
            I have the ability to design and implement smart contracts on major platforms like
            Ethereum using the Solidity language. Leveraging experience in smart contract security
            audits, I thoroughly review code to develop secure and efficient protocols. I can
            contribute to enhancing project stability through my expertise.
          </ServiceDescription>
        </Main>
      ) : (
        <Main>
          <ServiceTitle>Front-End</ServiceTitle>
          <ServiceDescription>
            HTML, CSS, JavaScript의 기초뿐만 아니라 이를 토대로 웹 인터페이스를 설계하고 개발할 수
            있습니다. React와 같은 Front End 관련 프레임워크를 활용하여 컴포넌트 기반 아키텍처를
            통해 모듈화된 코드를 작성할 수 있고, 상태 관리와 라우팅 등의 핵심 개념을 활용하여 웹
            애플리케이션을 개발한 경험이 있습니다.
          </ServiceDescription>

          <ServiceTitle>Block-Chain</ServiceTitle>
          <ServiceDescription>
            Solidity 언어를 사용하여 이더리움과 같은 주요 플랫폼에서 스마트 컨트랙트를 설계하고
            구현할 수 있는 능력을 지니고 있습니다. 스마트 컨트랙트 보안 감사 분야에서의 경험을
            바탕으로 코드를 꼼꼼하게 검토하여 안전하고 효율적인 프로토콜을 개발할 수 있으며,
            프로젝트의 안정성을 높이는 데 기여할 수 있습니다.
          </ServiceDescription>
        </Main>
      )}
    </Wrapper>
  );
});

export default Services;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 300px;
  padding-bottom: 200px;
`;

const Main = styled.div`
  width: 30vw;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 100px;
  font-weight: 400;

  span {
    color: #e74946;
    font-size: 18px;
    font-weight: 500;
  }
`;

const ServiceTitle = styled.h2`
  font-size: 18px;
  font-weight: 400;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.word.main};
  margin-bottom: 15px;
`;

const ServiceDescription = styled.h2`
  font-size: 16px;
  font-weight: 400;
  line-height: 2;
  margin-bottom: 30px;
`;
