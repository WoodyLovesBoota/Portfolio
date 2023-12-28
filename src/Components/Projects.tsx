import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import projectData from "../projectData.json";
import Header from "./Header";
import { forwardRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(-1);
  const onProjectClick = (name: string) => {
    navigate(`/${name}`);
  };
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();
  const controls6 = useAnimation();

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
    controls.start({ y: -100 + scrollY / 40 });
    controls1.start({ opacity: -20.5 + scrollY / 100 });
    controls2.start({ opacity: -24.5 + scrollY / 100 });
    controls3.start({ opacity: -28.5 + scrollY / 100 });
    controls4.start({ opacity: -32.5 + scrollY / 100 });
    controls5.start({ opacity: -36.5 + scrollY / 100 });
    controls6.start({ opacity: -40.5 + scrollY / 100 });
  }, [scrollY, controls]);

  return (
    <Wrapper ref={ref}>
      <Title>
        <span>S</span>
        elected projects
      </Title>
      <Main>
        <Row>
          <LeftSide></LeftSide>
          <RightSide></RightSide>
        </Row>
        {projectData.map((project, index) => (
          <Row>
            <LeftSide>
              {index % 2 === 1 && (
                <ProjectBoxL>
                  {isHover === index && (
                    <CircleL variants={hoverVar} initial="initial" animate="animate" />
                  )}
                  <ProjectTitleL animate={[controls2, controls4, controls6][Math.floor(index / 2)]}>
                    <Mention
                      onClick={() => {
                        onProjectClick(project.projectName);
                      }}
                      onMouseOver={() => {
                        setIsHover(index);
                      }}
                      onMouseLeave={() => {
                        setIsHover(-1);
                      }}
                    >
                      <ProjectSpanL>{project.projectName}</ProjectSpanL>
                      <ProjectDetail>{project.subtitle}</ProjectDetail>
                    </Mention>
                    <TitleBoxL />
                  </ProjectTitleL>
                  <ProjectPhoto
                    animate={controls}
                    onClick={() => {
                      onProjectClick(project.projectName);
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
                </ProjectBoxL>
              )}
            </LeftSide>
            <RightSide>
              {index % 2 === 0 && (
                <ProjectBoxR>
                  {isHover === index && (
                    <CircleR variants={hoverVar} initial="initial" animate="animate" />
                  )}
                  <ProjectTitleR animate={[controls1, controls3, controls5][Math.floor(index / 2)]}>
                    <TitleBox />
                    <Mention
                      onClick={() => {
                        onProjectClick(project.projectName);
                      }}
                      onMouseOver={() => {
                        setIsHover(index);
                      }}
                      onMouseLeave={() => {
                        setIsHover(-1);
                      }}
                    >
                      <ProjectSpanR>{project.projectName}</ProjectSpanR>
                      <ProjectDetail>{project.subtitle}</ProjectDetail>
                    </Mention>
                  </ProjectTitleR>
                  <ProjectPhoto
                    animate={controls}
                    onClick={() => {
                      onProjectClick(project.projectName);
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
                </ProjectBoxR>
              )}
            </RightSide>
          </Row>
        ))}
      </Main>
    </Wrapper>
  );
});

export default Projects;

const Wrapper = styled.div`
  width: 100%;
  padding-top: 350px;
  perspective: 1px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 18px;
  span {
    color: #e74946;
    font-weight: 500;
    font-size: 18px;
  }
`;

const Main = styled.div`
  margin-top: 30px;
`;

const Row = styled.div`
  display: flex;
  width: 100vw;
`;

const LeftSide = styled.div`
  width: 50%;
  height: 25vw;
  border-right: 0.5px solid gray;
`;

const RightSide = styled.div`
  width: 50%;
  height: 25vw;
  border-left: 0.5px solid gray;
`;

const ProjectBoxL = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-right: 130px;
  position: relative;
`;

const ProjectBoxR = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 130px;
  position: relative;
`;

const ProjectTitleL = styled(motion.h2)`
  position: absolute;
  right: -30px;
  padding: 20px;
  display: flex;
  align-items: center;
`;

const ProjectTitleR = styled(motion.h2)`
  position: absolute;
  left: -30px;
  padding: 20px;
  display: flex;
  align-items: center;
`;

const TitleBox = styled.div`
  background-color: white;
  width: 30px;
  height: 100px;
  z-index: 1;
  position: absolute;
`;

const TitleBoxL = styled.div`
  background-color: white;
  width: 30px;
  height: 100px;
  z-index: 1;
  position: absolute;
  right: 0;
  text-align: right;
`;

const CircleL = styled(motion.div)`
  background-color: black;
  width: 10px;
  height: 10px;
  border-radius: 100px;
  position: absolute;
  right: -40px;
  z-index: 5;
`;

const CircleR = styled(motion.div)`
  background-color: black;
  width: 10px;
  height: 10px;
  border-radius: 100px;
  position: absolute;
  left: -40px;
  z-index: 5;
`;

const ProjectSpanL = styled.span`
  z-index: 2;
  font-size: 24px;
  font-weight: 400;
  text-align: right;
`;

const ProjectSpanR = styled.span`
  z-index: 2;
  font-size: 24px;
  font-weight: 400;
  text-align: left;
`;

const ProjectDetail = styled.span`
  z-index: 2;
  font-size: 16px;
  font-weight: 300;
`;

const Mention = styled(motion.div)`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;
`;

const ProjectPhoto = styled(motion.div)<{ bgphoto: string; isnow: boolean }>`
  background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),
    ${(props) => props.bgphoto};
  background-position: center center;
  opacity: ${(props) => (props.isnow ? "1" : "0.8")};
  background-size: cover;
  width: 100%;
  height: 150%;
  cursor: pointer;
  transition: opacity 0.5s ease-in-out;
`;

// const Main = styled.div
//   padding: 72px 0;
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   grid-gap: 5px;
//   justify-content: space-between;
//   @media (max-width: 1200px) {
//     grid-template-columns: repeat(1, 1fr);
//     grid-gap: 10px;
//     padding: 45px 0;
//   }
// `;

const hoverVar = {
  initial: { scale: 0 },
  animate: { scale: 1, transition: { duration: 0.5 } },
};

const normalVar = {
  intial: {},
  animate: {},
  hover: {},
};
