import styled from "styled-components";
import { PathMatch, useMatch, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import projectData from "../projectData.json";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown, faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useRecoilValue } from "recoil";
import { languageState } from "../atoms";

const Portfolio = () => {
  const navigate = useNavigate();
  const [clickedPhoto, setClickedPhoto] = useState(0);
  const [nowPhoto, setNowPhoto] = useState(1);
  const isEng = useRecoilValue(languageState);

  const colors = ["red", "orange", "blue", "green", "yellow", "purple"];
  const projectMatch: PathMatch<string> | null = useMatch("/project/:title/:num");

  const handleGoBackClicked = () => {
    navigate("/");
  };

  const handlePhotoClicked = (photoNum: number) => {
    setClickedPhoto(photoNum);
  };

  const handleUpClicked = () => {
    if (nowPhoto < 3) {
      setNowPhoto((current) => 99 + current);
    } else setNowPhoto((current) => current - 3);
  };

  const handleDownClicked = () => {
    setNowPhoto((current) => current + 3);
  };

  return (
    <Container>
      {projectMatch && (
        <Wrapper bgColor={colors[Number(projectMatch.params.num)]}>
          <PhotoBox>
            <PhotoCard>
              <Photo bgPhoto={projectData[Number(projectMatch.params.num)].image[clickedPhoto]} />
            </PhotoCard>
            <Photos>
              <UpButton onClick={handleUpClicked}>
                <FontAwesomeIcon icon={faChevronUp} />
              </UpButton>
              <AnimatePresence>
                {[nowPhoto, nowPhoto + 1, nowPhoto + 2].map((e) => (
                  <SmallPhoto
                    variants={photoVar}
                    initial="initial"
                    animate="animate"
                    exit={"exit"}
                    whileHover={"hover"}
                    onClick={() => {
                      handlePhotoClicked(e % projectData[Number(projectMatch.params.num)].image.length);
                    }}
                    bgPhoto={
                      projectData[Number(projectMatch.params.num)].image[
                        e % projectData[Number(projectMatch.params.num)].image.length
                      ]
                    }
                  />
                ))}
              </AnimatePresence>
              <DownButton onClick={handleDownClicked}>
                <FontAwesomeIcon icon={faChevronDown} />
              </DownButton>
            </Photos>
          </PhotoBox>
          <Buttons>
            <Button
              variants={hoverVar}
              whileHover={"hover"}
              href={projectData[Number(projectMatch.params.num)].demo}
              target="_blank"
              color={colors[Number(projectMatch.params.num)]}
            >
              DEMO
            </Button>
            <Button
              variants={hoverVar}
              whileHover={"hover"}
              href={projectData[Number(projectMatch.params.num)].gibhub}
              target="_blank"
              color={colors[Number(projectMatch.params.num)]}
            >
              CODE
            </Button>
          </Buttons>
          <Title>
            <GoBack
              variants={hoverVar}
              whileHover={"hover"}
              color={colors[Number(projectMatch.params.num)]}
              onClick={handleGoBackClicked}
            >
              <FontAwesomeIcon icon={faLeftLong} />
            </GoBack>
            {projectMatch.params.title}
          </Title>
          <Skills>
            {projectData[Number(projectMatch.params.num)].skill.map((skill) => (
              <SkillCircle>{skill}</SkillCircle>
            ))}
          </Skills>
          {isEng ? (
            <Description>{projectData[Number(projectMatch.params.num)].detailDesc}</Description>
          ) : (
            <Description>{projectData[Number(projectMatch.params.num)].detailDescKor}</Description>
          )}
        </Wrapper>
      )}
    </Container>
  );
};

export default Portfolio;

const Wrapper = styled.div<{ bgColor: string }>`
  width: 100vw;
  background-color: ${(props) => {
    return props.theme[props.bgColor].accent;
  }};
  color: white;
  padding: 8% 72px;
  min-height: 100vh;
  @media (max-width: 800px) {
    padding: 8% 16px;
  }
`;

const Container = styled.div``;

const PhotoBox = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 20px 0px white;
  padding: 0.625rem;
`;

const UpButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: 30px;
  cursor: pointer;
  font-weight: 500;
  background: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));
`;

const DownButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30px;
  cursor: pointer;
  font-weight: 500;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));
`;

const Photos = styled.div`
  display: flex;
  flex-direction: column;
  height: 35vw;
  width: 23vw;
  overflow-y: scroll;
  position: relative;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const PhotoCard = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 70vw;
  height: 35vw;
  @media (max-width: 1200px) {
    width: 90vw;
    height: 45vw;
  }
`;

const Photo = styled.div<{ bgPhoto: string }>`
  background-image: url(${(props) => props.bgPhoto});
  background-position: top center;
  background-size: cover;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 15px;
  cursor: pointer;
`;

const SmallPhoto = styled(motion.div)<{ bgPhoto: string }>`
  background-image: url(${(props) => props.bgPhoto});
  background-position: top center;
  background-size: cover;
  width: 100%;
  height: 33.33%;
  cursor: pointer;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 500;
  margin-top: 6.25rem;
  margin-bottom: 3.125rem;
  border-bottom: 0.125rem solid white;
  padding: 1.25rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  @media (max-width: 800px) {
    margin-top: 3.125rem;
  }
`;

const Description = styled.h2`
  font-size: 21px;
  font-weight: 400;
  line-height: 2.4;
  @media (max-width: 800px) {
    font-size: 16px;
  }
`;

const Skills = styled.h2`
  display: flex;
  margin-bottom: 4.375rem;
`;

const SkillCircle = styled.div`
  font-size: 14px;
  border-radius: 6px;
  padding: 6px 12px;
  margin-right: 10px;
  border: 1.5px solid white;
  font-weight: 500;
`;

const Buttons = styled.div`
  margin-top: 1.875rem;
  display: flex;
`;

const Button = styled(motion.a)<{ color: string }>`
  background-color: white;
  color: ${(props) => {
    return props.theme[props.color].accent;
  }};
  padding: 0.9375rem 1.5625rem;
  font-weight: 700;
  font-size: 14px;
  border-radius: 15px;
  margin-right: 15px;
  cursor: pointer;
`;

const GoBack = styled(motion.button)<{ color: string }>`
  background-color: white;
  color: ${(props) => {
    return props.theme[props.color].accent;
  }};
  padding: 10px;
  font-size: 14px;
  border-radius: 50px;
  margin-right: 20px;
  cursor: pointer;
`;

const hoverVar = {
  hover: {
    backgroundColor: "#ffffff22",
    color: "#ffffff",
  },
};

const photoVar = {
  initial: {},
  animate: {},
  exit: {},
};
