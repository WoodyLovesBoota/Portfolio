import styled from "styled-components";
import { useRecoilState } from "recoil";
import { languageState } from "../atoms";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PortfolioNaviagationBar = () => {
  const [isEng, setIsEng] = useRecoilState(languageState);

  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const [scrollY, setScrollY] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onMainClick = () => {
    navigate("/");
  };

  return (
    <Wrapper istop={scrollY === 0}>
      <Logo onClick={onMainClick}>YTW.</Logo>
      <Contents>
        <Content variants={hoverTargetBar} animate="animate" whileHover={"hover"}>
          <Ment variants={hoverOverVar}>PORTFOLIO </Ment>
          <Hidden variants={hoverUnderVar}>PORTFOLIO </Hidden>
        </Content>
        <Content variants={hoverTargetBar} animate="animate" whileHover={"hover"}>
          <Ment variants={hoverOverVar}>BLOG </Ment>
          <Hidden variants={hoverUnderVar}>BLOG </Hidden>
        </Content>
        <Content variants={hoverTargetBar} animate="animate" whileHover={"hover"}>
          <Ment variants={hoverOverVar}>CONTACT </Ment>
          <Hidden variants={hoverUnderVar}>CONTACT </Hidden>
        </Content>
        <Toggles>
          {isEng ? (
            <Lang
              isnow={isEng}
              onMouseOver={() => {
                setIsToggleOpen(true);
              }}
              onMouseLeave={() => {
                setIsToggleOpen(false);
              }}
            >
              EN
              <Icon>
                <FontAwesomeIcon icon={faAngleDown} />
              </Icon>
              {isToggleOpen &&
                (isEng ? (
                  <ToggleList istop={scrollY === 0}>
                    <LangChoicedBar
                      onClick={() => {
                        setIsToggleOpen(false);
                      }}
                    >
                      ENGLISH
                    </LangChoicedBar>
                    <LangBar
                      onClick={() => {
                        setIsEng(false);
                        setIsToggleOpen(false);
                      }}
                    >
                      KOREAN
                    </LangBar>
                  </ToggleList>
                ) : (
                  <ToggleList istop={scrollY === 0}>
                    <LangChoicedBar
                      onClick={() => {
                        setIsToggleOpen(false);
                      }}
                    >
                      KOREAN
                    </LangChoicedBar>
                    <LangBar
                      onClick={() => {
                        setIsEng(true);
                        setIsToggleOpen(false);
                      }}
                    >
                      ENGLISH
                    </LangBar>
                  </ToggleList>
                ))}
            </Lang>
          ) : (
            <Lang
              isnow={!isEng}
              onMouseOver={() => {
                setIsToggleOpen(true);
              }}
              onMouseLeave={() => {
                setIsToggleOpen(false);
              }}
            >
              KR
              <Icon>
                <FontAwesomeIcon icon={faAngleDown} />
              </Icon>
              {isToggleOpen &&
                (isEng ? (
                  <ToggleList istop={scrollY === 0}>
                    <LangChoicedBar
                      onClick={() => {
                        setIsToggleOpen(false);
                      }}
                    >
                      ENGLISH
                    </LangChoicedBar>
                    <LangBar
                      onClick={() => {
                        setIsEng(false);
                        setIsToggleOpen(false);
                      }}
                    >
                      KOREAN
                    </LangBar>
                  </ToggleList>
                ) : (
                  <ToggleList istop={scrollY === 0}>
                    <LangChoicedBar
                      onClick={() => {
                        setIsToggleOpen(false);
                      }}
                    >
                      KOREAN
                    </LangChoicedBar>
                    <LangBar
                      onClick={() => {
                        setIsEng(true);
                        setIsToggleOpen(false);
                      }}
                    >
                      ENGLISH
                    </LangBar>
                  </ToggleList>
                ))}
            </Lang>
          )}
        </Toggles>
      </Contents>
    </Wrapper>
  );
};

export default PortfolioNaviagationBar;

const Wrapper = styled.div<{ istop: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  height: ${(props) => (props.istop ? "80px" : "60px")};
  padding: 0 30px;
  background-color: white;
  top: 0;
  z-index: 105;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.03), 0px 1px 1px 0px rgba(0, 0, 0, 0.01),
    0px 0px 50px 0px rgba(0, 0, 0, 0.07);
  transition: height 0.3s ease-in-out;
  @media (max-width: 745px) {
    padding: 0 20px;
  }
  @media (max-width: 745px) {
    height: 65px;
  }
`;

const ToggleList = styled.div<{ istop: boolean }>`
  position: absolute;
  top: ${(props) => (props.istop ? "80px" : "70px")};
  right: 0px;
  width: 220px;
`;

const LangBar = styled.h2`
  font-size: 16px;
  line-height: 2;
  background-color: black;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  color: white;
  width: 100%;
  &:hover {
    background-color: #262626;
  }
  transition: background-color 0.2s ease-in-out;
`;

const LangChoicedBar = styled.h2`
  font-size: 16px;
  line-height: 2;
  background-color: black;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  color: white;
  width: 100%;
  &:hover {
    background-color: #262626;
  }
  transition: background-color 0.2s ease-in-out;
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Logo = styled.button`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  border: none;
  background-color: transparent;
  letter-spacing: 1px;
  color: black;
  cursor: pointer;
`;

const Content = styled(motion.button)`
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.word.main};
  cursor: pointer;
  margin-right: 30px;
  transform-origin: center left;
  @media (max-width: 745px) {
    display: none;
  }
`;

const UnderBar = styled(motion.div)`
  background-color: black;
  width: 100%;
  height: 1px;
`;

const Toggles = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
`;

const Lang = styled.h2<{ isnow: boolean }>`
  font-size: 16px;
  font-weight: 400;
  text-decoration: ${(props) => props.isnow && "underline"};
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 80px;
`;

const Icon = styled.h2`
  font-size: 14px;
  margin-left: 10px;
`;

const Hidden = styled(motion.h2)`
  font-size: 16px;
  font-weight: 400;
  display: flex;
  align-items: center;
`;

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
