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
  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

const BlogBox = styled(motion.div)`
  background-color: ${(props) => props.theme.bg.lighter};
  box-shadow: 0px 0px 64px 0 ${(props) => props.theme.bg.blur};
  width: min(450px, 32%);
  height: 650px;
  border-radius: 15px;
  cursor: pointer;
  @media (max-width: 1600px) {
    height: 600px;
  }
  @media (max-width: 1200px) {
    width: 100%;
    height: 350px;
    margin-bottom: 30px;
    a {
      display: flex;
      width: 100%;
      height: 350px;
    }
  }
  @media (max-width: 700px) {
    height: 550px;
    margin-bottom: 40px;

    a {
      flex-direction: column;
      height: 550px;
    }
  }
`;

const BlogPhoto = styled.div<{ bgPhoto: string }>`
  background-image: url(${(props) => props.bgPhoto});
  background-position: center center;
  background-size: cover;
  height: 55%;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  @media (max-width: 1600px) {
    height: 50%;
  }
  @media (max-width: 1200px) {
    height: 100%;
    width: 50%;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    border-top-right-radius: 0px;
  }
  @media (max-width: 700px) {
    height: 50%;
    width: 100%;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 15px;
  }
`;

const BlogContent = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 45%;
  padding-bottom: 0;
  @media (max-width: 1600px) {
    height: 50%;
  }
  @media (max-width: 1200px) {
    height: 100%;
    width: 50%;
    padding: 1.875rem 3.125rem;
    padding-bottom: 0;
  }
  @media (max-width: 700px) {
    height: 50%;
    width: 100%;
  }
`;

const BlogTitle = styled.h2`
  font-size: 18px;
  font-weight: 400;
  color: ${(props) => props.theme.word.main};
`;

const BlogDate = styled.span`
  font-size: 14px;
  border-radius: 4px;
  padding: 4px 8px;
  border: 1px solid lightgray;
  font-weight: 400;
  margin: 1.25rem 0;
  color: ${(props) => props.theme.word.sub};
`;

const BlogDesc = styled.h2`
  font-weight: 400;
  font-size: 16px;
  line-height: 2;
  color: ${(props) => props.theme.word.sub};
  @media (max-width: 1600px) {
    line-height: 1.7;
  }
`;

const BlogButton = styled(motion.button)`
  margin-top: auto;
  width: 100%;
  border: none;
  background-color: transparent;
  font-size: 16px;
  color: ${(props) => props.theme.word.sub};
  padding-top: 10px;
  padding-bottom: 30px;
  cursor: pointer;
  @media (max-width: 500px) {
    display: none;
  }
`;

const Link = styled(motion.div)`
  display: flex;
  margin-top: 8%;
  justify-content: center;
  padding: 20px;
`;

const LinkContent = styled(motion.a)`
  font-size: 14px;
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
