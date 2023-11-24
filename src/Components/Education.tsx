import styled from "styled-components";
import Header from "./Header";

const Education = () => {
  return (
    <Wrapper>
      <Header title="Education & Skills  " subTitle="LEARNING PATH" />
      <Main>
        <EducationColumn>
          <Feature>
            <Circle />
          </Feature>
          <EducationInfo>
            <EducationTitle>Seoul National University</EducationTitle>
            <EducationSubTitle>
              Bachelor's degree - Electrical and Computer Engineering
            </EducationSubTitle>
            <EducationYear>2015 - 2021</EducationYear>
          </EducationInfo>
        </EducationColumn>
        <SkillColumn>
          <SkillDescription>
            I have been continuously learning in the field of front-end
            development. Building upon a solid understanding of core languages
            and frameworks, I possess versatile application skills.
            Additionally, I actively accumulate knowledge in various domains
            beyond front-end development.
          </SkillDescription>
          <SkillGraph>
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
          </SkillGraph>
        </SkillColumn>
      </Main>
    </Wrapper>
  );
};

export default Education;

const Wrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.bg.point};
  padding: 8%;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  padding: 8% 0;
  padding-bottom: 0;
  display: flex;
`;

const EducationColumn = styled.div`
  color: ${(props) => props.theme.word.main};
  display: flex;
  width: 40%;
`;

const EducationTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: 12px;
`;

const EducationSubTitle = styled.h2`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 32px;
  color: ${(props) => props.theme.word.sub};
`;

const EducationYear = styled.h2`
  font-size: 1rem;
  font-weight: 500;
`;

const EducationInfo = styled.div``;

const Feature = styled.div`
  margin-right: 32px;
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
`;

const SkillDescription = styled.h2`
  color: ${(props) => props.theme.word.sub};
  font-size: 1.125rem;
  line-height: 2;
  font-weight: 400;
`;

const SkillGraph = styled.div`
  margin: 90px 0;
`;

const SkillRow = styled.div`
  color: ${(props) => props.theme.word.main};
  margin-bottom: 50px;
`;

const SkillName = styled.h2`
  font-size: 1.125rem;
  font-weight: 400;
  margin: 20px 0;
`;

const SkillBar = styled.div`
  height: 10px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.bg.point};
  position: relative;
  width: 95%;
`;

const SkillFill = styled.div<{ width: string }>`
  height: 10px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.main.accent};
  position: absolute;
  top: 0;
  width: ${(props) => props.width};
`;

const cursorVar = {};
