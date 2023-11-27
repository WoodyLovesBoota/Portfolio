import styled from "styled-components";
import MainContent from "../Components/MainContent";
import About from "../Components/About";
import Projects from "../Components/Projects";
import Education from "../Components/Education";
import Services from "../Components/Services";
import Career from "../Components/Career";

const Home = () => {
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

export default Home;

const Wrapper = styled.div`
  width: 100vw;
  background: hsla(206, 63%, 86%, 1);

  background: linear-gradient(
    135deg,
    hsla(206, 63%, 86%, 1) 0%,
    hsla(207, 67%, 90%, 1) 14%,
    hsla(0, 0%, 100%, 1) 27%,
    hsla(0, 0%, 84%, 1) 35%,
    hsla(0, 0%, 78%, 1) 43%,
    hsla(306, 15%, 74%, 1) 52%,
    hsla(0, 0%, 78%, 1) 60%,
    hsla(0, 0%, 84%, 1) 69%,
    hsla(0, 0%, 100%, 1) 79%,
    hsla(207, 67%, 90%, 1) 89%,
    hsla(206, 63%, 86%, 1) 100%
  );

  background: -moz-linear-gradient(
    135deg,
    hsla(206, 63%, 86%, 1) 0%,
    hsla(207, 67%, 90%, 1) 14%,
    hsla(0, 0%, 100%, 1) 27%,
    hsla(0, 0%, 84%, 1) 35%,
    hsla(0, 0%, 78%, 1) 43%,
    hsla(306, 15%, 74%, 1) 52%,
    hsla(0, 0%, 78%, 1) 60%,
    hsla(0, 0%, 84%, 1) 69%,
    hsla(0, 0%, 100%, 1) 79%,
    hsla(207, 67%, 90%, 1) 89%,
    hsla(206, 63%, 86%, 1) 100%
  );

  background: -webkit-linear-gradient(
    135deg,
    hsla(206, 63%, 86%, 1) 0%,
    hsla(207, 67%, 90%, 1) 14%,
    hsla(0, 0%, 100%, 1) 27%,
    hsla(0, 0%, 84%, 1) 35%,
    hsla(0, 0%, 78%, 1) 43%,
    hsla(306, 15%, 74%, 1) 52%,
    hsla(0, 0%, 78%, 1) 60%,
    hsla(0, 0%, 84%, 1) 69%,
    hsla(0, 0%, 100%, 1) 79%,
    hsla(207, 67%, 90%, 1) 89%,
    hsla(206, 63%, 86%, 1) 100%
  );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#C6DFF2", endColorstr="#D6E8F7", GradientType=1 );
`;
