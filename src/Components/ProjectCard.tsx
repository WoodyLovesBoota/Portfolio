import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { languageState, screenState } from "../atoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ project, color }: IProjectProps) => {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);
  const isEng = useRecoilValue(languageState);
  const [screen, setScreen] = useRecoilState(screenState);

  const handleProjectClicked = () => {
    navigate(`/project/${project.projectName.slice(0, project.projectName.length - 1)}/${color}`);
  };

  const colors = ["red", "purple", "green", "gray", "yellow", "blue", "orange"];

  const handleHoverStart = () => {
    setIsHover(true);
  };

  const handleHoverEnd = () => {
    setIsHover(false);
  };

  return (
    <Wrapper
      onClick={handleProjectClicked}
      color={colors[color]}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
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
                <FontAwesomeIcon icon={faRightLong} />
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
                    <FontAwesomeIcon icon={faRightLong} />
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
              <FontAwesomeIcon icon={faRightLong} />
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
                  <FontAwesomeIcon icon={faRightLong} />
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

const Wrapper = styled(motion.div)<{ color: string }>`
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
  font-size: 18px;
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
