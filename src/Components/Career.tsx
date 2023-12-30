import styled from "styled-components";
import { useState } from "react";
import careerData from "../careerData.json";
import { forwardRef } from "react";
import { useRecoilValue } from "recoil";
import { languageState } from "../atoms";

const Career = forwardRef<HTMLDivElement>((props, ref) => {
  const [currentCareer, setCurrentCareer] = useState(0);
  const isEng = useRecoilValue(languageState);

  const changeCurrent = (index: number) => {
    setCurrentCareer(index);
  };

  return (
    <Wrapper ref={ref}>
      <Title>
        <span>C</span>areer & <span>E</span>xperience
      </Title>

      <CareerBox>
        <CareerTitle>Haechi Labs</CareerTitle>
        <CareerSubtitle>
          {isEng
            ? "Smart Contract Security Audit & Development"
            : "스마트 컨트랙트 개발 및 보안감사"}
        </CareerSubtitle>
        <CareerDuration>Nov 2020 - Dec 2021</CareerDuration>

        {isEng ? (
          <CareerDescription>
            Through more than 50 security audits, I have reviewed smart contract code, identified
            security vulnerabilities, and provided recommended solutions to enhance platform safety.
            Utilizing Solidity, I have designed and implemented secure and efficient smart contracts
            for areas such as Defi, NFT, Dapp, ERC20. I have contributed to developing solutions to
            address security threats by researching security issues across various domains,
            including the blockchain and smart contract ecosystem.
          </CareerDescription>
        ) : (
          <CareerDescription>
            50회 이상의 security audit을 통해 스마트 컨트랙트의 코드를 검토하여 보안 취약성을
            식별하고, 이를 해결하기 위한 권장 사항을 제공하여 플랫폼의 안전성을 향상시켰습니다.
            Solidity를 활용하여 Defi, NFT, Dapp, ERC20 등 안전하고 효율적인 스마트 컨트랙트를
            설계하고 구현하였습니다. 블록체인과 스마트 컨트랙트 생태계를 포함하여 다양한 분야에
            발생하는 보안 문제에 대한 연구를 통해 보안 위협에 대응하는 솔루션을 개발하는데
            기여하였습니다.
          </CareerDescription>
        )}
      </CareerBox>
      <CareerBox>
        <CareerTitle> {isEng ? "Seoul National University" : "서울대학교"}</CareerTitle>
        <CareerSubtitle>
          {isEng ? "Bachelor's degree - Electrical and Computer Engineering" : "전기정보공학 학사"}
        </CareerSubtitle>
        <CareerDuration>Mar 2015 - Feb 2021</CareerDuration>

        {isEng ? (
          <CareerDescription>
            I specialized in software engineering while majoring in Electrical and Computer
            Engineering at Seoul National University. In addition to traditional electrical,
            electronic, and information technologies, I acquired knowledge in software development.
            I learned various programming languages such as C, C++, Java, Python, and Javascript. I
            also studied foundational concepts in software engineering, including data structures,
            algorithms, computer architecture, and networks. Furthermore, I explored modern software
            technologies such as blockchain, machine learning, and data communication, enabling me
            to integrate diverse software skills effectively.
          </CareerDescription>
        ) : (
          <CareerDescription>
            서울대학교 전기정보 공학 중 소프트웨어 공학을 세부전공하여 전통적인 전기, 전자 및 정보
            기술에 더해 소프트웨어 개발과 관련된 지식을 쌓았습니다. C, C++, Java, Python, Javascript
            등 다양한 프로그래밍 언어와 더불어 자료구조, 알고리즘, 컴퓨터 구조, 네트워크 등
            소프트웨어 공학의 기초를 학습하였습니다. 또한 블록체인, 머신러닝, 데이터 통신 등
            현대적인 소프트웨어 기술을 학습하여 다양한 소프트웨어 기술을 통합적으로 활용할 수
            있습니다.
          </CareerDescription>
        )}
      </CareerBox>
    </Wrapper>
  );
});

export default Career;

const Wrapper = styled.div`
  width: 100%;
  color: ${(props) => props.theme.word.main};
  padding-top: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const CareerBox = styled.div`
  width: 30vw;
  margin-bottom: 40px;
`;

const CareerTitle = styled.h2`
  font-size: 18px;
  font-weight: 400;
  word-break: normal;
`;

const CareerSubtitle = styled.h2`
  font-size: 16px;
  font-weight: 400;
  color: gray;
`;

const CareerDuration = styled.h2`
  font-size: 14px;
  font-weight: 300;
  color: gray;
  margin-bottom: 20px;
`;

const CareerDescription = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 2;
`;
