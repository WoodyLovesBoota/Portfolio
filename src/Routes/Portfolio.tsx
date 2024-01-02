import styled, { keyframes } from "styled-components";
import { PathMatch, useMatch, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { languageState, projectState } from "../atoms";
import { ReactComponent as ArrowSmall } from "../assets/arrowsmall.svg";
import "../assets/fonts/font.css";
import { ReactComponent as Arrow } from "../assets/arrowbig.svg";
import NavigationBar from "../Components/PortfolioNavigationBar";
import { motion, AnimatePresence } from "framer-motion";
import { ReactComponent as AngleR } from "../assets/anglearrowright.svg";
import { ReactComponent as AngleL } from "../assets/anglearrowleft.svg";

import { useRecoilValue } from "recoil";
import Footer from "../Components/Footer";

const Portfolio = () => {
  const [isRight, setIsRight] = useState(1);
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const isEng = useRecoilValue(languageState);
  const projectData = useRecoilValue(projectState);
  const projectMatch: PathMatch<string> | null = useMatch("/:name");

  const increaseIndex = () => {
    setIsRight(1);

    projectData &&
      setIndex((prev) =>
        prev ===
        projectData[projectData.findIndex((e) => e.name === projectMatch?.params.name)].image
          .length -
          1
          ? prev
          : prev + 1
      );
  };

  const decreaseIndex = () => {
    setIsRight(-1);
    setIndex((prev) => (prev === 0 ? prev : prev - 1));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectMatch?.params.name]);

  useEffect(() => {
    setIndex(0);
  }, [projectMatch?.params.name]);

  return (
    <Wrapper>
      <NavigationBar />
      {projectMatch &&
        projectData &&
        projectData[projectData.findIndex((e) => e.name === projectMatch.params.name)] && (
          <Container>
            <Header>
              <ViewLink
                variants={hoverTargetBar}
                animate="animate"
                whileHover={"hover"}
                onClick={() => {
                  navigate("/");
                }}
              >
                <Ment variants={hoverOverVar}>
                  <PrevArrowWrapper>
                    <ArrowSmall />
                  </PrevArrowWrapper>
                  BACK TO PORTFOLIO
                </Ment>
                <Hidden variants={hoverUnderVar}>
                  <PrevArrowWrapper>
                    <ArrowSmall />
                  </PrevArrowWrapper>
                  BACK TO PORTFOLIO
                </Hidden>
              </ViewLink>
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
              <Box>
                <SlideButtonL onClick={decreaseIndex}>
                  <AngleL />
                </SlideButtonL>
                <AnimatePresence custom={isRight}>
                  {projectData[
                    projectData.findIndex((e) => e.name === projectMatch.params.name)
                  ].image.map((e, i) => (
                    <Card
                      custom={isRight}
                      variants={index === i ? cardVar : noVar}
                      initial={"initial"}
                      animate={isRight ? "animate" : "animateWhenLeft"}
                      exit={"exit"}
                      key={index === i ? i + "boxImage" : i + "no"}
                      bgphoto={`url(${
                        projectData[
                          projectData.findIndex((e) => e.name === projectMatch.params.name)
                        ].image[i]
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
                    </Card>
                  ))}
                </AnimatePresence>
                <SlideButton onClick={increaseIndex}>
                  <AngleR />
                </SlideButton>
                <Dots
                  num={
                    projectData[projectData.findIndex((e) => e.name === projectMatch.params.name)]
                      .image.length
                  }
                >
                  {projectData[
                    projectData.findIndex((e) => e.name === projectMatch.params.name)
                  ].image.map((e, i) => (i === index ? <NowDot></NowDot> : <Dot></Dot>))}
                </Dots>
              </Box>
            </TitleRow>
            <DescriptionRow>
              <Column>
                <RowTitle>Project Details</RowTitle>
                <Skills>
                  <SkillTitle>Date:</SkillTitle>
                  <SkillList>
                    {projectData[
                      projectData.findIndex((e) => e.name === projectMatch.params.name)
                    ].date[0].slice(0, 4) +
                      "." +
                      projectData[
                        projectData.findIndex((e) => e.name === projectMatch.params.name)
                      ].date[0].slice(4) ===
                    projectData[
                      projectData.findIndex((e) => e.name === projectMatch.params.name)
                    ].date[1].slice(0, 4) +
                      "." +
                      projectData[
                        projectData.findIndex((e) => e.name === projectMatch.params.name)
                      ].date[1].slice(4) ? (
                      <Skill>
                        {projectData[
                          projectData.findIndex((e) => e.name === projectMatch.params.name)
                        ].date[0].slice(0, 4) +
                          "." +
                          projectData[
                            projectData.findIndex((e) => e.name === projectMatch.params.name)
                          ].date[0].slice(4)}
                      </Skill>
                    ) : (
                      <>
                        <Skill>
                          {projectData[
                            projectData.findIndex((e) => e.name === projectMatch.params.name)
                          ].date[0].slice(0, 4) +
                            "." +
                            projectData[
                              projectData.findIndex((e) => e.name === projectMatch.params.name)
                            ].date[0].slice(4)}
                        </Skill>
                        <Divider>-</Divider>
                        <Skill>
                          {projectData[
                            projectData.findIndex((e) => e.name === projectMatch.params.name)
                          ].date[1].slice(0, 4) +
                            "." +
                            projectData[
                              projectData.findIndex((e) => e.name === projectMatch.params.name)
                            ].date[1].slice(4)}
                        </Skill>
                      </>
                    )}
                  </SkillList>
                </Skills>
                <Skills>
                  <SkillTitle>Skills:</SkillTitle>
                  <SkillList>
                    <Skill>
                      {
                        projectData[
                          projectData.findIndex((e) => e.name === projectMatch.params.name)
                        ].skill
                      }
                    </Skill>
                  </SkillList>
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
            <BigArrowWrapper>
              <Arrow />
            </BigArrowWrapper>
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

  @media (max-width: 745px) {
    padding-top: 120px;
  }
`;

const Container = styled.div`
  width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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
  padding: 0 30px;
  @media (max-width: 745px) {
    padding: 0 20px;
  }
  @media (max-width: 580px) {
    padding: 0;
  }
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
  z-index: 1;
  padding: 0 30px;
  @media (max-width: 745px) {
    padding: 0 20px;
  }
  @media (max-width: 580px) {
    padding: 0;
  }
`;

const LinktoProject = styled.a`
  width: 80%;
  height: 80%;
  cursor: pointer;
`;

const Divider = styled.h2`
  font-size: 16px;
  font-weight: 400;
  margin: 0 10px;
`;

const Box = styled.div`
  width: 100%;
  position: relative;
  height: 810px;
  overflow: hidden;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 1500px) {
    height: 56.25vw;
  }
`;

const Card = styled(motion.div)<{ bgphoto: string }>`
  width: 100%;
  height: 810px;
  background: ${(props) => props.bgphoto};
  background-position: center;
  background-size: cover;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.03);
  position: absolute;
  top: 0;
  left: 0;
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
  overflow: hidden;
  align-items: center;
`;

const ViewLink = styled(motion.a)`
  position: relative;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  display: flex;
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
    margin-bottom: 80px;
  }
  @media (max-width: 745px) {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;

const DescriptionRow = styled.div`
  display: flex;
  margin-top: calc(100px);
  justify-content: space-between;
  margin-bottom: 150px;
  width: 100%;

  @media (max-width: 1500px) {
    margin-top: 80px;
  }

  @media (max-width: 1080px) {
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 50px;
  }

  @media (max-width: 745px) {
    margin-bottom: 40px;
    margin-top: 40px;
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
  margin-bottom: 18px;
`;

const SkillTitle = styled.h2`
  font-size: 16px;
  font-weight: 400;
  width: 150px;
  line-height: 2;
`;

const SkillList = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 150px);
  @media (max-width: 580px) {
    width: calc(100%);
    flex-wrap: wrap;
  }
`;

const Skills = styled.div`
  display: flex;
  padding: 12px 0;
  border-bottom: 1px solid #e6e6e6;
  align-items: center;
  width: calc(100% - 30px);
  @media (max-width: 1080px) {
    width: 100%;
  }
  @media (max-width: 580px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Skill = styled.h2`
  font-size: 16px;
  font-weight: 400;
  line-height: 2;
  flex-wrap: wrap;
`;

const Description = styled.h2`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.8;
`;

const shake = keyframes`
    0%, 100% {
    transform: translateY(-20px);
  }

  50% {
    transform: translateY(-40px);
  }
`;

const BigArrowWrapper = styled.div`
  animation: ${shake} 1s ease-in-out infinite;
`;

const Button = styled(motion.a)`
  margin-top: 50px;
  font-family: ClashGrotesk-Medium;
  font-size: 150px;
  line-height: 0.9;
  text-transform: uppercase;
  margin-bottom: 100px;
  text-align: center;
  @media (max-width: 1500px) {
    font-size: 10.42vw;
  }
  @media (max-width: 745px) {
    margin-top: 40px;
    font-size: 60px;
    margin-bottom: 80px;
  }
`;

const PageButtons = styled.div`
  width: 100vw;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 100px;
  border-top: 1px solid #e6e6e6;
  @media (max-width: 745px) {
    padding: 0 20px;
  }
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
  display: flex;
  align-items: center;
`;

const UnderBar = styled(motion.div)`
  background-color: black;
  width: 100%;
  height: 5px;
  border-radius: 100px;
`;

const Dots = styled.div<{ num: number }>`
  display: flex;
  z-index: 100;
  position: absolute;
  left: calc(50% - 19px * number);
  bottom: 30px;
  @media (max-width: 745px) {
    bottom: 20px;
  }
  @media (max-width: 580px) {
    bottom: 10px;
  }
`;

const NowDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 100px;
  background-color: white;
  margin: 0 7px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2);
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 100px;
  border: 1px solid white;
  margin: 0 7px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2);
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
  display: flex;
  align-items: center;
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

const cardVar = {
  initial: (custom: number) => ({ x: custom === 1 ? "100%" : "-100%" }),
  animate: { x: 0, opacity: 1, transition: { type: "tween", duration: 0.7 } },
  exit: (custom: number) => ({
    x: custom === 1 ? "-100%" : "100%",
    transition: { type: "tween", duration: 0.7 },
  }),
};

const noVar = {
  initial: { x: 0, opacity: 0 },
  animate: {},
  exit: {},
};
