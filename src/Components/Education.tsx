import styled from "styled-components";
import Header from "./Header";
import { forwardRef } from "react";
import { useRecoilValue } from "recoil";
import { languageState } from "../atoms";

const Education = forwardRef<HTMLDivElement>((props, ref) => {
  const isEng = useRecoilValue(languageState);

  return (
    <Wrapper ref={ref}>
      <Header title="Education & Skills  " subTitle="LEARNING PATH" isCenter={false} />
      <Main>
        <Column>
          <Item>
            {isEng ? (
              <Info>
                <Title>Education</Title>
                <Title>Seoul National University</Title>
                <SubTitle>Bachelor's degree - Electrical and Computer Engineering</SubTitle>
                <Year>2015 - 2021</Year>
              </Info>
            ) : (
              <Info>
                <Title>Education</Title>
                <Title>서울대학교</Title>
                <SubTitle>전기정보공학부 학사</SubTitle>
                <Year>2015 - 2021</Year>
              </Info>
            )}
          </Item>
          <Item>
            <Info>
              <Title>Skills</Title>
              <SubTitle>React</SubTitle>
              <SubTitle>Typescript / Javascirpt</SubTitle>
              <SubTitle>Solidity</SubTitle>
            </Info>
          </Item>
        </Column>
        <Column>
          <Item>
            <Info>
              <Title>Certificate</Title>
              <Title>{isEng ? "Engineer Information Processing" : "정보처리기사"}</Title>
              <SubTitle>{isEng ? "Engineer Information Processing" : "정보처리기사"}</SubTitle>
              <Year>2021.08</Year>
            </Info>
          </Item>
        </Column>
      </Main>
    </Wrapper>
  );
});

export default Education;

const Wrapper = styled.div`
  width: 100%;
  padding: 72px;
  padding-top: 144px;
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    padding: 48px 16px;
  }
`;

const Main = styled.div`
  padding: 72px 0;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: flex-start;
  }
  @media (max-width: 800px) {
    padding: 45px 0;
  }
`;

const Column = styled.div`
  color: ${(props) => props.theme.word.main};
  width: 48%;
  display: flex;
  flex-direction: column;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 70px;
  padding: 50px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.bg.lighter};
  box-shadow: 0px 0px 64px 0 ${(props) => props.theme.bg.blur};
  @media (max-width: 1200px) {
    margin-bottom: 20px;
  }
  @media (max-width: 1200px) {
    padding: 32px;
  }
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
  word-break: normal;
`;

const SubTitle = styled.h2`
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme.word.sub};
  word-break: normal;
  margin-bottom: 10px;
`;

const Year = styled.h2`
  font-size: 16px;
  font-weight: 500;
  margin-top: 20px;
`;

const Info = styled.div``;
