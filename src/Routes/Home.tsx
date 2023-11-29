import styled from "styled-components";
import MainContent from "../Components/MainContent";
import About from "../Components/About";
import Projects from "../Components/Projects";
import Education from "../Components/Education";
import Services from "../Components/Services";
import Career from "../Components/Career";
import Blog from "../Components/Blog";
import NavigationBar from "../Components/NavigationBar";
import { useRef } from "react";
import Contact from "../Components/Contact";

const Home = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const onMainClick = () => {
    mainRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onServiceClick = () => {
    serviceRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onPortfolioClick = () => {
    portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onExperienceClick = () => {
    experienceRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onBlogClick = () => {
    blogRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onEducationClick = () => {
    educationRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onContactClick = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Wrapper>
      <NavigationBar
        onContactClick={onContactClick}
        onEducationClick={onEducationClick}
        onBlogClick={onBlogClick}
        onExperienceClick={onExperienceClick}
        onPortfolioClick={onPortfolioClick}
        onServiceClick={onServiceClick}
        onMainClick={onMainClick}
      />
      <MainContent ref={mainRef} />
      <Services ref={serviceRef} />
      <Projects ref={portfolioRef} />
      <Career ref={experienceRef} />
      <Blog ref={blogRef} />
      <Education ref={educationRef} />
      <Contact ref={contactRef} />
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
    hsla(207, 67%, 90%, 1) 13%,
    hsla(0, 0%, 93%, 1) 27%,
    hsla(261, 34%, 87%, 1) 36%,
    hsla(0, 0%, 93%, 1) 44%,
    hsla(206, 63%, 86%, 1) 52%,
    hsla(0, 0%, 93%, 1) 60%,
    hsla(261, 34%, 87%, 1) 69%,
    hsla(0, 0%, 93%, 1) 78%,
    hsla(207, 67%, 90%, 1) 89%,
    hsla(206, 63%, 86%, 1) 100%
  );

  background: -moz-linear-gradient(
    135deg,
    hsla(206, 63%, 86%, 1) 0%,
    hsla(207, 67%, 90%, 1) 13%,
    hsla(0, 0%, 93%, 1) 27%,
    hsla(261, 34%, 87%, 1) 36%,
    hsla(0, 0%, 93%, 1) 44%,
    hsla(206, 63%, 86%, 1) 52%,
    hsla(0, 0%, 93%, 1) 60%,
    hsla(261, 34%, 87%, 1) 69%,
    hsla(0, 0%, 93%, 1) 78%,
    hsla(207, 67%, 90%, 1) 89%,
    hsla(206, 63%, 86%, 1) 100%
  );

  background: -webkit-linear-gradient(
    135deg,
    hsla(206, 63%, 86%, 1) 0%,
    hsla(207, 67%, 90%, 1) 13%,
    hsla(0, 0%, 93%, 1) 27%,
    hsla(261, 34%, 87%, 1) 36%,
    hsla(0, 0%, 93%, 1) 44%,
    hsla(206, 63%, 86%, 1) 52%,
    hsla(0, 0%, 93%, 1) 60%,
    hsla(261, 34%, 87%, 1) 69%,
    hsla(0, 0%, 93%, 1) 78%,
    hsla(207, 67%, 90%, 1) 89%,
    hsla(206, 63%, 86%, 1) 100%
  );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#c6dff2", endColorstr="#d6e8f7", GradientType=1 );
`;
