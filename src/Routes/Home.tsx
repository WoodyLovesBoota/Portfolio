import styled from "styled-components";
import MainContent from "../Components/MainContent";
import Projects from "../Components/Projects";
import Blog from "../Components/Blog";
import NavigationBar from "../Components/NavigationBar";
import { useRef } from "react";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

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
        onBlogClick={onBlogClick}
        onExperienceClick={onExperienceClick}
        onPortfolioClick={onPortfolioClick}
        onServiceClick={onServiceClick}
        onMainClick={onMainClick}
      />
      <MainContent ref={mainRef} />
      <Projects ref={portfolioRef} />
      <Blog ref={blogRef} />
      <Contact ref={contactRef} />
      <Footer />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  width: 100vw;
  background-color: white;
`;
