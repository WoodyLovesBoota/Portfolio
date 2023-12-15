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
        <EducationColumn>
          <EducationItem>
            {isEng ? (
              <EducationInfo>
                <EducationTitle>Seoul National University</EducationTitle>
                <EducationSubTitle>Bachelor's degree - Electrical and Computer Engineering</EducationSubTitle>
                <EducationYear>2015 - 2021</EducationYear>
              </EducationInfo>
            ) : (
              <EducationInfo>
                <EducationTitle>서울대학교</EducationTitle>
                <EducationSubTitle>전기정보공학부 학사</EducationSubTitle>
                <EducationYear>2015 - 2021</EducationYear>
              </EducationInfo>
            )}
          </EducationItem>
          <EducationItem>
            <EducationInfo>
              <EducationTitle>Certificate</EducationTitle>
              <EducationTitle>{isEng ? "Engineer Information Processing" : "정보처리기사"}</EducationTitle>
              <EducationYear>2021.08</EducationYear>
            </EducationInfo>
          </EducationItem>
        </EducationColumn>
        <SkillColumn>
          <SkillDescription>
            {isEng
              ? "I have been continuously learning in the field of front-end development. Building upon a solid understanding of core languages and frameworks, I possess versatile application skills. Additionally, I actively accumulate knowledge in various domains beyond front-end development."
              : "저는 지속적으로 프론트 엔드 개발 분야에 대한 학습을 이어가고 있습니다. 기본 언어와 프레임워크에 대한 철저한 이해를 바탕으로 다양한 응용 능력을 갖추고 있으며, 더불어 프론트 엔드 이외의 다양한 영역에 대한 지식도 적극적으로 쌓아가고 있습니다."}
          </SkillDescription>
        </SkillColumn>
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
  @media (max-width: 1200px) {
    flex-direction: column;
  }
  @media (max-width: 800px) {
    padding: 45px 0;
  }
`;

const EducationColumn = styled.div`
  color: ${(props) => props.theme.word.main};
  width: 40%;
  display: flex;
  flex-direction: column;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const EducationItem = styled.div`
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

const EducationTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 12px;
  word-break: normal;
`;

const EducationSubTitle = styled.h2`
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme.word.sub};
  word-break: normal;
`;

const EducationYear = styled.h2`
  font-size: 16px;
  font-weight: 500;
  margin-top: 32px;
`;

const EducationInfo = styled.div``;

const SkillColumn = styled.div`
  width: 60%;
  padding: 0 36px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1200px) {
    width: 100%;
    padding: 0;
  }
`;

const SkillDescription = styled.h2`
  color: ${(props) => props.theme.word.sub};
  font-size: 16px;
  line-height: 2;
  font-weight: 400;
  background-color: ${(props) => props.theme.bg.lighter};
  box-shadow: 0px 0px 64px 0 ${(props) => props.theme.bg.blur};
  padding: 50px;
  border-radius: 15px;
  @media (max-width: 800px) {
    padding: 32px;
  }
`;

const SkillGraph = styled.div`
  margin-top: 70px;
  background-color: ${(props) => props.theme.bg.lighter};
  box-shadow: 0px 0px 64px 0 ${(props) => props.theme.bg.blur};
  padding: 50px;
  border-radius: 15px;
  @media (max-width: 1200px) {
    margin-top: 20px;
  }
  @media (max-width: 800px) {
    padding: 32px;
  }
`;

const SkillRow = styled.div`
  color: ${(props) => props.theme.word.main};
  margin-bottom: 50px;
  @media (max-width: 800px) {
    margin-bottom: 30px;
  }
`;

const SkillName = styled.h2`
  font-size: 18px;
  font-weight: 400;
  margin: 20px 0;

  @media (max-width: 800px) {
    margin: 10px 0;
  }
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
