import styled from "styled-components";
import { forwardRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useRecoilState } from "recoil";
import { projectState } from "../atoms";
import "../assets/fonts/font.css";
import { ReactComponent as ArrowSmall } from "../assets/arrowsmall.svg";

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(-1);
  const [projectData, setProjectData] = useRecoilState(projectState);

  const onProjectClick = (name: string) => {
    navigate(`/${name}`);
  };
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    controls.start({ y: -10 + scrollY / 40 });
  }, [scrollY, controls]);

  return (
    <Wrapper ref={ref}>
      <Container>
        <Header>
          <Subject>PORTFOLIO</Subject>
          <ViewLink
            variants={hoverTargetBar}
            animate="animate"
            whileHover={"hover"}
            target="_blank"
            href="https://github.com/WoodyLovesBoota"
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
        <Title>SELECTED</Title>
        <SecondTitle>PROJECTS</SecondTitle>
        <Main>
          {projectData &&
            projectData.map((project, index) =>
              index % 2 === 1 ? (
                <RowR animate={controls}>
                  <ProjectBox>
                    <ProjectTitleL>
                      <MentionR
                        onClick={() => {
                          onProjectClick(project.name);
                        }}
                        onMouseOver={() => {
                          setIsHover(index);
                        }}
                        onMouseLeave={() => {
                          setIsHover(-1);
                        }}
                      >
                        <ProjectSpanL>{project.name}</ProjectSpanL>
                        <ProjectDetail>{project.subtitle}</ProjectDetail>
                      </MentionR>
                    </ProjectTitleL>
                  </ProjectBox>
                  <ProjectPhotoFrame>
                    <ProjectPhoto
                      variants={normalVar}
                      animate="animate"
                      whileHover={"hover"}
                      onClick={() => {
                        onProjectClick(project.name);
                      }}
                      onMouseOver={() => {
                        setIsHover(index);
                      }}
                      onMouseLeave={() => {
                        setIsHover(-1);
                      }}
                      isnow={isHover === index}
                      bgphoto={`url(${project.image[0]})`}
                    />
                  </ProjectPhotoFrame>
                </RowR>
              ) : (
                <Row animate={controls}>
                  <ProjectPhotoFrame>
                    <ProjectPhoto
                      variants={normalVar}
                      animate="animate"
                      whileHover={"hover"}
                      onClick={() => {
                        onProjectClick(project.name);
                      }}
                      onMouseOver={() => {
                        setIsHover(index);
                      }}
                      onMouseLeave={() => {
                        setIsHover(-1);
                      }}
                      isnow={isHover === index}
                      bgphoto={`url(${project.image[0]})`}
                    />
                  </ProjectPhotoFrame>
                  <ProjectBox>
                    <ProjectTitleR>
                      <Mention
                        onClick={() => {
                          onProjectClick(project.name);
                        }}
                        onMouseOver={() => {
                          setIsHover(index);
                        }}
                        onMouseLeave={() => {
                          setIsHover(-1);
                        }}
                      >
                        <ProjectSpanR>{project.name}</ProjectSpanR>
                        <ProjectDetail>{project.subtitle}</ProjectDetail>
                      </Mention>
                    </ProjectTitleR>
                  </ProjectBox>
                </Row>
              )
            )}
        </Main>
      </Container>
    </Wrapper>
  );
});

export default Projects;

const Wrapper = styled.div`
  width: 100%;
  padding-top: 192px;
  perspective: 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
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

const SecondTitle = styled.h2`
  font-family: ClashGrotesk-Medium;
  font-size: 150px;
  text-align: center;
  line-height: 0.9;
  margin-bottom: 100px;

  @media (max-width: 1500px) {
    font-size: 10.42vw;
  }

  @media (max-width: 1080px) {
    margin-bottom: 80px;
  }
  @media (max-width: 745px) {
    margin-bottom: 40px;
    font-size: 60px;
  }
`;

const Container = styled.div`
  width: 1440px;
  @media (max-width: 1500px) {
    width: 100%;
    padding: 0 30px;
  }
  @media (max-width: 745px) {
    padding: 0 20px;
  }
`;

const Title = styled.h2`
  margin-top: 100px;
  font-family: ClashGrotesk-Medium;
  font-size: 150px;
  line-height: 0.9;
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

const Main = styled.div``;

const Row = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 540px;
  margin-bottom: 100px;
  align-items: flex-end;
  @media (max-width: 1500px) {
    height: 37vw;
  }

  @media (max-width: 745px) {
    flex-direction: column;
    align-items: center;
    height: inherit;
    margin-bottom: 40px;
  }
`;

const RowR = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 540px;
  margin-bottom: 100px;
  align-items: flex-end;
  @media (max-width: 1500px) {
    height: 37vw;
  }
  @media (max-width: 745px) {
    flex-direction: column-reverse;
    align-items: center;
    height: inherit;
  }
`;

const ProjectBox = styled.div`
  width: 33%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  position: relative;
  padding: 0 30px;
  @media (max-width: 745px) {
    padding: 0;
    width: 100%;
    justify-content: center;
  }
`;

const ProjectTitleL = styled(motion.h2)`
  display: flex;
  align-items: flex-end;
  text-align: right;
  @media (max-width: 745px) {
    text-align: center;
  }
`;

const ProjectTitleR = styled(motion.h2)`
  display: flex;
  align-items: flex-end;
  text-align: left;
  @media (max-width: 745px) {
    text-align: center;
  }
`;

const ProjectSpanL = styled.span`
  z-index: 2;
  font-family: ClashGrotesk-Regular;
  font-size: 60px;
  text-transform: uppercase;
  text-align: left;
  line-height: 1;
  @media (max-width: 1080px) {
    font-size: 4.17vw;
  }
  @media (max-width: 745px) {
    text-align: center;
    font-size: 32px;
  }
`;

const ProjectSpanR = styled.span`
  z-index: 2;
  font-family: ClashGrotesk-Regular;
  font-size: 60px;
  text-transform: uppercase;
  text-align: right;
  line-height: 1;
  @media (max-width: 1080px) {
    font-size: 4.17vw;
  }
  @media (max-width: 745px) {
    text-align: center;
    font-size: 32px;
  }
`;

const ProjectDetail = styled.span`
  z-index: 2;
  font-size: 16px;
  font-weight: 400;
  margin-top: 20px;
`;

const MentionR = styled(motion.div)`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  justify-content: flex-end;
  text-align: left;
  text-transform: uppercase;
  @media (max-width: 745px) {
    text-align: center;
    justify-content: center;
  }
`;

const Mention = styled(motion.div)`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  justify-content: flex-end;
  text-transform: uppercase;
  text-align: right;
  @media (max-width: 745px) {
    text-align: center;
    justify-content: center;
  }
`;

const ProjectPhotoFrame = styled(motion.div)`
  background-size: cover;
  width: 67%;
  height: 100%;
  cursor: pointer;
  transition: opacity 0.5s ease-in-out;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.08);
  border-radius: 30px;
  overflow: hidden;
  @media (max-width: 1500px) {
    height: 37vw;
  }
  @media (max-width: 745px) {
    height: 56.25vw;
    width: 100%;
    margin-bottom: 20px;
  }
`;

const ProjectPhoto = styled(motion.div)<{ bgphoto: string; isnow: boolean }>`
  background: ${(props) => props.bgphoto};
  background-position: center center;
  opacity: ${(props) => (props.isnow ? "1" : "0.8")};
  background-size: cover;
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: opacity 0.5s ease-in-out;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.08);
  border-radius: 30px;
`;

const Ment = styled(motion.h2)`
  font-size: 16px;
  font-weight: 400;
  position: absolute;
`;

const Hidden = styled(motion.h2)`
  font-size: 16px;
  font-weight: 400;
`;

const normalVar = {
  animate: { scale: 1.1 },
  hover: { scale: 1.0, transition: { duration: 0.5 } },
};

const hoverUnderVar = {
  animate: { opacity: 1, y: -0, transition: { duration: 0.1 } },
  hover: { opacity: 0, y: 20, transition: { duration: 0.1 } },
};

const hoverOverVar = {
  animate: { opacity: 0, y: -20, transition: { duration: 0.1 } },
  hover: { opacity: 1, y: 0, transition: { duration: 0.1 } },
};

const hoverTargetBar = {
  animate: {},
  hover: {},
};
