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
      <Main>
        <SelectColumn>
          <Header title="Work Experiences" subTitle="CAREER PATH" isCenter={false} />
          <SelectMenu>
            {careerData.map((career, index) => (
              <SelectItem
                onClick={() => {
                  changeCurrent(index);
                }}
                isCurrent={currentCareer === index ? true : false}
              >
                <SelectTitle>{career.title}</SelectTitle>
                <SelectIcon></SelectIcon>
              </SelectItem>
            ))}
          </SelectMenu>
        </SelectColumn>
        <CareerColumn>
          <CareerBox>
            <CareerTitle>
              {isEng ? careerData[currentCareer].subTitle[0] : careerData[currentCareer].subTitleKor[0]}
              <CareerName>{careerData[currentCareer].subTitle[1]}</CareerName>
            </CareerTitle>
            <CareerAddress>
              {isEng ? careerData[currentCareer].address : careerData[currentCareer].addressKor}
            </CareerAddress>
            <CareerDuration>{careerData[currentCareer].duration}</CareerDuration>
            <CareerSkills>
              {careerData[currentCareer].skills.map((skill) => (
                <CareerSkill>{skill}</CareerSkill>
              ))}
            </CareerSkills>
            <Divider />
            <CareerDescriptions>
              {isEng
                ? careerData[currentCareer].descriptions.map((description) => (
                    <CareerDescription>
                      <Bar />
                      <p>{description}</p>
                    </CareerDescription>
                  ))
                : careerData[currentCareer].descriptionsKor.map((description) => (
                    <CareerDescription>
                      <Bar />
                      <p>{description}</p>
                    </CareerDescription>
                  ))}
            </CareerDescriptions>
          </CareerBox>
        </CareerColumn>
      </Main>
    </Wrapper>
  );
});

export default Career;

const Wrapper = styled.div`
  width: 100%;
  padding: 8%;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.word.main};
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const SelectMenu = styled.div`
  width: 400px;
  margin-right: 20px;
  margin-top: 120px;
  @media (max-width: 1200px) {
    display: flex;
    width: 100%;
    margin-bottom: 20px;
    margin-top: 50px;
  }
`;

const SelectItem = styled.div<{ isCurrent: boolean }>`
  padding: 1.5625rem 2.5rem;
  margin-right: 10px;
  border-radius: 5px;
  background-color: ${(props) => (props.isCurrent ? props.theme.bg.lighter : "transparent")};
  color: ${(props) => props.isCurrent && props.theme.word.accent};
  box-shadow: ${(props) => props.isCurrent && `0px 0px 64px 0 ${props.theme.bg.blur}`};
  cursor: pointer;
  transition: {
    background-color: 0.5s ease-in-out;
  }
`;

const SelectTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 400;
`;

const SelectIcon = styled.h2``;

const CareerBox = styled.div`
  color: ${(props) => props.theme.word.main};
  background-color: ${(props) => props.theme.bg.lighter};
  box-shadow: 0px 0px 64px 0 ${(props) => props.theme.bg.blur};
  padding: 3.125rem;
  border-radius: 15px;
  width: 100%;
`;

const CareerTitle = styled.h2`
  font-size: 21px;
  font-weight: 400;
  margin-bottom: 15px;
  @media (max-width: 1200px) {
    font-size: 18px;
  }
`;

const CareerName = styled.span`
  font-size: 21px;
  font-weight: 400;
  margin-left: 5px;
  text-decoration: underline;
  @media (max-width: 1200px) {
    font-size: 18px;
  }
  @media (max-width: 800px) {
    display: block;
    width: 100%;
    margin-left: 0;
  }
`;

const CareerAddress = styled.h2`
  font-size: 16px;
  color: ${(props) => props.theme.word.sub};
  margin-bottom: 1.5625rem;
`;

const CareerDuration = styled.h2`
  font-size: 16px;
  margin-bottom: 1.5625rem;
  font-weight: 400;
`;

const CareerSkills = styled.div`
  display: flex;
  margin-bottom: 2.5rem;
`;

const CareerSkill = styled.div`
  font-size: 12px;
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 10px;
  border: 1px solid gray;
  color: ${(props) => props.theme.word.sub};
  font-weight: 400;
`;

const Divider = styled.div`
  width: 100%;
  background-color: #f1f1f1;
  height: 2px;
  margin-bottom: 2.5rem;
`;

const CareerDescription = styled.div`
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  p {
    width: 90%;
    margin-left: 20px;
    font-size: 16px;
  }
`;

const CareerDescriptions = styled.div`
  width: 100%;
`;

const CareerColumn = styled.div`
  width: 1000px;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const Bar = styled.div`
  background-color: ${(props) => props.theme.word.sub};
  width: 0.625rem;
  height: 0.125rem;
  border-radius: 2px;
`;

const SelectColumn = styled.div``;
