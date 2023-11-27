import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Project = ({ project }: IProjectProps) => {
  const navigate = useNavigate();

  return (
    <Wrapper variants={boxVar} initial={"initial"} whileHover={"hover"} whileTap={"click"}>
      <Blur variants={blurVar}></Blur>
      <Photo bgPhoto={project.image}></Photo>
      <Info>
        <InfoTitle>{project.projectName}</InfoTitle>
        <InfoSkill>
          {project.skill.map((skill) => (
            <SkillCircle>{skill}</SkillCircle>
          ))}
        </InfoSkill>
      </Info>
    </Wrapper>
  );
};

export default Project;

const Wrapper = styled(motion.div)`
  height: 450px;
  width: 450px;
  background-color: white;
  border-radius: 10px;
  position: relative;
  cursor: pointer;
  border: 1px solid #f4f4fa;
  @media (max-width: 1660px) {
    height: 420px;
    width: 420px;
    border-radius: 9px;
  }
  @media (max-width: 1440px) {
    width: 350px;
    height: 350px;
  }

  @media (max-width: 900px) {
    height: 300px;
    width: 300px;
  }
`;

const Photo = styled.div<{ bgPhoto: string }>`
  width: 100%;
  height: 75%;
  background-image: url(${(props) => props.bgPhoto});
  background-position: top center;
  background-size: cover;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;

const Blur = styled(motion.div)`
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
  width: 100%;
  height: 75%;
  position: absolute;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;

const SubTitle = styled.h2``;

const Title = styled.h2``;

const Main = styled.div``;

const Info = styled.div`
  height: 25%;
  padding: 1.5625rem 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InfoTitle = styled.div`
  font-size: 1rem;
  font-weight: 400;
  color: ${(props) => props.theme.word.black};
`;

const InfoSkill = styled.h2`
  display: flex;
`;

const SkillCircle = styled.div`
  font-size: 0.75rem;
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 10px;
  border: 1px solid #f1f1f1;
  color: ${(props) => props.theme.word.sub};
  font-weight: 400;
`;

const Achieve = styled.div``;

const AchieveTitle = styled.h2``;

const AchieveContentBox = styled.div``;

const AchieveContent = styled.h2``;

const cursorVar = {};

const blurVar = {
  initial: { opacity: 1 },
  hover: { opacity: 0 },
};

const boxVar = {
  initial: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  hover: {
    scale: 1.08,
    transition: {
      duration: 0.2,
    },
  },
  click: {
    scale: 0.95,
  },
};

interface IProjectProps {
  project: {
    projectName: string;
    skill: string[];
    image: string;
  };
}
