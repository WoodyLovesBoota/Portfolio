import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { languageState } from "../atoms";

const ProjectCard = ({ project, color }: IProjectProps) => {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);
  const isEng = useRecoilValue(languageState);

  const handleProjectClicked = () => {
    navigate(`/project/${project.projectName.slice(0, project.projectName.length - 1)}/${color}`);
  };

  const colors = ["red", "orange", "blue", "green", "yellow", "purple"];

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
      <AnimatePresence>
        {isEng ? (
          isHover ? (
            <CardDescription
              key={project.projectName}
              variants={descVar}
              initial={"initial"}
              animate={"animate"}
              exit={"exit"}
            >
              <CardDesc>{project.cardDesc}</CardDesc>
            </CardDescription>
          ) : (
            <Container key={project.image[0]} variants={mainVar} initial={"initial"} animate={"animate"} exit={"exit"}>
              <Info>
                <InfoTitle>{project.projectName}</InfoTitle>
                <InfoDesc>{project.infoDesc}</InfoDesc>
                <InfoSkill>
                  {project.skill.map((skill) => (
                    <SkillCircle>{skill}</SkillCircle>
                  ))}
                </InfoSkill>
              </Info>
              <Photo bgPhoto={project.image[0]} />
            </Container>
          )
        ) : isHover ? (
          <CardDescription
            key={project.projectName}
            variants={descVar}
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
          >
            <CardDesc>{project.cardDescKor}</CardDesc>
          </CardDescription>
        ) : (
          <Container key={project.image[0]} variants={mainVar} initial={"initial"} animate={"animate"} exit={"exit"}>
            <Info>
              <InfoTitle>{project.projectName}</InfoTitle>
              <InfoDesc>{project.infoDesc}</InfoDesc>
              <InfoSkill>
                {project.skill.map((skill) => (
                  <SkillCircle>{skill}</SkillCircle>
                ))}
              </InfoSkill>
            </Info>
            <Photo bgPhoto={project.image[0]} />
          </Container>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default ProjectCard;

const Wrapper = styled(motion.div)<{ color: string }>`
  border-radius: 0.9375rem;
  background-color: ${(props) => {
    let colors = props.color;
    return props.theme[props.color].accent;
  }};

  box-shadow: 0px 0px 64px 0 ${(props) => props.theme.bg.blur};
  position: relative;
  cursor: pointer;
  padding: 3.125rem 1.875rem;
  color: white;
  height: 18.75rem;
  width: 100%;
  @media (max-width: 1160px) {
    width: 75%;
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const CardDescription = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardDesc = styled.h2`
  font-weight: 400;
  line-height: 1.7;
  font-size: 1.5rem;
  @media (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const Photo = styled.div<{ bgPhoto: string }>`
  width: 45%;
  height: 100%;
  background-image: url(${(props) => props.bgPhoto});
  background-position: top center;
  background-size: cover;
  border-radius: 0.5rem;
  @media (max-width: 500px) {
    display: none;
  }
`;

const Info = styled.div`
  padding: 1.5625rem 1.25rem;
  width: 50%;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const InfoTitle = styled.div`
  font-size: 1.875rem;
  font-weight: 600;
  border-bottom: 2px solid white;
  padding-bottom: 1.5625rem;
`;

const InfoDesc = styled.h2`
  font-weight: 500;
  margin-bottom: 1.25rem;
  width: 90%;
  line-height: 1.5;
  margin-top: 1.5625rem;
  font-size: 1rem;
`;

const InfoSkill = styled.h2`
  display: flex;
`;

const SkillCircle = styled.div`
  font-size: 0.75rem;
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 10px;
  border: 1.5px solid #f1f1f1;
  font-weight: 500;
`;

const mainVar = {
  initial: { y: 50, opacity: 0 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.15,
      delay: 0.15,
    },
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.15,
    },
  },
};

const descVar = {
  initial: { y: -50, opacity: 0 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.15,
      delay: 0.15,
    },
  },
  exit: {
    y: -50,
    opacity: 0,
    transition: {
      duration: 0.15,
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
