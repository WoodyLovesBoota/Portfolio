import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import Project from "./Project";
import projectData from "../projectData.json";
import Header from "./Header";

const Projects = () => {
  return (
    <Wrapper>
      <Header title="Featured Portfolios" subTitle="MY WORKS" />
      <Main>
        {projectData.map((project) => (
          <Project project={project} />
        ))}
      </Main>
    </Wrapper>
  );
};

export default Projects;

const Wrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.bg.lighter};
  padding: 8%;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  padding: 8% 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, 450px);
  grid-row-gap: 8vw;
  justify-content: space-between;
  @media (max-width: 1660px) {
    grid-template-columns: repeat(auto-fill, 360px);
  }
  @media (max-width: 1440px) {
    grid-template-columns: repeat(auto-fill, 450px);
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
