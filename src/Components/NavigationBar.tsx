import styled from "styled-components";
import { useRecoilState } from "recoil";
import { languageState } from "../atoms";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const NavigationBar = ({
  onMainClick,
  onPortfolioClick,
  onBlogClick,
  onContactClick,
  mainRef,
  portFolioRef,
  contactRef,
  blogRef,
}: INavProps) => {
  const [isEng, setIsEng] = useRecoilState(languageState);

  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const [scrollY, setScrollY] = useState(0);

  const [isnow, setIsnow] = useState(0);

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
    if (
      mainRef.current?.scrollHeight &&
      portFolioRef.current?.scrollHeight &&
      blogRef.current?.scrollHeight &&
      contactRef.current?.scrollHeight
    ) {
      if (scrollY < mainRef.current?.scrollHeight + 300) setIsnow(0);
      else if (
        scrollY > mainRef.current?.scrollHeight + 300 &&
        scrollY < mainRef.current?.scrollHeight + portFolioRef.current.scrollHeight + 300
      ) {
        setIsnow(1);
      } else if (
        scrollY > mainRef.current?.scrollHeight + portFolioRef.current.scrollHeight + 300 &&
        scrollY <
          mainRef.current?.scrollHeight +
            portFolioRef.current.scrollHeight +
            blogRef.current.scrollHeight +
            300
      ) {
        setIsnow(2);
      } else if (
        scrollY >
        mainRef.current?.scrollHeight +
          portFolioRef.current.scrollHeight +
          blogRef.current.scrollHeight +
          300
      ) {
        setIsnow(3);
      }
    }
  }, [scrollY]);

  return (
    <Wrapper istop={scrollY === 0}>
      <Logo onClick={onMainClick}>YTW.</Logo>
      <Contents>
        <Content
          variants={hoverTargetBar}
          animate="animate"
          whileHover={"hover"}
          onClick={onPortfolioClick}
        >
          <Ment variants={hoverOverVar}>
            PORTFOLIO
            {isnow === 1 && <UnderBar variants={underVar} initial="initial" animate="animate" />}
          </Ment>
          <Hidden variants={hoverUnderVar}>
            PORTFOLIO
            {isnow === 1 && <UnderBar variants={underVar} initial="initial" animate="animate" />}
          </Hidden>
        </Content>
        <Content
          variants={hoverTargetBar}
          animate="animate"
          whileHover={"hover"}
          onClick={onBlogClick}
        >
          <Ment variants={hoverOverVar}>
            BLOG
            {isnow === 2 && <UnderBar variants={underVar} initial="initial" animate="animate" />}
          </Ment>
          <Hidden variants={hoverUnderVar}>
            BLOG
            {isnow === 2 && <UnderBar variants={underVar} initial="initial" animate="animate" />}
          </Hidden>
        </Content>
        <Content
          variants={hoverTargetBar}
          animate="animate"
          whileHover={"hover"}
          onClick={onContactClick}
        >
          <Ment variants={hoverOverVar}>
            CONTACT
            {isnow === 3 && <UnderBar variants={underVar} initial="initial" animate="animate" />}
          </Ment>
          <Hidden variants={hoverUnderVar}>
            CONTACT
            {isnow === 3 && <UnderBar variants={underVar} initial="initial" animate="animate" />}
          </Hidden>
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
              <LanguageName>
                EN
                <UnderBar />
              </LanguageName>
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
              <LanguageName>
                KR
                <UnderBar />
              </LanguageName>
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

export default NavigationBar;

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
  background-color: white;
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
  overflow: hidden;
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
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 80px;
`;

const LanguageName = styled.h2`
  font-size: 16px;
  font-weight: 400;
`;

const Icon = styled.h2`
  font-size: 14px;
  margin-left: 10px;
`;

const Hidden = styled(motion.h2)`
  font-size: 16px;
  font-weight: 400;
`;

const Ment = styled(motion.h2)`
  font-size: 16px;
  font-weight: 400;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

interface INavProps {
  onMainClick: React.MouseEventHandler<HTMLButtonElement>;
  onPortfolioClick: React.MouseEventHandler<HTMLButtonElement>;
  onExperienceClick: React.MouseEventHandler<HTMLButtonElement>;
  onBlogClick: React.MouseEventHandler<HTMLButtonElement>;
  onContactClick: React.MouseEventHandler<HTMLButtonElement>;
  mainRef: React.RefObject<HTMLDivElement>;
  portFolioRef: React.RefObject<HTMLDivElement>;
  blogRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const hoverUnderVar = {
  animate: { opacity: 1, y: -0, transition: { duration: 0.15 } },
  hover: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const hoverOverVar = {
  animate: { opacity: 0, y: -20, transition: { duration: 0.15 } },
  hover: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

const hoverTargetBar = {
  animate: {},
  hover: {},
};

const underVar = {
  initial: { width: 0 },
  animate: { width: "100%" },
};
