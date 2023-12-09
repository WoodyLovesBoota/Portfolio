import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faCheck, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as Korea } from "../assets/korea.svg";
import { ReactComponent as English } from "../assets/english.svg";
import { useRecoilState } from "recoil";
import { languageState, themeState } from "../atoms";
import { motion } from "framer-motion";

const NavigationBar = ({
  onMainClick,
  onPortfolioClick,
  onExperienceClick,
  onBlogClick,
  onEducationClick,
  onContactClick,
  onServiceClick,
}: INavProps) => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [isEng, setIsEng] = useRecoilState(languageState);
  const [isDark, setIsDark] = useRecoilState(themeState);

  const onLangToggleClick = () => {
    setIsToggleOpen((current) => !current);
  };

  const onKoreaClick = () => {
    setIsToggleOpen(false);
    setIsEng(false);
  };

  const onEnglishClick = () => {
    setIsToggleOpen(false);
    setIsEng(true);
  };

  const onToggleClick = () => {
    setIsDark((current) => !current);
  };

  return (
    <Wrapper>
      <Logo onClick={onMainClick}>YTW.</Logo>
      <Contents>
        <Content variants={navVar} whileHover={"hover"} onClick={onServiceClick}>
          Services
        </Content>
        <Content variants={navVar} whileHover={"hover"} onClick={onPortfolioClick}>
          Portfolios
        </Content>
        <Content variants={navVar} whileHover={"hover"} onClick={onExperienceClick}>
          Experience
        </Content>
        <Content variants={navVar} whileHover={"hover"} onClick={onBlogClick}>
          Blog
        </Content>
        <Content variants={navVar} whileHover={"hover"} onClick={onEducationClick}>
          Education
        </Content>
        <Content variants={navVar} whileHover={"hover"} onClick={onContactClick}>
          Contacts
        </Content>
      </Contents>
      <Toggles>
        <Language>
          <LanguageToggle isDark={isDark} isOpen={isToggleOpen} onClick={onLangToggleClick}>
            <LanguageTitle>Language</LanguageTitle>
            <Icon>
              <FontAwesomeIcon icon={faChevronDown} />
            </Icon>
          </LanguageToggle>
          {isToggleOpen && (
            <LanguageList variants={listVar} initial="initial" animate="animate">
              <LanguageItem
                isDark={isDark}
                variants={hoverVar}
                whileHover={isDark ? "darkhover" : "hover"}
                onClick={onKoreaClick}
                isNow={!isEng}
              >
                <Korea width={"15px"} />
                <LanguageContent>Korean</LanguageContent>
                {!isEng && (
                  <Check>
                    <FontAwesomeIcon icon={faCheck} />
                  </Check>
                )}
              </LanguageItem>
              <LanguageItem
                isDark={isDark}
                variants={hoverVar}
                whileHover={isDark ? "darkhover" : "hover"}
                onClick={onEnglishClick}
                isNow={isEng}
              >
                <English width={"15px"} />
                <LanguageContent>English</LanguageContent>
                {isEng && (
                  <Check>
                    <FontAwesomeIcon icon={faCheck} />
                  </Check>
                )}
              </LanguageItem>
            </LanguageList>
          )}
        </Language>
        <Theme>
          <Toggle isDark={isDark} onClick={onToggleClick}>
            <Blank>
              {isDark && (
                <Circle layoutId="circle">
                  <FontAwesomeIcon icon={faMoon} />
                </Circle>
              )}
            </Blank>
            <Blank>
              {!isDark && (
                <Circle layoutId="circle">
                  <FontAwesomeIcon icon={faSun} />
                </Circle>
              )}
            </Blank>
          </Toggle>
        </Theme>
      </Toggles>
    </Wrapper>
  );
};

export default NavigationBar;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 18px 8%;
  position: absolute;
  top: 0;
  z-index: 2;
`;

const Contents = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const Logo = styled.button`
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  border: none;
  background-color: transparent;
  letter-spacing: 1px;
  color: ${(props) => props.theme.word.black};
  cursor: pointer;
`;

const Content = styled(motion.button)`
  height: 50px;
  padding: 12px 20px;
  font-size: 14px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: 500;
  border: none;
  background-color: transparent;
  letter-spacing: 1px;
  color: ${(props) => props.theme.word.main};
  cursor: pointer;
`;

const Toggles = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.word.main};
`;

const Language = styled.div``;

const Icon = styled.span`
  margin-left: 15px;
  font-size: 10px;
`;

const LanguageTitle = styled.h2`
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1px;
`;

const LanguageToggle = styled.div<{ isDark: boolean; isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background-color: ${(props) =>
    props.isOpen
      ? props.isDark
        ? "rgba(0, 0, 0, 0.7)"
        : "rgba(255, 255, 255, 0.7)"
      : props.isDark
      ? "rgba(0, 0, 0, 0.4)"
      : "rgba(255, 255, 255, 0.4)"};
  padding: 16px 20px;
  border-radius: 10px;
  position: relative;
  width: 200px;
  @media (max-width: 1200px) {
    height: 40px;
    width: 168px;
  }
`;

const LanguageList = styled(motion.div)`
  position: absolute;
  top: 90px;
  background-color: ${(props) => props.theme.bg.lighter};
  border-radius: 10px;
  width: 200px;
  @media (max-width: 1200px) {
    width: 168px;
    top: 74px;
  }
`;

const LanguageItem = styled(motion.div)<{ isDark: boolean; isNow: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px 20px;
  cursor: pointer;
  background-color: ${(props) =>
    props.isNow
      ? props.isDark
        ? "rgba(0, 0, 0, 0.7)"
        : "rgba(255, 255, 255, 0.7)"
      : props.isDark
      ? "#0000004d"
      : "#ffffff4d"};

  &:first-child {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
  &:last-child {
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }
`;

const LanguageContent = styled.div`
  font-size: 0.875rem;
  font-weight: 300;
  margin-left: 20px;
  letter-spacing: 1px;
`;

const Check = styled.h2`
  color: ${(props) => props.theme.green.accent};
  font-weight: 500;
  margin-left: auto;
`;

const Theme = styled.div`
  margin-left: 25px;
`;

const Toggle = styled(motion.div)<{ isDark: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 25px;
  width: 90px;
  height: 45px;
  padding: 4px 8px;
  color: ${(props) => (props.isDark ? props.theme.purple.accent : props.theme.yellow.accent)};
  cursor: pointer;
  background-color: ${(props) => (props.isDark ? props.theme.purple.accent : props.theme.yellow.accent)};
  @media (max-width: 1200px) {
    width: 60px;
    height: 35px;
  }
`;

const Circle = styled(motion.div)`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`;

const Blank = styled.div`
  width: 55%;
  height: 90%;
`;

interface INavProps {
  onServiceClick: React.MouseEventHandler<HTMLButtonElement>;
  onMainClick: React.MouseEventHandler<HTMLButtonElement>;
  onPortfolioClick: React.MouseEventHandler<HTMLButtonElement>;
  onExperienceClick: React.MouseEventHandler<HTMLButtonElement>;
  onBlogClick: React.MouseEventHandler<HTMLButtonElement>;
  onEducationClick: React.MouseEventHandler<HTMLButtonElement>;
  onContactClick: React.MouseEventHandler<HTMLButtonElement>;
}

const hoverVar = {
  hover: {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    transition: {
      duration: 0.1,
    },
  },
  darkhover: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    transition: {
      duration: 0.1,
    },
  },
};

const listVar = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const navVar = {
  hover: { y: -10 },
};
