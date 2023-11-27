import styled from "styled-components";
import MainContent from "../Components/MainContent";
import About from "../Components/About";
import Projects from "../Components/Projects";
import Education from "../Components/Education";
import Services from "../Components/Services";
import Career from "../Components/Career";
import { PathMatch, useMatch, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const Portfolio = () => {
  const navigate = useNavigate();

  const projectMatch: PathMatch<string> | null = useMatch("/project/:title");

  return (
    <AnimatePresence>
      {projectMatch && (
        <>
          <Wrapper>{projectMatch.params.title}</Wrapper>
        </>
      )}
    </AnimatePresence>
  );
};

export default Portfolio;

const Wrapper = styled.div`
  width: 100vw;
`;
