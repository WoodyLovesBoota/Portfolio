import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import projectData from "../projectData.json";
import Header from "./Header";
import { forwardRef } from "react";

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <Wrapper ref={ref}>
      <Header title="Featured Portfolios" subTitle="MY WORKS" isCenter={false} />
      <Main>
        {projectData.map((project, index) => (
          <ProjectCard project={project} color={index} />
        ))}
      </Main>
    </Wrapper>
  );
});

export default Projects;

const Wrapper = styled.div`
  width: 100%;
  padding-top: 144px;
  padding: 72px;
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    padding: 48px 16px;
  }
`;

const Main = styled.div`
  padding: 72px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
  justify-content: space-between;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;
    padding: 45px 0;
  }
`;
