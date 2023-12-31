import styled from "styled-components";
import { PathMatch, useMatch, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { languageState, projectState } from "../atoms";
import { ReactComponent as ArrowSmall } from "../assets/arrowsmall.svg";
import "../assets/fonts/font.css";
import { ReactComponent as Arrow } from "../assets/arrowbig.svg";
import NavigationBar from "../Components/NavigationBar";
import { motion, AnimatePresence } from "framer-motion";
import { ReactComponent as AngleR } from "../assets/anglearrowright.svg";
import { ReactComponent as AngleL } from "../assets/anglearrowleft.svg";

import { useRecoilValue } from "recoil";
import Footer from "../Components/Footer";

const Portfolio = () => {
  const serviceRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const onMainClick = () => {
    navigate("/");
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

  const onContactClick = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [back, isBack] = useState(1);

  const isEng = useRecoilValue(languageState);
  const [leaving, setLeaving] = useState(false);

  const projectData = useRecoilValue(projectState);

  const projectMatch: PathMatch<string> | null = useMatch("/:name");

  const toggleLeaving = () => {
    setLeaving((prev) => !prev);
  };

  const increaseIndex = () => {
    if (projectData) {
      if (leaving) return;
      toggleLeaving();
      const totalMovies =
        projectMatch &&
        projectData[projectData.findIndex((e) => e.name === projectMatch.params.name)].image
          .length - 1;
      const maxIndex = totalMovies ? totalMovies : 0;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
    isBack(1);
  };

  const decreaseIndex = () => {
    if (projectData) {
      if (leaving) return;
      toggleLeaving();
      const totalMovies =
        projectMatch &&
        projectData[projectData.findIndex((e) => e.name === projectMatch.params.name)].image
          .length - 1;
      const maxIndex = totalMovies ? totalMovies : 0;
      setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    }
    isBack(-1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectMatch?.params.name]);

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
      {projectMatch &&
        projectData &&
        projectData[projectData.findIndex((e) => e.name === projectMatch.params.name)] && (
          <Container>
            <Header>
              <Subject>PORTFOLIO</Subject>
              <ViewLink
                variants={hoverTargetBar}
                animate="animate"
                whileHover={"hover"}
                target="_blank"
                href={
                  projectData[projectData.findIndex((e) => e.name === projectMatch.params.name)]
                    .github
                }
              >
                <Ment variants={hoverOverVar}>
                  VISIT GITHUB
                  <ArrowSmall />
                </Ment>
                <Hidden variants={hoverUnderVar}>
                  VISIT GITHUB
                  <ArrowSmall />
                </Hidden>
              </ViewLink>
            </Header>
            <TitleRow>
              <Title>{projectMatch.params.name}</Title>

              <AnimatePresence custom={back} initial={false} onExitComplete={toggleLeaving}>
                <Row
                  custom={back}
                  variants={rowVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  key={index}
                  transition={{ type: "tween", duration: 1 }}
                >
                  <Box
                    key={index + "boxImage"}
                    bgphoto={`url(${
                      projectData[projectData.findIndex((e) => e.name === projectMatch.params.name)]
                        .image[index]
                    })`}
                  >
                    <LinktoProject
                      href={
                        projectData[
                          projectData.findIndex((e) => e.name === projectMatch.params.name)
                        ].demo
                      }
                      target="_blank"
                    ></LinktoProject>

                    <SlideButtonL onClick={decreaseIndex}>
                      <AngleL />
                    </SlideButtonL>
                    <SlideButton onClick={increaseIndex}>
                      <AngleR />
                    </SlideButton>
                  </Box>
                </Row>
              </AnimatePresence>
            </TitleRow>
            <DescriptionRow>
              <Column>
                <RowTitle>Project Details</RowTitle>
                <Skills>
                  <SkillTitle>Skills:</SkillTitle>
                  {projectData[
                    projectData.findIndex((e) => e.name === projectMatch.params.name)
                  ].skill.map((skill) => (
                    <Skill>{skill}</Skill>
                  ))}
                </Skills>
              </Column>
              <Column>
                <RowTitle>Description</RowTitle>
                <Description>
                  {isEng
                    ? projectData[projectData.findIndex((e) => e.name === projectMatch.params.name)]
                        .detail
                    : projectData[projectData.findIndex((e) => e.name === projectMatch.params.name)]
                        .detailKor}
                </Description>
              </Column>
            </DescriptionRow>
            <Arrow />
            <Button
              variants={hoverVar}
              animate="animate"
              whileHover={"hover"}
              href={
                projectData[projectData.findIndex((e) => e.name === projectMatch.params.name)].demo
              }
              target="_blank"
            >
              VISIT WEBSITE
              <UnderBar variants={hoverUnderBarVar} />
            </Button>
            <PageButtons>
              {projectData.findIndex((e) => e.name === projectMatch.params.name) !== 0 && (
                <PageButton
                  onClick={() => {
                    navigate(
                      `/${
                        projectData[
                          (projectData.findIndex((e) => e.name === projectMatch.params.name) - 1) %
                            projectData.length
                        ].name
                      }`
                    );
                  }}
                >
                  <PrevArrowWrapper>
                    <ArrowSmall />
                  </PrevArrowWrapper>
                  Prev
                </PageButton>
              )}
              {projectData.findIndex((e) => e.name === projectMatch.params.name) !==
                projectData.length - 1 && (
                <NextButton
                  onClick={() => {
                    navigate(
                      `/${
                        projectData[
                          (projectData.findIndex((e) => e.name === projectMatch.params.name) + 1) %
                            projectData.length
                        ].name
                      }`
                    );
                  }}
                >
                  Next
                  <ArrowWrapper>
                    <ArrowSmall />
                  </ArrowWrapper>
                </NextButton>
              )}
            </PageButtons>
          </Container>
        )}
      <Footer />
    </Wrapper>
  );
};

export default Portfolio;

const Wrapper = styled.div`
  width: 100vw;
  padding-top: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1500px) {
    width: 100%;
    padding: 0 30px;
  }
  @media (max-width: 745px) {
    padding: 0 20px;
  }
`;

const SlideButton = styled(motion.div)`
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  right: 0;
  font-size: 36px;
  color: white;
  cursor: pointer;
`;

const SlideButtonL = styled(motion.div)`
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  left: 0;
  font-size: 36px;
  color: white;
  cursor: pointer;
`;

const Row = styled(motion.div)`
  width: 100%;
  position: relative;
`;

const LinktoProject = styled.a`
  width: 80%;
  height: 80%;
  cursor: pointer;
`;

const Box = styled(motion.div)<{ bgphoto: string }>`
  width: 100%;
  height: 810px;
  background: ${(props) => props.bgphoto};
  background-position: center;
  background-size: cover;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.03);
  border-radius: 30px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1500px) {
    height: 56.25vw;
  }
`;

const Header = styled.div`
  width: 100%;
  padding-bottom: 18px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
`;

const Subject = styled.h2`
  font-size: 16px;
  font-weight: 400;
`;

const ViewLink = styled(motion.a)`
  position: relative;
  & svg {
    margin-left: 11px;
  }
`;

const TitleRow = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  margin-top: 100px;
  font-family: ClashGrotesk-Medium;
  font-size: 150px;
  line-height: 0.9;
  text-transform: uppercase;
  margin-bottom: 100px;
  @media (max-width: 1500px) {
    font-size: 10.42vw;
  }

  @media (max-width: 1080px) {
    margin-top: 80px;
  }
  @media (max-width: 745px) {
    margin-top: 40px;
    font-size: 60px;
  }
`;

const DescriptionRow = styled.div`
  display: flex;
  margin-top: calc(80px + 810px + 100px);
  justify-content: space-between;
  margin-bottom: 150px;
  width: 100%;

  @media (max-width: 1500px) {
    margin-top: calc(80px + 56.25vw + 80px);
  }

  @media (max-width: 1080px) {
    flex-direction: column;
    justify-content: flex-start;
    margin-top: calc(40px + 56.25vw + 40px);
  }

  @media (max-width: 745px) {
    margin-bottom: 80px;
  }
`;

const Column = styled.div`
  width: 705px;
  @media (max-width: 1080px) {
    width: 100%;
    margin-bottom: 40px;
  }
`;

const RowTitle = styled.h2`
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 30px;
`;

const SkillTitle = styled.h2`
  font-size: 16px;
  font-weight: 400;
  width: 150px;
  line-height: 2;
`;

const Skills = styled.div`
  display: flex;
  padding: 12px 0;
  border-bottom: 1px solid #e6e6e6;
  align-items: center;
  width: 90%;
`;

const Skill = styled.h2`
  font-size: 16px;
  font-weight: 400;
  padding-left: 10px;
  line-height: 2;
`;

const Description = styled.h2`
  font-size: 16px;
  font-weight: 400;
  line-height: 2;
`;

const Button = styled(motion.a)`
  margin-top: 50px;
  font-family: ClashGrotesk-Medium;
  font-size: 150px;
  line-height: 0.9;
  text-transform: uppercase;
  margin-bottom: 100px;
  @media (max-width: 1500px) {
    font-size: 10.42vw;
  }

  @media (max-width: 745px) {
    margin-top: 40px;
    font-size: 60px;
  }
`;

const PageButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 100px;
  border-top: 1px solid #e6e6e6;
`;

const PageButton = styled.button`
  background-color: transparent;
  font-weight: 400;
  font-size: 18px;
  cursor: pointer;
  padding: 24px 0;
  display: flex;
  align-items: center;
`;

const ArrowWrapper = styled.div`
  margin-left: 10px;
`;

const PrevArrowWrapper = styled.div`
  margin-right: 10px;
  rotate: 180deg;
`;

const NextButton = styled.button`
  background-color: transparent;
  font-weight: 400;
  font-size: 18px;
  cursor: pointer;
  padding: 24px 0;
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const Hidden = styled(motion.h2)`
  font-size: 16px;
  font-weight: 400;
`;

const UnderBar = styled(motion.div)`
  background-color: black;
  width: 100%;
  height: 5px;
  border-radius: 100px;
`;

const hoverVar = {
  hover: {
    color: "#000000",
  },
};

const Ment = styled(motion.h2)`
  font-size: 16px;
  font-weight: 400;
  position: absolute;
`;

const hoverUnderVar = {
  animate: { opacity: 1, y: -0, transition: { duration: 0.15 } },
  hover: { opacity: 0, y: 30, transition: { duration: 0.15 } },
};

const hoverOverVar = {
  animate: { opacity: 0, y: -30, transition: { duration: 0.15 } },
  hover: { opacity: 1, y: 0, transition: { duration: 0.15 } },
};

const hoverTargetBar = {
  animate: {},
  hover: {},
};

const hoverUnderBarVar = {
  animate: { width: 0 },
  hover: { width: "100%" },
};

const rowVariants = {
  hidden: (custom: number) => ({
    x: (window.outerWidth + 15) * custom,
  }),

  visible: { x: 0, y: -0 },

  exit: (custom: number) => ({
    x: (-window.outerWidth - 15) * custom,
  }),
};
