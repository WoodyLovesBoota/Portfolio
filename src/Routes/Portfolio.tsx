import styled from "styled-components";
import MainContent from "../Components/MainContent";
import About from "../Components/About";
import Projects from "../Components/Projects";
import Education from "../Components/Education";
import Services from "../Components/Services";
import Career from "../Components/Career";

const Portfolio = () => {
  return (
    <Wrapper>
      <MainContent />
      <Services />
      <Projects />
      <Career />
      <Education />
      <About />
    </Wrapper>
  );
};

export default Portfolio;

const Wrapper = styled.div`
  width: 100vw;
`;
