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
          {isEng ? (
            <>
              <Header title="YANG TAE WOOK" subTitle="MY NAME IS" isCenter={false} />
              <SubTitle>
                Interested in combining programming expertise with design to effectively results. Also passionate about
                Front-End development and dedicated to crafting user experiences.
              </SubTitle>
            </>
          ) : (
            <>
              <Header title="양태욱" subTitle="MY NAME IS" isCenter={false} />
              <SubTitle>
                프로그래밍 전문성과 디자인의 결합을 통한 효과적인 결과물 표현에 흥미가 있으며 Front-End 개발과 그로 인한
                사용자 경험 창조에 열정을 가지고 있습니다.
              </SubTitle>
            </>
          )}
          <Links>
            <Link>
              <LinkContent target="_blank" href="https://github.com/WoodyLovesBoota">
                <FontAwesomeIcon icon={faGithub} />
              </LinkContent>
            </Link>
            <Link>
              <LinkContent target="_blank" href="https://www.instagram.com/tttaeook/">
                <FontAwesomeIcon icon={faInstagram} />
              </LinkContent>
            </Link>
            <Link>
              <LinkContent target="_blank" href="https://www.linkedin.com/in/tae-wook-yang-6762092a2/">
                <FontAwesomeIcon icon={faLinkedin} />
              </LinkContent>
            </Link>
            <Link>
              <LinkContent target="_blank" href="https://velog.io/@woodylovescoding">
                <FontAwesomeIcon icon={faBlog} />
              </LinkContent>
            </Link>
          </Links>
        </Main>
        <Photo />
      </Container>
    </Wrapper>
  );
});

export default MainContent;

const Wrapper = styled.div`
  width: 100vw;
  position: relative;
  height: 56.25vw;
  @media (max-width: 1200px) {
    height: 115vw;
  }
  @media (max-width: 700px) {
    height: 1000px;
  }
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
  @media (max-width: 1200px) {
    width: 100%;
    height: 60%;
  }
`;

const Container = styled.div`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  display: flex;
  @media (max-width: 1200px) {
    flex-direction: column-reverse;
    width: 100%;
  }
`;

const Main = styled.div`
  padding: 17% 8%;
  padding-bottom: 50px;
  color: ${(props) => props.theme.word.main};
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  @media (max-width: 1200px) {
    width: 100%;
    padding-top: 0;
    height: 70%;
    justify-content: center;
  }
`;

const DarkMain = styled.div`
  padding: 17% 8%;
  padding-bottom: 50px;
  color: ${(props) => props.theme.word.main};
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  @media (max-width: 1200px) {
    width: 100%;
    padding-top: 0;
    height: 70%;
    justify-content: center;
  }

  background: hsla(206, 69%, 16%, 1);

  background: linear-gradient(
    45deg,
    hsla(206, 69%, 16%, 1) 0%,
    hsla(0, 0%, 26%, 1) 36%,
    hsla(0, 0%, 26%, 1) 63%,
    hsla(206, 69%, 16%, 1) 100%
  );

  background: -moz-linear-gradient(
    45deg,
    hsla(206, 69%, 16%, 1) 0%,
    hsla(0, 0%, 26%, 1) 36%,
    hsla(0, 0%, 26%, 1) 63%,
    hsla(206, 69%, 16%, 1) 100%
  );

  background: -webkit-linear-gradient(
    45deg,
    hsla(206, 69%, 16%, 1) 0%,
    hsla(0, 0%, 26%, 1) 36%,
    hsla(0, 0%, 26%, 1) 63%,
    hsla(206, 69%, 16%, 1) 100%
  );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#0D2E47", endColorstr="#424242", GradientType=1 );
`;

const SubTitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme.word.main};
  line-height: 2.4;
  margin-top: 3.125rem;

  @media (max-width: 1200px) {
    margin-bottom: 3.125rem;
  }
`;

const Links = styled.div`
  display: flex;
  margin-top: 25px;
`;

const Link = styled.div``;

const LinkContent = styled.a`
  font-size: 21px;
  font-weight: 500;
  margin-right: 25px;
`;
