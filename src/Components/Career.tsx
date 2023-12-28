import styled from "styled-components";
import Header from "./Header";
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
      <VerHalf />

      <Half />
      {/* <Header title="Work Experiences" subTitle="CAREER PATH" isCenter={false} /> */}
      <Container>
        <Main>
          <Title>Career</Title>
          {/* <SelectColumn>
            <SelectMenu>
              {careerData.map((career, index) => (
                <SelectItem
                  onClick={() => {
                    changeCurrent(index);
                  }}
                  isCurrent={currentCareer === index ? true : false}
                >
                  <SelectTitle> </SelectTitle>
                  <SelectIcon></SelectIcon>
                </SelectItem>
              ))}
            </SelectMenu>
          </SelectColumn> */}
          <CareerColumn>
            <CareerBox>
              <CareerTitle>
                {isEng
                  ? careerData[currentCareer].subTitle[0]
                  : careerData[currentCareer].subTitleKor[0]}{" "}
                in {careerData[currentCareer].title}
              </CareerTitle>
              {/* <CareerAddress>
                {isEng ? careerData[currentCareer].address : careerData[currentCareer].addressKor}
              </CareerAddress> */}
              <CareerDuration>{careerData[currentCareer].duration}</CareerDuration>
              <CareerSkills>
                {careerData[currentCareer].skills.map((skill) => (
                  <CareerSkill>{skill}</CareerSkill>
                ))}
              </CareerSkills>
              {/* <Divider /> */}
              <CareerDescriptions>
                {isEng
                  ? careerData[currentCareer].descriptions.map((description) => (
                      <CareerDescription>
                        <Bar />
                        <Contents>{description}</Contents>
                      </CareerDescription>
                    ))
                  : careerData[currentCareer].descriptionsKor.map((description) => (
                      <CareerDescription>
                        <Bar />
                        <Contents>{description}</Contents>
                      </CareerDescription>
                    ))}
              </CareerDescriptions>
            </CareerBox>
          </CareerColumn>
        </Main>
      </Container>
    </Wrapper>
  );
});

export default Career;

const Wrapper = styled.div`
  width: 100%;
  color: ${(props) => props.theme.word.main};
`;

const Half = styled.div`
  width: 50%;
  height: 0;
  border-top: 0.5px solid gray;
`;

const VerHalf = styled.div`
  width: 50%;
  height: 600px;
  border-right: 0.5px solid gray;
`;

const Container = styled.div`
  padding-left: 200px;
  border-left: 0.5px solid gray;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 500;
  padding-left: 80px;
  padding-top: 200px;
  display: flex;
  align-items: center;
  margin-bottom: 80px;
  padding-bottom: 40px;
  border-bottom: 1px solid #e74946;
`;

const Main = styled.div`
  border-left: 0.5px solid gray;
  padding-top: 100px;
  padding-bottom: 200px;
`;

const CareerBox = styled.div`
  color: ${(props) => props.theme.word.main};
  padding: 0 80px;
  width: 100%;
`;

const CareerTitle = styled.h2`
  font-size: 21px;
  font-weight: 400;
  margin-bottom: 40px;
  word-break: normal;
`;

const CareerDuration = styled.h2`
  font-size: 14px;
  margin-bottom: 40px;
  font-weight: 400;
  color: gray;
`;

const CareerDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 20px;
`;

const CareerDescriptions = styled.div`
  width: 100%;
`;

const Contents = styled.h2`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.7;
  color: ${(props) => props.theme.word.sub};
`;

const CareerColumn = styled.div``;

const Bar = styled.div`
  background-color: ${(props) => props.theme.word.sub};
  width: 5px;
  height: 5px;
  border-radius: 100px;
  margin-right: 15px;
`;

const CareerSkills = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

const CareerSkill = styled.div`
  font-size: 12px;
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 10px;
  border: 1px solid gray;
  color: ${(props) => props.theme.word.sub};
  font-weight: 500;
`;
