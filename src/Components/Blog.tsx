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
      {/* <Header title="Personal Blog" subTitle="MY ARTICLES" isCenter={true} /> */}
      <Title>Personal Blog</Title>
      <Main>
        {blogData.map((blog) => (
          <BlogBox>
            <a href={blog.link} target="_blank">
              <BlogPhoto bgPhoto={blog.image} />
              <BlogContent>
                <BlogTitle>{blog.title}</BlogTitle>
                <BlogDate>{blog.date}</BlogDate>
                {/* <BlogDesc>{blog.description}</BlogDesc> */}
              </BlogContent>
            </a>
          </BlogBox>
        ))}
      </Main>
      <Link>
        <LinkContent
          variants={navVar}
          whileHover={"hover"}
          href="https://velog.io/@woodylovescoding"
          target="_black"
        >
          https://velog.io/@woodylovescoding
        </LinkContent>
      </Link>
    </Wrapper>
  );
});

export default Blog;

const Wrapper = styled.div`
  width: 100%;
  padding: 200px 0;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 500;
  padding-left: 80px;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid #e74946;
`;

const Main = styled.div`
  padding: 80px 60px;
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
`;

const BlogBox = styled(motion.div)`
  width: 100%;
  border-radius: 6px;
  cursor: pointer;
  margin-right: 20px;
  padding: 20px;
  border: 0.5px solid lightgray;
`;

const BlogPhoto = styled.div<{ bgPhoto: string }>`
  background-image: url(${(props) => props.bgPhoto});
  background-position: center center;
  background-size: cover;
  height: 300px;
  border-radius: 8px;
`;

const BlogContent = styled.div`
  padding: 20px 10px;
`;

const BlogTitle = styled.h2`
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme.word.main};
  word-break: normal;
`;

const BlogDate = styled.h2`
  font-size: 14px;
  border-radius: 4px;
  padding: 4px 8px;
  border: 1px solid lightgray;
  font-weight: 400;
  margin-top: 20px;
  display: inline-block;
  color: ${(props) => props.theme.word.sub};
`;

const Link = styled(motion.div)`
  display: flex;
  margin: 72px 0;
  justify-content: center;
  @media (max-width: 800px) {
    margin: 36px 0;
  }
`;

const LinkContent = styled(motion.a)`
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => props.theme.word.sub};
`;

const navVar = {
  hover: { y: -15 },
};
