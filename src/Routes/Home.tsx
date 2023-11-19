import styled from "styled-components";
import MainContent from "../Components/MainContent";
import About from "../Components/About";

const Home = () => {
  return (
    <Wrapper>
      <MainContent />
      <About />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  width: 100vw;
`;
