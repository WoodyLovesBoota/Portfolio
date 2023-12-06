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
        {isDark ? (
          <DarkMain>
            {isEng ? (
              <>
                <Header title="YANG TAE WOOK" subTitle="MY NAME IS" isCenter={false} />
                <SubTitle>
                  Interested in combining programming expertise with design to <br />
                  effectively results. Also passionate about Front-End development <br />
                  and dedicated to crafting user experiences.
                </SubTitle>
              </>
            ) : (
              <>
                <Header title="양태욱" subTitle="MY NAME IS" isCenter={false} />
                <SubTitle>
                  프로그래밍 전문성과 디자인의 결합을 통한 효과적인 결과물 표현에 흥미가 있으며
                  <br /> <span>Front-End 개발</span>과 그로 인한 사용자 경험 창조에 열정을 가지고 있습니다.
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
          </DarkMain>
        ) : (
          <Main>
            {isEng ? (
              <>
                <Header title="YANG TAE WOOK" subTitle="MY NAME IS" isCenter={false} />
                <SubTitle>
                  Interested in combining programming expertise with design to <br />
                  effectively results. Also passionate about Front-End development <br />
                  and dedicated to crafting user experiences.
                </SubTitle>
              </>
            ) : (
              <>
                <Header title="양태욱" subTitle="MY NAME IS" isCenter={false} />
                <SubTitle>
                  프로그래밍 전문성과 디자인의 결합을 통한 효과적인 결과물 표현에 흥미가 있으며
                  <br /> <span>Front-End 개발</span>과 그로 인한 사용자 경험 창조에 열정을 가지고 있습니다.
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
        )}
        <Photo />
      </Container>
    </Wrapper>
  );
});

export default MainContent;

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  height: 56.25vw;
  @media (max-width: 1160px) {
    height: 112.5vw;
  }
  @media (max-width: 800px) {
    height: 1125px;
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
  @media (max-width: 1160px) {
    width: 100%;
    height: 50%;
  }
  @media (max-width: 700px) {
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
  @media (max-width: 1160px) {
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
  background: hsla(206, 63%, 86%, 1);
  background: -webkit-linear-gradient(
    45deg,
    hsla(206, 63%, 86%, 1) 0%,
    hsla(0, 0%, 93%, 1) 27%,
    hsla(0, 0%, 93%, 1) 53%,
    hsla(206, 63%, 86%, 1) 100%
  );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#c6dff2", endColorstr="#d6e8f7", GradientType=1 );
  width: 50%;
  height: 100%;
  @media (max-width: 1160px) {
    width: 100%;
    height: 50%;
    padding-top: 8%;
    justify-content: center;
  }
  @media (max-width: 700px) {
    width: 100%;
    height: 40%;
    padding-top: 8%;
  }
`;

const DarkMain = styled.div`
  padding: 17% 8%;
  padding-bottom: 50px;
  color: ${(props) => props.theme.word.main};
  display: flex;
  flex-direction: column;
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
  width: 50%;
  height: 100%;

  @media (max-width: 1160px) {
    width: 100%;
    height: 50%;
    padding-top: 8%;
    justify-content: center;
  }
  @media (max-width: 700px) {
    width: 100%;
    height: 40%;
    padding-top: 8%;
  }
`;

const SubTitle = styled.h2`
  width: 150%;
  font-size: 1rem;
  font-weight: 400;
  color: ${(props) => props.theme.word.main};
  line-height: 2.4;
  margin-top: 50px;
`;

const Links = styled.div`
  display: flex;
  margin-top: 25px;
`;

const Link = styled.div``;

const LinkContent = styled.a`
  font-size: 1.3125rem;
  font-weight: 500;
  margin-right: 1.5625rem;
`;
