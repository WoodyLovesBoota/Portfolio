import styled from "styled-components";

const NavigationBar = () => {
  return (
    <Wrapper>
      <Contents>
        <Content>Home</Content>
        <Content>Projects</Content>
        <Content>About</Content>
      </Contents>
      <Contact>Contact Us</Contact>
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
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const Content = styled.button`
  height: 3.125rem;
  padding: 12px 20px;
  font-size: 1.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
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
