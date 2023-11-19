import styled from "styled-components";
import { motion } from "framer-motion";
import { ReactComponent as Solidity } from "../assets/solidity.svg";
import { ReactComponent as Typescript } from "../assets/typescript.svg";
import { ReactComponent as React } from "../assets/react.svg";
import { ReactComponent as Javascript } from "../assets/javascript.svg";
import { ReactComponent as Html } from "../assets/html.svg";
import { ReactComponent as Css } from "../assets/css.svg";

const About = () => {
  return (
    <Wrapper>
      <Column>
        <Name>
          양태욱<span> (Yang Tae Wook)</span>
          <Bar variants={cursorVar} initial="initial" animate="animate"></Bar>
        </Name>

        <Infos>
          <Info>
            <InfoTitle>Birth</InfoTitle>
            <InfoContent>19955.12.26</InfoContent>
          </Info>
          <Info>
            <InfoTitle>Phone</InfoTitle>
            <InfoContent>010-2363-7164</InfoContent>
          </Info>
          <Info>
            <InfoTitle>Email</InfoTitle>
            <InfoContent>woodylovesboota@gmail.com</InfoContent>
          </Info>
        </Infos>
      </Column>
      <Column>
        <Achieves>
          <Achieve>
            <AchieveTitle>Career</AchieveTitle>
            <AchieveContentBox>
              <AchieveContent>2020.11~2021.12</AchieveContent>
              <AchieveContent>해치랩스 Audit</AchieveContent>
            </AchieveContentBox>
          </Achieve>
          <Achieve>
            <AchieveTitle>Education</AchieveTitle>
            <AchieveContentBox>
              <AchieveContent>2021.02</AchieveContent>
              <AchieveContent>서울대학교 전기정보공학부 졸업</AchieveContent>
            </AchieveContentBox>
          </Achieve>
          <Achieve>
            <AchieveTitle>Certificate</AchieveTitle>
            <AchieveContentBox>
              <AchieveContent>2021.08</AchieveContent>
              <AchieveContent>정보처리기사</AchieveContent>
            </AchieveContentBox>
          </Achieve>
          <Achieve>
            <AchieveTitle>Skills</AchieveTitle>
            <Skill>
              <Logo>
                <React width={"100%"} />
              </Logo>
              <Logo>
                <Typescript width={"100%"} fill="#233b4b" />
              </Logo>
              <Logo>
                <Javascript width={"100%"} fill="#6e6a38" />
              </Logo>
              <Logo>
                <Solidity width={"100%"} fill="gray" />
              </Logo>
              <Logo>
                <Html width={"100%"} fill="gray" />
              </Logo>
              <Logo>
                <Css width={"100%"} fill="gray" />
              </Logo>
            </Skill>
          </Achieve>
        </Achieves>
      </Column>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.div`
  width: 100%;
  background-color: black;
  height: 56.25vw;
  display: flex;
  justify-content: space-between;
  color: white;
  @media (max-width: 800px) {
    height: 700px;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const Column = styled.div`
  width: 50%;
  padding: 9.375rem 8%;
  display: flex;
  flex-direction: column;
  @media (max-width: 1024px) {
    padding: 5rem 8%;
  }
  @media (max-width: 800px) {
    width: 100%;
    padding-bottom: 0;
    padding-top: 6%;
    padding-left: 12%;
  }
`;

const Name = styled.h2`
  font-size: 3rem;
  font-weight: 400;
  padding-bottom: 1.25rem;
  border-bottom: 0.125rem solid gray;
  width: 31.25rem;
  display: flex;
  align-items: center;
  span {
    font-size: 2.25rem;
    font-weight: 400;
    color: gray;
    margin-left: 10px;
  }
  @media (max-width: 800px) {
    margin: 30px 0;
  }
`;

const Skill = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 800px) {
    width: 60%;
  }
`;

const Logo = styled.div`
  width: 4.375rem;
  height: 4.375rem;
`;

const Infos = styled.div`
  margin-top: auto;
`;

const Info = styled.div`
  display: flex;
  margin-top: 20px;
`;

const InfoTitle = styled.div`
  font-size: 1.125rem;
  font-weight: 800;
  width: 7.5rem;
  @media (max-width: 800px) {
    width: 15.625rem;
  }
`;

const InfoContent = styled.h2`
  font-size: 1.125rem;
  font-weight: 400;
`;

const Achieves = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const Achieve = styled.div`
  @media (max-width: 800px) {
    margin-bottom: 30px;
  }
`;

const AchieveTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 800;
  margin-bottom: 20px;
`;

const AchieveContentBox = styled.div`
  display: flex;
`;

const AchieveContent = styled.h2`
  font-size: 1.125rem;
  font-weight: 400;
  width: 15.625rem;
  @media (max-width: 1024px) {
    font-size: 9px;
    width: 120px;
  }
  @media (max-width: 800px) {
    width: 15.625rem;
    font-size: 1.125rem;
  }
`;

const Bar = styled(motion.div)`
  width: 2px;
  height: 85%;
  background-color: lightgray;
  margin-left: 10px;
`;

const cursorVar = {
  initial: { opacity: 1 },
  animate: {
    opacity: 0,
    transition: {
      repeat: Infinity,
      repeatDelay: 0.3,
    },
  },
};
