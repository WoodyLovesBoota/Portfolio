import styled from "styled-components";
import { useRecoilState } from "recoil";
import { languageState } from "../atoms";
import { motion } from "framer-motion";

const NavigationBar = ({
  onMainClick,
  onPortfolioClick,
  onExperienceClick,
  onBlogClick,
  onContactClick,
  onServiceClick,
}: INavProps) => {
  const [isEng, setIsEng] = useRecoilState(languageState);

  return (
    <Wrapper>
      <Logo onClick={onMainClick}>YTW.</Logo>
      <Contents>
        <Content variants={navVar} whileHover={"hover"} onClick={onServiceClick}>
          Skills
        </Content>
        <Content variants={navVar} whileHover={"hover"} onClick={onPortfolioClick}>
          Portfolios
        </Content>
        <Content variants={navVar} whileHover={"hover"} onClick={onExperienceClick}>
          Career
        </Content>
        <Content variants={navVar} whileHover={"hover"} onClick={onBlogClick}>
          Blog
        </Content>
        <Content variants={navVar} whileHover={"hover"} onClick={onContactClick}>
          Contacts
        </Content>
      </Contents>
      <Toggles>
        <Lang
          isnow={!isEng}
          onClick={() => {
            setIsEng(false);
          }}
        >
          Kr
        </Lang>
        <Lang
          isnow={isEng}
          onClick={() => {
            setIsEng(true);
          }}
        >
          En
        </Lang>
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
  padding: 25px 72px;
  position: fixed;
  top: 0;
  z-index: 5;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(9.8px);
  @media (max-width: 800px) {
    padding: 16px;
  }
`;

const Contents = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: auto;
  @media (max-width: 1200px) {
    display: none;
  }
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
  font-size: 14px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: 400;
  border: none;
  background-color: transparent;
  letter-spacing: 1px;
  color: ${(props) => props.theme.word.main};
  cursor: pointer;
  margin-right: 50px;
`;

const Toggles = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.word.main};
  margin-left: 50px;
`;

const Lang = styled.h2<{ isnow: boolean }>`
  font-size: 14px;
  font-weight: 400;
  margin-left: 30px;
  text-decoration: ${(props) => props.isnow && "underline"};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
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
