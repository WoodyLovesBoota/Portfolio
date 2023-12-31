import styled from "styled-components";
import { PathMatch, useMatch, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import projectData from "../projectData.json";
import { useEffect, useRef } from "react";
import { languageState } from "../atoms";

import NavigationBar from "../Components/NavigationBar";

import { useRecoilValue } from "recoil";

const Portfolio = () => {
  const navigate = useNavigate();

  const isEng = useRecoilValue(languageState);

  const projectMatch: PathMatch<string> | null = useMatch("/:name");

  const mainRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const onMainClick = () => {
    navigate("/");
  };

  const onServiceClick = () => {
    navigate("/");
  };

  const onPortfolioClick = () => {
    navigate("/");
    portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onExperienceClick = () => {
    navigate("/");
  };

  const onBlogClick = () => {
    navigate("/");
  };

  const onEducationClick = () => {
    navigate("/");
  };

  const onContactClick = () => {
    navigate("/");
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
      {projectMatch && (
        <Container>
          <TitleRow>
            <Title>{projectMatch.params.name}</Title>
            <TitleImage
              bgphoto={`url(${
                projectData[
                  projectData.findIndex((e) => e.projectName === projectMatch.params.name)
                ].image[0]
              })`}
            />
          </TitleRow>
          <DescriptionRow>
            <Skills>
              <SkillTitle>Skill</SkillTitle>
              {projectData[
                projectData.findIndex((e) => e.projectName === projectMatch.params.name)
              ].skill.map((skill) => (
                <Skill>{skill}</Skill>
              ))}
            </Skills>
            <Description>
              {isEng
                ? projectData[
                    projectData.findIndex((e) => e.projectName === projectMatch.params.name)
                  ].detailDesc
                : projectData[
                    projectData.findIndex((e) => e.projectName === projectMatch.params.name)
                  ].detailDescKor}
              <Buttons>
                <Button
                  variants={hoverVar}
                  whileHover={"hover"}
                  href={
                    projectData[
                      projectData.findIndex((e) => e.projectName === projectMatch.params.name)
                    ].demo
                  }
                  target="_blank"
                >
                  See the website
                </Button>
                <Button
                  variants={hoverVar}
                  whileHover={"hover"}
                  href={
                    projectData[
                      projectData.findIndex((e) => e.projectName === projectMatch.params.name)
                    ].gibhub
                  }
                  target="_blank"
                >
                  See code
                </Button>
              </Buttons>
            </Description>
          </DescriptionRow>
          <ImageRow>
            {projectData[
              projectData.findIndex((e) => e.projectName === projectMatch.params.name)
            ].image
              .slice(1)
              .map((e, index) => (
                <MainImage src={e} />
              ))}
          </ImageRow>
          <PageButtons>
            <PageButton
              onClick={() => {
                navigate(
                  `/${
                    projectData[
                      (projectData.findIndex((e) => e.projectName === projectMatch.params.name) -
                        1) %
                        projectData.length
                    ].projectName
                  }`
                );
              }}
            >
              Prev
            </PageButton>
            <PageButton
              onClick={() => {
                navigate(
                  `/${
                    projectData[
                      (projectData.findIndex((e) => e.projectName === projectMatch.params.name) +
                        1) %
                        projectData.length
                    ].projectName
                  }`
                );
              }}
            >
              Next
            </PageButton>
          </PageButtons>
        </Container>
      )}
    </Wrapper>
  );
};

export default Portfolio;

const Wrapper = styled.div`
  width: 100vw;
`;

const Container = styled.div`
  padding-top: 150px;
  padding-bottom: 100px;
`;

const MainImage = styled(motion.img)`
  width: 80%;
  height: auto;
  margin-top: 50px;
`;

const TitleRow = styled.div`
  display: flex;
`;

const Title = styled.h2`
  font-size: 90px;
  font-weight: 400;
  padding-left: 200px;
  padding-top: 160px;
  word-break: normal;
`;

const TitleImage = styled.div<{ bgphoto: string }>`
  width: 60%;
  height: 40vw;
  background: ${(props) => props.bgphoto};
  background-position: center;
  background-size: cover;
  margin-left: auto;
`;

const DescriptionRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 150px;
`;

const SkillTitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const Skills = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
`;

const Skill = styled.h2`
  color: gray;
  font-size: 14px;
  padding-left: 10px;
`;

const Description = styled.h2`
  width: 20%;
  font-size: 16px;
  font-weight: 400;
  line-height: 2;
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
`;

const Button = styled(motion.a)`
  background-color: transparent;
  font-size: 14px;
  font-weight: 300;
  color: #999999;
  cursor: pointer;
  margin-right: 40px;
`;

const ImageRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const PageButtons = styled.div`
  width: 100%;
  padding: 0 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 100px;
`;

const PageButton = styled.button`
  background-color: transparent;
  font-weight: 400;
  font-size: 18px;
  cursor: pointer;
`;

const hoverVar = {
  hover: {
    color: "#000000",
  },
};
