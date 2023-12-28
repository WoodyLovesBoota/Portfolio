import styled from "styled-components";
import Header from "./Header";
import { forwardRef } from "react";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import { useRecoilValue } from "recoil";
import { languageState, themeState } from "../atoms";

const MainContent = forwardRef<HTMLDivElement>((props, ref) => {
  const isEng = useRecoilValue(languageState);
  const isDark = useRecoilValue(themeState);

  return (
    <Wrapper ref={ref}>
      <Container>
        <Main>
          <Contents>
            <Introduce>
              <Title>
                양태욱
                <br />
                YANG TAE WOOK
              </Title>
              <SubTitle>FRONT-END WEB DEVELOPER / BLOCK-CHAIN DEVELOPER</SubTitle>
            </Introduce>
            <Links>
              <Link>
                <LinkContent target="_blank" href="https://github.com/WoodyLovesBoota">
                  GITHUB
                </LinkContent>
              </Link>
              <Link>
                <LinkContent target="_blank" href="https://www.instagram.com/tttaeook/">
                  INSTAGRAM
                </LinkContent>
              </Link>
              <Link>
                <LinkContent
                  target="_blank"
                  href="https://www.linkedin.com/in/tae-wook-yang-6762092a2/"
                >
                  LINKEDIN
                </LinkContent>
              </Link>
              <Link>
                <LinkContent target="_blank" href="https://velog.io/@woodylovescoding">
                  BLOG
                </LinkContent>
              </Link>
            </Links>
          </Contents>
        </Main>
        {/* <Photo /> */}
      </Container>
    </Wrapper>
  );
});

export default MainContent;

const Wrapper = styled.div`
  width: 100vw;
  position: relative;
  min-height: 100vh;
`;

const Photo = styled.div`
  background-image: linear-gradient(
      to bottom,
      rgba(173, 173, 173, 0.1),
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url("https://github.com/WoodyLovesBoota/Portfolio-Images/blob/main/photo.png?raw=true");
  background-position: center;
  background-size: cover;
  width: 50%;
  height: 100%;
`;

const Container = styled.div`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding-left: 200px;
`;

const Introduce = styled.div``;

const Contents = styled.div`
  border-left: 0.5px solid gray;
  padding-top: 22vw;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 60px;
  font-weight: 500;
  border-left: 3px solid #e74946;
  padding-left: 122px;
  margin-left: -2px;
  height: 70px;
  display: flex;
  align-items: center;
`;

const SubTitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme.word.main};
  /* line-height: 2.4; */
  word-break: normal;
  margin: 100px 0;
  margin-bottom: 70px;
  padding-left: 130px;
`;

const LinkTitle = styled.h2`
  font-size: 16px;
  font-weight: 300;
  padding-left: 130px;
  margin-bottom: 20px;
`;

const Links = styled.div`
  padding-right: 50px;
`;

const Link = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-end;
`;

const LinkContent = styled.a`
  font-size: 16px;
  font-weight: 300;
  &:hover {
    text-decoration: underline;
  }
`;
