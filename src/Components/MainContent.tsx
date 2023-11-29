import styled from "styled-components";
import Header from "./Header";
import { forwardRef } from "react";

const MainContent = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <Wrapper ref={ref}>
      <Container>
        <Main>
          <Header title="YANG TAE WOOK" subTitle="MY NAME IS" isCenter={false} />
          {/* <Title>
            다양한 분야에서 <span>성장</span>하는 개발자
            <br />
            <span>양태욱</span>입니다.
          </Title> */}
          {/* <SubTitle>
            프로그래밍 전문성과 디자인의 결합을 통한 효과적인 결과물 표현에 흥미가 있으며
            <br /> <span>Front-End 개발</span>과 그로 인한 사용자 경험 창조에 열정을 가지고 있습니다.
          </SubTitle> */}
          <SubTitle>
            Interested in combining programming expertise with design to <br />
            effectively results. Also passionate about Front-End development <br />
            and dedicated to crafting user experiences.
          </SubTitle>
          <Links>
            <Link>
              <LinkTitle>Github</LinkTitle>
              <LinkContent target="_blank" href="https://github.com/WoodyLovesBoota">
                https://github.com/WoodyLovesBoota
              </LinkContent>
            </Link>
            <Link>
              <LinkTitle>Blog</LinkTitle>
              <LinkContent target="_blank" href="https://velog.io/@woodylovescoding">
                https://velog.io/@woodylovescoding
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
    url("images/photo.png");
  background-position: center;
  background-size: cover;
  width: 50%;
  height: 100%;
  @media (max-width: 1160px) {
    width: 100%;
    height: 50%;
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
  }
  @media (max-width: 700px) {
    width: 100%;
    height: 40%;
    padding-top: 8%;
  }
`;

const Title = styled.h2`
  width: 120%;
  font-size: 2rem;
  line-height: 1.8;
  font-weight: 400;
  word-spacing: 2px;
  span {
    font-size: 2rem;
    font-weight: 500;
  }
`;

const SubTitle = styled.h2`
  width: 150%;
  font-size: 1rem;
  font-weight: 400;
  color: ${(props) => props.theme.word.main};
  line-height: 2.4;
  margin-top: 50px;
  span {
    font-size: 1rem;
    font-weight: 400;
  }
`;

const Links = styled.div`
  margin-top: auto;
`;

const Link = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const LinkTitle = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  width: 7.5rem;
`;

const LinkContent = styled.a`
  font-size: 1rem;
  font-weight: 500;
`;
