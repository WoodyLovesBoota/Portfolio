import styled from "styled-components";
import Header from "./Header";
import { forwardRef } from "react";
import { useRecoilValue } from "recoil";
import { languageState } from "../atoms";

const Education = forwardRef<HTMLDivElement>((props, ref) => {
  const isEng = useRecoilValue(languageState);

  return (
    <Wrapper ref={ref}>
      {/* <Header title="Education & Skills  " subTitle="LEARNING PATH" isCenter={false} /> */}
      <Main>
        <Title>Education & Skill</Title>

        <Column>
          <Item>
            {isEng ? (
              <Info>
                <ContentTitle>
                  <Circle />
                  Education
                </ContentTitle>
                <SubTitle>Seoul National University</SubTitle>
                <Description>Bachelor's degree - Electrical and Computer Engineering</Description>
                <Year>2015 - 2021</Year>
              </Info>
            ) : (
              <Info>
                <ContentTitle>
                  <Circle />
                  Education
                </ContentTitle>
                <SubTitle>서울대학교</SubTitle>
                <Description>전기정보공학부 학사</Description>
                <Year>2015 - 2021</Year>
              </Info>
            )}
          </Item>
          <Item>
            <Info>
              <ContentTitle>
                <Circle />
                Skills
              </ContentTitle>
              <Description>React</Description>
              <Description>Typescript / Javascirpt</Description>
              <Description>Solidity</Description>
            </Info>
          </Item>
        </Column>
        <Column>
          <Item>
            <Info>
              <ContentTitle>
                <Circle />
                Certificate
              </ContentTitle>
              <SubTitle>{isEng ? "Engineer Information Processing" : "정보처리기사"}</SubTitle>
              <Description>
                {isEng ? "Engineer Information Processing" : "정보처리기사"}
              </Description>
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
  padding-left: 200px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 500;
  padding-left: 80px;
  margin-bottom: 80px;
  /* border-left: 3px solid black; */
  display: flex;
  align-items: center;
  padding-bottom: 40px;
  border-bottom: 1px solid #e74946;
`;

const Main = styled.div`
  padding: 125px 0;
  padding-top: 225px;
  border-left: 0.5px solid gray;
`;

const Column = styled.div`
  color: ${(props) => props.theme.word.main};
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 80px;
  padding-left: 80px;
`;

const ContentTitle = styled.h2`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 20px;
  word-break: normal;
  display: flex;
  align-items: center;
`;

const Circle = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 100px;
  background-color: black;
  margin-right: 15px;
`;

const SubTitle = styled.h2`
  font-size: 21px;
  font-weight: 400;
  color: ${(props) => props.theme.word.main};
  word-break: normal;
  margin-bottom: 20px;
`;

const Description = styled.h2`
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => props.theme.word.sub};
  word-break: normal;
  margin-bottom: 10px;
`;

const Year = styled.h2`
  font-size: 14px;
  font-weight: 400;
`;

const Info = styled.div``;
