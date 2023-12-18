import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { languageState, screenState } from "../atoms";
import projectData from "../projectData.json";

import { ReactComponent as Arrow } from "../assets/arrow.svg";

const ProjectCard = ({ project, color }: IProjectProps) => {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);
  const isEng = useRecoilValue(languageState);
  const [screen, setScreen] = useRecoilState(screenState);

  const colors = ["red", "purple", "green", "gray", "yellow", "blue", "orange"];

  const handleHoverStart = () => {
    setIsHover(true);
  };

  const handleHoverEnd = () => {
    setIsHover(false);
  };

  return (
    <Wrapper
      color={colors[color]}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      href={projectData[Number(color)].demo}
      target="_blank"
    >
      <AnimatePresence mode="wait">
        {isEng ? (
          isHover && screen !== 0 ? (
            <CardDescription
              key={project.projectName}
              variants={descVar}
              initial={"initial"}
              animate={"animate"}
              exit={"exit"}
            >
              <CardDesc>{project.cardDesc}</CardDesc>
              <Icon>
                <Arrow width={"30"} />
              </Icon>
            </CardDescription>
          ) : (
            <Container key={project.image[0]} variants={mainVar} initial={"initial"} animate={"animate"} exit={"exit"}>
              <Info>
                <InfoTitle>{project.projectName}</InfoTitle>
                <InfoContent>
                  <InfoSkill>
                    {project.skill.map((skill) => (
                      <SkillCircle>{skill}</SkillCircle>
                    ))}
                  </InfoSkill>
                  <InfoDesc>{project.infoDesc}</InfoDesc>
                </InfoContent>
                {screen === 0 && (
                  <IconRight>
                    <Arrow width={"30"} />
                  </IconRight>
                )}
              </Info>
            </Container>
          )
        ) : isHover && screen !== 0 ? (
          <CardDescription
            key={project.projectName}
            variants={descVar}
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
          >
            <CardDesc>{project.cardDescKor}</CardDesc>
            <Icon>
              <Arrow width={"30"} />
            </Icon>
          </CardDescription>
        ) : (
          <Container key={project.image[0]} variants={mainVar} initial={"initial"} animate={"animate"} exit={"exit"}>
            <Info>
              <InfoTitle>{project.projectName}</InfoTitle>
              <InfoContent>
                <InfoSkill>
                  {project.skill.map((skill) => (
                    <SkillCircle>{skill}</SkillCircle>
                  ))}
                </InfoSkill>
                <InfoDesc>{project.infoDesc}</InfoDesc>
              </InfoContent>
              {screen === 0 && (
                <IconRight>
                  <Arrow width={"30"} />
                </IconRight>
              )}
            </Info>
          </Container>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default ProjectCard;

const Wrapper = styled(motion.a)<{ color: string }>`
  border-radius: 5px;
  background-color: ${(props) => props.theme[props.color].accent};
  position: relative;
  cursor: pointer;
  padding: 24px;
  color: white;
  width: 100%;
  height: 25vw;

  @media (max-width: 1200px) {
    padding: 12px 24px;
    height: 15vw;
  }
  @media (max-width: 800px) {
    height: 20vw;
    padding: 20px;
  }
`;

const CardDescription = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CardDesc = styled.h2`
  font-weight: 400;
  line-height: 1.7;
  font-size: 21px;
  @media (max-width: 800px) {
    display: none;
  }
`;

const Icon = styled.h2`
  color: white;
  margin-top: auto;
  display: flex;
  align-items: center;
`;

const IconRight = styled.h2`
  color: white;
  margin-left: auto;
  font-size: 18px;
`;

const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  @media (max-width: 800px) {
    flex-direction: row;
    align-items: center;
  }
`;

const InfoTitle = styled.div`
  font-size: 30px;
  font-weight: 600;
  @media (max-width: 1200px) {
    font-size: 24px;
  }
`;

const InfoContent = styled.div`
  margin-top: auto;
  @media (max-width: 800px) {
    display: none;
  }
`;

const InfoDesc = styled.h2`
  font-weight: 400;
  font-size: 18px;
  word-break: normal;
  margin-top: 10px;
  @media (max-width: 1200px) {
    font-size: 16px;
    margin-top: 5px;
  }
`;

const InfoSkill = styled.h2`
  display: flex;
`;

const SkillCircle = styled.div`
  font-size: 12px;
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 10px;
  border: 1.5px solid #f1f1f1;
  font-weight: 500;
  @media (max-width: 1200px) {
    padding: 2px 4px;
    margin-right: 5px;
    border: 1px solid #f1f1f1;
  }
`;

const mainVar = {
  initial: { y: 20, opacity: 0 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
      delay: 0.1,
    },
  },
  exit: {
    y: 20,
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
};

const descVar = {
  initial: { y: -20, opacity: 0 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
      delay: 0.1,
    },
  },
  exit: {
    y: -20,
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
};

interface IProjectProps {
  project: {
    projectName: string;
    skill: string[];
    image: string[];
    infoDesc: string;
    cardDesc: string;
    cardDescKor: string;
  };
  color: number;
}
