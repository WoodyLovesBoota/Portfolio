import styled from "styled-components";
import Header from "./Header";
import { forwardRef } from "react";

const Education = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <Wrapper ref={ref}>
      <Header title="Education & Skills  " subTitle="LEARNING PATH" isCenter={false} />
      <Main>
        <EducationColumn>
          <EducationItem>
            <EducationInfo>
              <EducationTitle>Seoul National University</EducationTitle>
              <EducationSubTitle>Bachelor's degree - Electrical and Computer Engineering</EducationSubTitle>
              <EducationYear>2015 - 2021</EducationYear>
            </EducationInfo>
          </EducationItem>
          <EducationItem>
            <EducationInfo>
              <EducationTitle>Certificate</EducationTitle>
              <EducationTitle>정보처리기사</EducationTitle>
              <EducationYear>2021.08</EducationYear>
            </EducationInfo>
          </EducationItem>
        </EducationColumn>
        <SkillColumn>
          <SkillDescription>
            I have been continuously learning in the field of front-end development. Building upon a solid understanding
            of core languages and frameworks, I possess versatile application skills. Additionally, I actively
            accumulate knowledge in various domains beyond front-end development.
          </SkillDescription>
          <SkillGraph>
            <SkillRow>
              <SkillName>React</SkillName>
              <SkillBar>
                <SkillFill width="75%" />
              </SkillBar>
            </SkillRow>
            <SkillRow>
              <SkillName>Typescript / Javascirpt</SkillName>
              <SkillBar>
                <SkillFill width="60%" />
              </SkillBar>
            </SkillRow>
            <SkillRow>
              <SkillName>Solidity</SkillName>
              <SkillBar>
                <SkillFill width="70%" />
              </SkillBar>
            </SkillRow>
          </SkillGraph>
        </SkillColumn>
      </Main>
    </Wrapper>
  );
});

export default Education;

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
  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

const EducationColumn = styled.div`
  color: ${(props) => props.theme.word.main};
  width: 40%;
  display: flex;
  flex-direction: column;
  @media (max-width: 850px) {
    width: 100%;
  }
`;

const EducationItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 4.375rem;
  padding: 3.125rem;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0px 0px 64px 0 rgba(65, 65, 65, 0.2);
`;

const EducationTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: 0.75rem;
`;

const EducationSubTitle = styled.h2`
  font-size: 1rem;
  font-weight: 400;
  color: ${(props) => props.theme.word.sub};
`;

const EducationYear = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  margin-top: 2rem;
`;

const EducationInfo = styled.div``;

const Feature = styled.div`
  margin-right: 32px;
  display: flex;
  align-items: center;
`;

const Circle = styled.div`
  background-color: ${(props) => props.theme.word.darker};
  width: 1.125rem;
  height: 1.125rem;
  border-radius: 0.6875rem;
`;

const SkillColumn = styled.div`
  width: 60%;
  padding: 0 6%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 850px) {
    width: 100%;
    padding: 0;
  }
`;

const SkillDescription = styled.h2`
  color: ${(props) => props.theme.word.sub};
  font-size: 1.0625rem;
  line-height: 2;
  font-weight: 400;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0px 0px 64px 0 rgba(65, 65, 65, 0.2);
  padding: 50px;
  border-radius: 15px;
`;

const SkillGraph = styled.div`
  margin-top: 70px;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0px 0px 64px 0 rgba(65, 65, 65, 0.2);
  padding: 50px;
  border-radius: 15px;
`;

const SkillRow = styled.div`
  color: ${(props) => props.theme.word.main};
  margin-bottom: 3.125rem;
`;

const SkillName = styled.h2`
  font-size: 1.125rem;
  font-weight: 400;
  margin: 1.25rem 0;
`;

const SkillBar = styled.div`
  height: 0.625rem;
  border-radius: 4px;
  background-color: ${(props) => props.theme.bg.point};
  position: relative;
  width: 95%;
`;

const SkillFill = styled.div<{ width: string }>`
  height: 0.625rem;
  border-radius: 4px;
  background-color: ${(props) => props.theme.main.accent};
  position: absolute;
  top: 0;
  width: ${(props) => props.width};
`;

const cursorVar = {};
