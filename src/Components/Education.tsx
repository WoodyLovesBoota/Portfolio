import styled from "styled-components";
import Header from "./Header";

const Education = () => {
  const projectArr = [];
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
        </SkillColumn>
      </Main>
    </Wrapper>
  );
};

export default Education;

const Wrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.bg.normal};
  padding: 8%;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  padding: 8% 0;
  display: flex;
`;

const EducationColumn = styled.div`
  color: ${(props) => props.theme.word.main};
  display: flex;
  width: 40%;
`;

const EducationTitle = styled.h2`
  font-size: 21px;
  font-weight: 400;
  margin-bottom: 12px;
`;

const EducationSubTitle = styled.h2`
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 32px;
  color: ${(props) => props.theme.word.sub};
`;

const EducationYear = styled.h2`
  font-size: 18px;
  font-weight: 400;
`;

const EducationInfo = styled.div``;

const Feature = styled.div`
  margin-right: 32px;
`;

const Circle = styled.div`
  background-color: ${(props) => props.theme.word.darker};
  width: 21px;
  height: 21px;
  border-radius: 11px;
`;

const SkillColumn = styled.div`
  width: 60%;
  padding: 0 6%;
`;

const SkillDescription = styled.h2`
  color: ${(props) => props.theme.word.sub};
  font-size: 21px;
  line-height: 2;
  font-weight: 300;
`;

const AchieveContentBox = styled.div``;

const AchieveContent = styled.h2``;

const cursorVar = {};
