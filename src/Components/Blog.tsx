import styled from "styled-components";
import Header from "./Header";
import { motion } from "framer-motion";
import { forwardRef } from "react";

const Blog = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <Wrapper ref={ref}>
      <Header title="Personal Blog" subTitle="MY ARTICLES" isCenter={true} />
      <Main>
        <BlogBox variants={shadowVar} whileHover={"hover"} whileTap={"click"}>
          <a href="https://velog.io/@woodylovescoding/React-Wordle-%EB%A7%8C%EB%93%A4%EA%B8%B0" target="_blank">
            <BlogPhoto
              bgPhoto={
                "https://velog.velcdn.com/images/woodylovescoding/post/ae926c4f-6ced-45df-8d57-5370698c5fce/image.png"
              }
            />
            <BlogContent>
              <BlogTitle>React로 Wordle 만들기</BlogTitle>
              <BlogDate>2023.09.03</BlogDate>
              <BlogDesc>
                Typescript 와 React를 통해 간단한 숫자야구 게임 wordle을 만들어 보았다. React를 공부하며 배웠던 기능들을
                최대한 활용해보고자 노력했고...
              </BlogDesc>
              <BlogButton>Continue Reading</BlogButton>
            </BlogContent>
          </a>
        </BlogBox>
        <BlogBox variants={shadowVar} whileHover={"hover"} whileTap={"click"}>
          <a
            href="https://velog.io/@woodylovescoding/React.useForm-React.useRef-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-%EC%9E%85%EB%A0%A5%ED%95%9C-%EA%B8%80%EC%9E%90%EC%88%98%EC%97%90-%EB%94%B0%EB%9D%BC%EC%84%9C-%EA%B8%B8%EC%96%B4%EC%A7%80%EB%8A%94-input-%EB%A7%8C%EB%93%A4%EA%B8%B0"
            target="_blank"
          >
            <BlogPhoto
              bgPhoto={
                "https://velog.velcdn.com/images/woodylovescoding/post/fe39b264-6d22-4261-9bc7-6cccfae27bf1/image.jpeg"
              }
            />
            <BlogContent>
              <BlogTitle>글자수에 따라서 변하는 input 만들기</BlogTitle>
              <BlogDate>2023.09.17</BlogDate>
              <BlogDesc>
                Reac의 useForm 과 useRef를 이용하여 입력한 글자 수에 따라 길이가 변하는 input을 만드는 과정에서 submit이
                되지 않는 문제가 생겼고...
              </BlogDesc>
              <BlogButton>Continue Reading</BlogButton>
            </BlogContent>
          </a>
        </BlogBox>
        <BlogBox variants={shadowVar} whileHover={"hover"} whileTap={"click"}>
          <a
            href="https://velog.io/@woodylovescoding/React%EC%97%90-%EA%B5%AC%EA%B8%80%EB%A7%B5-%EC%9D%B4%EC%9A%A9%ED%95%98%EA%B8%B0-Google-maps-api"
            target="_blank"
          >
            <BlogPhoto
              bgPhoto={
                "https://velog.velcdn.com/images/woodylovescoding/post/585525b0-7822-41ac-9aff-74550ef58e5d/image.png"
              }
            />
            <BlogContent>
              <BlogTitle>React에서 Google Maps API 사용하기</BlogTitle>
              <BlogDate>2023.10.07</BlogDate>
              <BlogDesc>
                Google maps api는 위치와 지도에 관한 여러가지 기능을 제공한다. Api를 사용하여 화면에 지도를 띄우거나
                장소를 검색하고, 장소 사이의 ...
              </BlogDesc>
              <BlogButton>Continue Reading</BlogButton>
            </BlogContent>
          </a>
        </BlogBox>
      </Main>
      <Link>
        <LinkContent href="https://velog.io/@woodylovescoding">https://velog.io/@woodylovescoding</LinkContent>
      </Link>
    </Wrapper>
  );
});

export default Blog;

const Wrapper = styled.div`
  width: 100%;
  padding: 8%;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  padding: 8% 0;
  padding-bottom: 0;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1160px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

const BlogBox = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0px 0px 64px 0 rgba(65, 65, 65, 0.2);
  width: 28.125rem;
  height: 40.625rem;
  border-radius: 15px;
  cursor: pointer;
  @media (max-width: 1700px) {
    width: 31%;
    margin: 30px 0;
  }
  @media (max-width: 1160px) {
    width: 400px;
    margin: 30px 0;
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const BlogPhoto = styled.div<{ bgPhoto: string }>`
  background-image: url(${(props) => props.bgPhoto});
  background-position: center center;
  background-size: cover;
  height: 55%;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
`;

const BlogContent = styled.div`
  padding: 1.875rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 45%;
  padding-bottom: 0;
`;

const BlogTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 400;
`;

const BlogDate = styled.span`
  font-size: 0.875rem;
  border-radius: 4px;
  padding: 4px 8px;
  border: 1px solid lightgray;
  font-weight: 400;
  margin: 1.25rem 0;
  color: ${(props) => props.theme.word.sub};
`;

const BlogDesc = styled.h2`
  font-weight: 400;
  font-size: 1rem;
  line-height: 2;
  color: ${(props) => props.theme.word.sub};
  color: gray;
`;

const BlogButton = styled(motion.button)`
  margin-top: auto;
  width: 100%;
  border: none;
  background-color: transparent;
  font-size: 1rem;
  color: ${(props) => props.theme.word.sub};
  color: gray;
  padding-top: 0.625rem;
  padding-bottom: 1.875rem;
  cursor: pointer;
`;

const Link = styled(motion.div)`
  display: flex;
  margin-top: 8%;
  justify-content: center;
  padding: 20px;
`;

const LinkContent = styled.a`
  font-size: 14px;
  font-weight: 400;
  color: gray;
`;

const EducationInfo = styled.div``;

const Feature = styled.div``;

const Circle = styled.div``;

const SkillColumn = styled.div``;

const Page = styled.h2``;

const SkillGraph = styled.div``;

const SkillRow = styled.div``;

const SkillName = styled.h2``;

const SkillBar = styled.div``;

const SkillFill = styled.div<{ width: string }>``;

const shadowVar = {
  hover: { boxShadow: "0px 0px 64px 10px #484747bb", y: -15 },
  click: { scale: 0.95 },
};
