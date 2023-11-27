import styled from "styled-components";
import Header from "./Header";
import { useState } from "react";
import careerData from "../careerData.json";

const Career = () => {
  let [currentCareer, setCurrentCareer] = useState(0);

  const changeCurrent = (index: number) => {
    setCurrentCareer(index);
  };

  return (
    <Wrapper>
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
              {careerData[currentCareer].subTitle[0]} <CareerName>{careerData[currentCareer].subTitle[1]}</CareerName>
            </CareerTitle>
            <CareerAddress>{careerData[currentCareer].address}</CareerAddress>
            <CareerDuration>{careerData[currentCareer].duration}</CareerDuration>
            <CareerSkills>
              {careerData[currentCareer].skills.map((skill) => (
                <CareerSkill>{skill}</CareerSkill>
              ))}
            </CareerSkills>
            <Divider />
            <CareerDescriptions>
              {careerData[currentCareer].descriptions.map((description) => (
                <CareerDescription>
                  <Bar />
                  {description}
                </CareerDescription>
              ))}
            </CareerDescriptions>
          </CareerBox>
        </CareerColumn>
      </Main>
    </Wrapper>
  );
};

export default Career;

const Wrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.bg.blur};
  padding: 8%;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.word.main};
`;

const Main = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const SelectMenu = styled.div`
  width: 400px;
  margin-right: 200px;
  margin-top: 120px;
`;

const SelectItem = styled.div<{ isCurrent: boolean }>`
  padding: 25px 40px;
  background-color: ${(props) => (props.isCurrent ? props.theme.bg.normal : "transparent")};
  color: ${(props) => props.isCurrent && props.theme.word.accent};
`;

const SelectTitle = styled.h2`
  font-size: 18px;
  font-weight: 400;
`;

const SelectIcon = styled.h2``;

const CareerBox = styled.div`
  color: ${(props) => props.theme.word.main};
`;

const CareerTitle = styled.h2`
  font-size: 21px;
  font-weight: 400;
  margin-bottom: 15px;
`;

const CareerName = styled.span`
  font-size: 21px;
  font-weight: 400;
  margin-left: 5px;
  text-decoration: underline;
`;

const CareerAddress = styled.h2`
  font-size: 16px;
  color: ${(props) => props.theme.word.sub};
  margin-bottom: 25px;
`;

const CareerDuration = styled.h2`
  font-size: 16px;
  margin-bottom: 25px;
  font-weight: 400;
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
  border: 1px solid #f1f1f1;
  color: ${(props) => props.theme.word.sub};
  font-weight: 400;
`;

const Divider = styled.div`
  width: 100%;
  background-color: #f1f1f1;
  height: 2px;
  margin-bottom: 40px;
`;

const CareerDescription = styled.h2`
  margin-bottom: 20px;
  font-size: 16px;
  display: flex;
  align-items: center;
`;

const CareerDescriptions = styled.div``;

const CareerColumn = styled.div`
  padding: 3% 0;
  width: 100%;
`;

const Bar = styled.div`
  background-color: lightgray;
  width: 10px;
  height: 2px;
  border-radius: 2px;
  margin-right: 20px;
`;

const SelectColumn = styled.div``;

const cursorVar = {};
