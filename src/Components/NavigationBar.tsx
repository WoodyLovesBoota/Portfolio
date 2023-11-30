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
        <Content onClick={onServiceClick}>Services</Content>
        <Content onClick={onPortfolioClick}>Portfolios</Content>
        <Content onClick={onExperienceClick}>Experience</Content>
        <Content onClick={onBlogClick}>Blog</Content>
        <Content onClick={onEducationClick}>Education</Content>
        <Content onClick={onContactClick}>Contacts</Content>
      </Contents>
      <Toggles>
        <Language>
          <LanguageToggle isOpen={isToggleOpen} onClick={onLangToggleClick}>
            <LanguageTitle>Language</LanguageTitle>
            <Icon>
              <FontAwesomeIcon icon={faChevronDown} />
            </Icon>
          </LanguageToggle>
          {isToggleOpen && (
            <LanguageList variants={listVar} initial="initial" animate="animate">
              <LanguageItem variants={hoverVar} whileHover={"hover"} onClick={onKoreaClick} isNow={!isEng}>
                <Korea width={"15px"} />
                <LanguageContent>Korean</LanguageContent>
                {!isEng && (
                  <Check>
                    <FontAwesomeIcon icon={faCheck} />
                  </Check>
                )}
              </LanguageItem>
              <LanguageItem variants={hoverVar} whileHover={"hover"} onClick={onEnglishClick} isNow={isEng}>
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
  padding: 1.125rem 8%;
  position: absolute;
  top: 0;
  z-index: 2;
`;

const Contents = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Logo = styled.button`
  height: 3.125rem;
  font-size: 1.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  border: none;
  background-color: transparent;
  letter-spacing: 0.0625rem;
  color: ${(props) => props.theme.word.black};
  cursor: pointer;
`;

const Content = styled.button`
  height: 3.125rem;
  padding: 0.75rem 1.25rem;
  font-size: 0.875rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: 500;
  border: none;
  background-color: transparent;
  letter-spacing: 0.0625rem;
  color: ${(props) => props.theme.word.main};
  cursor: pointer;
`;

const Toggles = styled.div`
  display: flex;
  align-items: center;
`;

const Language = styled.div``;

const Icon = styled.span`
  margin-left: 15px;
  font-size: 10px;
`;

const LanguageTitle = styled.h2`
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.0625rem;
`;

const LanguageToggle = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background-color: ${(props) => (props.isOpen ? "rgba(255, 255, 255, 0.7)" : "rgba(255, 255, 255, 0.4)")};
  padding: 1.25rem;
  border-radius: 0.625rem;
  position: relative;
  width: 12.5rem;
`;

const LanguageList = styled(motion.div)`
  position: absolute;
  top: 5.625rem;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 0.625rem;
  width: 12.5rem;
`;

const LanguageItem = styled(motion.div)<{ isNow: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.9375rem 1.25rem;
  cursor: pointer;
  background-color: ${(props) => props.isNow && "rgba(255, 255, 255, 0.7)"};
  &:first-child {
    border-top-right-radius: 0.625rem;
    border-top-left-radius: 0.625rem;
  }
  &:last-child {
    border-bottom-right-radius: 0.625rem;
    border-bottom-left-radius: 0.625rem;
  }
`;

const LanguageContent = styled.div`
  font-size: 0.875rem;
  font-weight: 300;
  margin-left: 1.25rem;
  letter-spacing: 0.0625rem;
`;

const Check = styled.h2`
  color: ${(props) => props.theme.green.accent};
  font-weight: 500;
  margin-left: auto;
`;

const Theme = styled.div`
  margin-left: 1.5625rem;
`;

const Toggle = styled(motion.div)<{ isDark: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 1.5625rem;
  width: 5.625rem;
  height: 2.8125rem;
  padding: 0.25rem 0.5rem;
  color: ${(props) => (props.isDark ? props.theme.purple.accent : props.theme.yellow.accent)};
  cursor: pointer;
  background-color: ${(props) => (props.isDark ? props.theme.purple.accent : props.theme.yellow.accent)};
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
  width: 45%;
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
};

const listVar = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};
