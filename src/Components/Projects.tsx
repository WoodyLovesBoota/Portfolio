import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import projectData from "../projectData.json";
import Header from "./Header";

const Projects = () => {
  return (
    <Wrapper>
      <Header title="Featured Portfolios" subTitle="MY WORKS" isCenter={false} />
      <Main>
        {projectData.map((project, index) => (
          <ProjectCard project={project} color={index} />
        ))}
      </Main>
    </Wrapper>
  );
};

export default Projects;

const Wrapper = styled.div`
  width: 100%;
  padding: 8%;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  padding: 8% 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 2vw;
  grid-column-gap: 1.5vw;
  justify-content: space-between;
  @media (max-width: 1160px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Info = styled.div``;

const InfoTitle = styled.div``;

const InfoContent = styled.h2``;

const Achieves = styled.div``;

const Achieve = styled.div``;

const AchieveTitle = styled.h2``;

const AchieveContentBox = styled.div``;

const AchieveContent = styled.h2``;

const cursorVar = {};
