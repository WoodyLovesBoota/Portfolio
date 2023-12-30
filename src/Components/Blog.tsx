import styled from "styled-components";
import { motion } from "framer-motion";
import { forwardRef } from "react";
import blogData from "../blogData.json";
import { themeState } from "../atoms";
import { useRecoilValue } from "recoil";

const Blog = forwardRef<HTMLDivElement>((props, ref) => {
  const isDark = useRecoilValue(themeState);

  return (
    <Wrapper ref={ref}>
      <Title>
        <span>P</span>ersonal Blog
      </Title>
      <Link>
        <LinkContent
          variants={navVar}
          whileHover={"hover"}
          href="https://velog.io/@woodylovescoding"
          target="_blank"
        >
          https://velog.io/@woodylovescoding
        </LinkContent>
      </Link>
      <Main>
        {blogData.map((blog) => (
          <BlogBox>
            <a href={blog.link} target="_blank">
              <BlogPhoto bgPhoto={blog.image} />
              <BlogContent>
                <BlogTitle>{blog.title}</BlogTitle>
                <BlogDate>{blog.date}</BlogDate>
              </BlogContent>
            </a>
          </BlogBox>
        ))}
      </Main>
    </Wrapper>
  );
});

export default Blog;

const Wrapper = styled.div`
  padding: 500px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 400;

  span {
    color: #e74946;
    font-size: 18px;
    font-weight: 500;
  }
`;

const Main = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  padding: 0 200px;
`;

const BlogBox = styled(motion.div)`
  width: 100%;
  border-radius: 6px;
  cursor: pointer;
  padding: 20px;
  border: 1px solid lightgray;
`;

const BlogPhoto = styled.div<{ bgPhoto: string }>`
  background-image: url(${(props) => props.bgPhoto});
  background-position: center center;
  background-size: cover;
  height: 15vw;
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
  justify-content: center;
  padding: 100px 0;
  padding-bottom: 80px;
`;

const LinkContent = styled(motion.a)`
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => props.theme.word.sub};
`;

const navVar = {
  hover: { y: -10 },
};
