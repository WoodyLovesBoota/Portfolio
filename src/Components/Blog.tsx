import styled from "styled-components";
import Header from "./Header";
import { motion } from "framer-motion";
import { forwardRef } from "react";
import blogData from "../blogData.json";
import { themeState } from "../atoms";
import { useRecoilValue } from "recoil";

const Blog = forwardRef<HTMLDivElement>((props, ref) => {
  const isDark = useRecoilValue(themeState);

  return (
    <Wrapper ref={ref}>
      <Header title="Personal Blog" subTitle="MY ARTICLES" isCenter={true} />
      <Main>
        {blogData.map((blog) => (
          <BlogBox variants={shadowVar} whileHover={isDark ? "darkHover" : "hover"} whileTap={"click"}>
            <a href={blog.link} target="_blank">
              <BlogPhoto bgPhoto={blog.image} />
              <BlogContent>
                <BlogTitle>{blog.title}</BlogTitle>
                <BlogDate>{blog.date}</BlogDate>
                <BlogDesc>{blog.description}</BlogDesc>
                <BlogButton>Continue Reading</BlogButton>
              </BlogContent>
            </a>
          </BlogBox>
        ))}
      </Main>
      <Link>
        <LinkContent variants={navVar} whileHover={"hover"} href="https://velog.io/@woodylovescoding">
          https://velog.io/@woodylovescoding
        </LinkContent>
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
  background-color: ${(props) => props.theme.bg.lighter};
  box-shadow: 0px 0px 64px 0 ${(props) => props.theme.bg.blur};
  width: 28.125rem;
  height: 40.625rem;
  border-radius: 15px;
  cursor: pointer;
  @media (max-width: 1700px) {
    width: 31%;
    margin: 30px 0;
  }
  @media (max-width: 1160px) {
    width: 40rem;
    margin-bottom: 30px;
  }
  @media (max-width: 800px) {
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
  color: ${(props) => props.theme.word.main};
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
`;

const BlogButton = styled(motion.button)`
  margin-top: auto;
  width: 100%;
  border: none;
  background-color: transparent;
  font-size: 1rem;
  color: ${(props) => props.theme.word.sub};
  padding-top: 0.625rem;
  padding-bottom: 1.875rem;
  cursor: pointer;
`;

const Link = styled(motion.div)`
  display: flex;
  margin-top: 8%;
  justify-content: center;
  padding: 1.25rem;
`;

const LinkContent = styled(motion.a)`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${(props) => props.theme.word.sub};
`;

const shadowVar = {
  hover: { boxShadow: "0px 0px 64px 10px #484747bb", y: -15 },
  darkHover: { boxShadow: "0px 0px 64px 10px #bebebebb", y: -15 },
  click: { scale: 0.95 },
};

const navVar = {
  hover: { y: -15 },
};
