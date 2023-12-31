import styled from "styled-components";
import { useRecoilState } from "recoil";
import { languageState } from "../atoms";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const NavigationBar = ({
  onMainClick,
  onPortfolioClick,
  onExperienceClick,
  onBlogClick,
  onContactClick,
  onServiceClick,
}: INavProps) => {
  const [isEng, setIsEng] = useRecoilState(languageState);

  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <Wrapper>
      <Logo onClick={onMainClick}>YTW.</Logo>
      <Contents>
        <Content
          variants={hoverTargetBar}
          animate="animate"
          whileHover={"hover"}
          onClick={onPortfolioClick}
        >
          <Ment>
            PORTFOLIO
            <UnderBar variants={hoverUnderVar} />
          </Ment>
        </Content>
        <Content
          variants={hoverTargetBar}
          animate="animate"
          whileHover={"hover"}
          onClick={onBlogClick}
        >
          <Ment>
            BLOG
            <UnderBar variants={hoverUnderVar} />
          </Ment>
        </Content>
        <Content
          variants={hoverTargetBar}
          animate="animate"
          whileHover={"hover"}
          onClick={onContactClick}
        >
          <Ment>
            CONTACT
            <UnderBar variants={hoverUnderVar} />
          </Ment>
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
                  <ToggleList>
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
                  <ToggleList>
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
                  <ToggleList>
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
                  <ToggleList>
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

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  height: 80px;
  padding: 0 30px;
  background-color: white;
  top: 0;
  z-index: 105;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.03), 0px 1px 1px 0px rgba(0, 0, 0, 0.01),
    0px 0px 50px 0px rgba(0, 0, 0, 0.07);
  @media (max-width: 745px) {
    padding: 0 20px;
  }
`;

const ToggleList = styled.div`
  position: absolute;
  top: 80px;
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
  /* height: 40px; */
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
`;

const Ment = styled.h2`
  font-size: 16px;
  font-weight: 400;
`;

const UnderBar = styled(motion.div)`
  background-color: black;
  width: 100%;
  height: 1px;
`;

const Toggles = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.word.main};
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

interface INavProps {
  onServiceClick: React.MouseEventHandler<HTMLButtonElement>;
  onMainClick: React.MouseEventHandler<HTMLButtonElement>;
  onPortfolioClick: React.MouseEventHandler<HTMLButtonElement>;
  onExperienceClick: React.MouseEventHandler<HTMLButtonElement>;
  onBlogClick: React.MouseEventHandler<HTMLButtonElement>;
  onContactClick: React.MouseEventHandler<HTMLButtonElement>;
}

const navVar = {
  hover: { textDecoration: "underline", transition: { duration: 0.5 } },
};

const hoverTargetBar = {
  animate: {},
  hover: {},
};

const hoverUnderVar = {
  animate: { width: 0 },
  hover: { width: "100%" },
};
