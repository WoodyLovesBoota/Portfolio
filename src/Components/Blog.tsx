import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { forwardRef, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { blogState, languageState, screenState } from "../atoms";
import { ReactComponent as ArrowSmall } from "../assets/arrowsmall.svg";

const Blog = forwardRef<HTMLDivElement>((props, ref) => {
  const blogData = useRecoilValue(blogState);
  const isEng = useRecoilValue(languageState);
  const [screen, setScreen] = useRecoilState(screenState);

  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollY > 5700) controls.start({ y: 0 });
  }, [scrollY, controls]);

  return (
    <Wrapper ref={ref}>
      <Container>
        <Header>
          <Subject>BLOG</Subject>
          <ViewLink
            variants={hoverTargetBar}
            animate="animate"
            whileHover={"hover"}
            target="_blank"
            href="https://velog.io/@woodylovescoding"
          >
            <Ment variants={hoverOverVar}>
              VISIT BLOG
              <ArrowSmall />
            </Ment>
            <Hidden variants={hoverUnderVar}>
              VISIT BLOG
              <ArrowSmall />
            </Hidden>
          </ViewLink>
        </Header>
        <Title>LATEST</Title>
        <SecondTitle>WRITING</SecondTitle>

        <Main>
          {blogData &&
            blogData.map((blog) => (
              <BlogBox>
                <a href={blog.link} target="_blank">
                  <BlogPhoto bgPhoto={blog.image} />
                  <BlogContent>
                    <BlogTitle>{isEng ? blog.titleEng : blog.title}</BlogTitle>
                    <BlogDate>{blog.date}</BlogDate>
                  </BlogContent>
                </a>
              </BlogBox>
            ))}
        </Main>
      </Container>
    </Wrapper>
  );
});

export default Blog;

const Wrapper = styled.div`
  padding-top: 225px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  padding-bottom: 18px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
`;

const Subject = styled.h2`
  font-size: 16px;
  font-weight: 400;
`;

const ViewLink = styled(motion.a)`
  display: relative;

  & svg {
    margin-left: 11px;
  }
`;

const SecondTitle = styled.h2`
  font-family: ClashGrotesk-Medium;
  font-size: 150px;
  text-align: center;
  line-height: 0.9;
  margin-bottom: 100px;
  @media (max-width: 1500px) {
    font-size: 10.42vw;
  }

  @media (max-width: 1080px) {
    margin-bottom: 80px;
  }
  @media (max-width: 745px) {
    margin-bottom: 40px;
    font-size: 60px;
  }
`;

const Container = styled.div`
  width: 1440px;
  @media (max-width: 1500px) {
    width: 100%;
    padding: 0 30px;
  }
  @media (max-width: 745px) {
    padding: 0 20px;
  }
`;

const Title = styled.h2`
  margin-top: 100px;
  font-family: ClashGrotesk-Medium;
  font-size: 150px;
  line-height: 0.9;
  @media (max-width: 1500px) {
    font-size: 10.42vw;
  }

  @media (max-width: 1080px) {
    margin-top: 80px;
  }
  @media (max-width: 745px) {
    margin-top: 40px;
    font-size: 60px;
  }
`;

const Main = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 48px;
  @media (max-width: 1500px) {
    grid-gap: 30px;
  }
  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 745px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const BlogBox = styled(motion.div)`
  width: 100%;
  border-radius: 6px;
  cursor: pointer;
`;

const BlogPhoto = styled.div<{ bgPhoto: string }>`
  background-image: url(${(props) => props.bgPhoto});
  background-position: center center;
  background-size: cover;
  height: 384px;
  border-radius: 32px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.08);
  @media (max-width: 1500px) {
    height: 25vw;
  }
  @media (max-width: 1080px) {
    height: 40vw;
  }
  @media (max-width: 745px) {
    height: 80vw;
  }
`;

const BlogContent = styled.div`
  padding: 20px 0;
`;

const BlogTitle = styled.h2`
  font-size: 24px;
  font-weight: 400;
  word-break: normal;
  line-height: 36px;
  letter-spacing: 0.48px;
`;

const BlogDate = styled.h2`
  font-size: 15px;
  font-weight: 400;
  margin-top: 24px;
  display: inline-block;
  color: ${(props) => props.theme.word.sub};
`;

const Ment = styled(motion.h2)`
  font-size: 16px;
  font-weight: 400;
  position: absolute;
`;

const Hidden = styled(motion.h2)`
  font-size: 16px;
  font-weight: 400;
`;

const hoverTargetBar = {
  animate: {},
  hover: {},
};

const hoverUnderVar = {
  animate: { opacity: 1, y: -0, transition: { duration: 0.1 } },
  hover: { opacity: 0, y: 20, transition: { duration: 0.1 } },
};

const hoverOverVar = {
  animate: { opacity: 0, y: -20, transition: { duration: 0.1 } },
  hover: { opacity: 1, y: 0, transition: { duration: 0.1 } },
};
