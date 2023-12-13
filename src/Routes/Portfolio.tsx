import styled from "styled-components";
import { PathMatch, useMatch, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import projectData from "../projectData.json";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown, faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useRecoilValue } from "recoil";
import { languageState } from "../atoms";

const Portfolio = () => {
  const navigate = useNavigate();
  const isEng = useRecoilValue(languageState);

  const colors = ["red", "purple", "green", "gray", "yellow", "blue", "orange"];
  const projectMatch: PathMatch<string> | null = useMatch("/project/:title/:num");

  const handleGoBackClicked = () => {
    navigate("/");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      {projectMatch && (
        <Wrapper bgColor={colors[Number(projectMatch.params.num)]}>
          <Header>
            <Title>
              {projectMatch.params.title}
              <Skills>
                {projectData[Number(projectMatch.params.num)].skill.map((skill) => (
                  <SkillCircle>{skill}</SkillCircle>
                ))}
              </Skills>
            </Title>
            <SubTitle>
              {projectData[Number(projectMatch.params.num)].subtitle.split("/").map((e) => (
                <Row>{e}</Row>
              ))}
            </SubTitle>
            <Photos>
              {projectData[Number(projectMatch.params.num)].image.map((e) => (
                <SmallPhoto bgPhoto={e} />
              ))}
            </Photos>
            {isEng ? (
              <Description>{projectData[Number(projectMatch.params.num)].detailDesc}</Description>
            ) : (
              <Description>{projectData[Number(projectMatch.params.num)].detailDescKor}</Description>
            )}
          </Header>
          <Buttons>
            <Button
              href={projectData[Number(projectMatch.params.num)].demo}
              target="_blank"
              color={colors[Number(projectMatch.params.num)]}
            >
              DEMO
              <Icon>
                <FontAwesomeIcon icon={faRightLong} />
              </Icon>
            </Button>
            <Button
              href={projectData[Number(projectMatch.params.num)].gibhub}
              target="_blank"
              color={colors[Number(projectMatch.params.num)]}
            >
              CODE
              <Icon>
                <FontAwesomeIcon icon={faRightLong} />
              </Icon>
            </Button>
            <Button onClick={handleGoBackClicked} target="_blank" color={colors[Number(projectMatch.params.num)]}>
              GO BACK
              <Icon>
                <FontAwesomeIcon icon={faRightLong} />
              </Icon>
            </Button>
          </Buttons>
        </Wrapper>
      )}
    </Container>
  );
};

export default Portfolio;

const Wrapper = styled.div<{ bgColor: string }>`
  width: 100%;
  background-color: ${(props) => {
    return props.theme[props.bgColor].accent;
  }};
  color: white;
  min-height: 100vh;
`;

const Container = styled.div`
  width: 100vw;
`;

const Header = styled.div`
  padding: 72px 16px;
  width: 100%;
`;

const Photos = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 8px;
  width: 100%;
  margin-bottom: 100px;
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const SmallPhoto = styled(motion.div)<{ bgPhoto: string }>`
  background-image: url(${(props) => props.bgPhoto});
  background-position: top center;
  background-size: cover;
  width: 100%;
  height: 28vw;
  cursor: pointer;
  @media (max-width: 800px) {
    height: 56vw;
  }
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 400;
  margin-top: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  color: #141414;
`;

const SubTitle = styled.div`
  margin-bottom: 100px;
`;

const Row = styled.h2`
  font-size: 3rem;
  font-weight: 400;
  width: 100%;
  @media (max-width: 800px) {
    width: inherit;
    display: inline;
    word-break: normal;
  }
  color: white;
`;

const Description = styled.h2`
  font-size: 21px;
  font-weight: 400;
  line-height: 2;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 50px;
  @media (max-width: 1000px) {
    font-size: 16px;
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const Skills = styled.h2`
  display: flex;
  align-items: center;
  margin-left: 20px;
  @media (max-width: 800px) {
    display: none;
  }
`;

const SkillCircle = styled.div`
  font-size: 14px;
  border-radius: 0.375rem;
  padding: 0.25rem 0.75rem;
  margin-right: 0.625rem;
  border: 0.125rem solid black;
  font-weight: 500;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding-bottom: 100px;
`;

const Button = styled.a<{ color: string }>`
  color: white;
  border-top: 1px solid white;
  padding: 10px 40px;
  font-weight: 400;
  font-size: 3rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:last-child {
    border-bottom: 1px solid white;
  }
`;

const Icon = styled.h2`
  margin-left: auto;
  font-size: 2rem;
`;
