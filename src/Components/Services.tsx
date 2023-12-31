import styled from "styled-components";
import { forwardRef } from "react";
import { useRecoilValue } from "recoil";
import { languageState } from "../atoms";
import ToggleBox from "./ToggleBox";

const Services = forwardRef<HTMLDivElement>((props, ref) => {
  const isEng = useRecoilValue(languageState);

  return (
    <Wrapper ref={ref}>
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
          <ToggleBox title={0} />
          <ToggleBox title={1} />
          <ToggleBox title={2} />
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
  padding-top: 50px;
  background-color: black;
  padding-bottom: 200px;

  @media (max-width: 1080px) {
    padding-bottom: 150px;
  }
  @media (max-width: 745px) {
    padding-bottom: 100px;
  }
`;

const Main = styled.div`
  width: 1440px;
  border-bottom: 1px solid white;
  @media (max-width: 1500px) {
    width: 100%;
    padding: 0 30px;
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
