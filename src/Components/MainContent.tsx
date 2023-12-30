import styled from "styled-components";
import { forwardRef } from "react";

const MainContent = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <Wrapper ref={ref}>
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
    </Wrapper>
  );
});

export default MainContent;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding-left: 200px;
`;

const Introduce = styled.div`
  margin-top: 10%;
`;

const Contents = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 60px;
  font-weight: 500;
  border-left: 3px solid #e74946;
  padding-left: 122px;
  margin-left: -2px;
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
