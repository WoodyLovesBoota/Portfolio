import styled from "styled-components";

const NavigationBar = ({
  onMainClick,
  onPortfolioClick,
  onExperienceClick,
  onBlogClick,
  onEducationClick,
  onContactClick,
  onServiceClick,
}: INavProps) => {
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
`;

const Logo = styled.button`
  height: 3.125rem;
  padding: 12px 0;
  font-size: 1.125rem;
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

const Content = styled.button`
  height: 3.125rem;
  padding: 12px 20px;
  font-size: 0.875rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: 600;
  border: none;
  background-color: transparent;
  letter-spacing: 1px;
  color: ${(props) => props.theme.word.main};
  cursor: pointer;
`;

const Contact = styled.button`
  padding: 12px 20px;
  font-size: 1.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  background-color: ${(props) => props.theme.main.accent};
  border: none;
  color: white;
  letter-spacing: 1px;
  cursor: pointer;
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
