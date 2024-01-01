import styled from "styled-components";
import { forwardRef } from "react";

import { ReactComponent as Bg } from "../assets/bg.svg";
import { ReactComponent as Github } from "../assets/github.svg";
import { ReactComponent as Velog } from "../assets/velog.svg";
import { ReactComponent as LinkedIn } from "../assets/linkedin.svg";
import { motion } from "framer-motion";

const Contact = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <Wrapper ref={ref}>
      <Container>
        <Header>
          <Subject>CONTACT</Subject>
        </Header>
        <Title>WOODYLOVESBOOTA@GMAIL.COM</Title>
        <SubTitle>010-2363-7164</SubTitle>

        <InfoBox>
          <InfoContent>
            <LinkContent
              variants={hoverVar}
              animate="animate"
              whileHover={"hover"}
              target="_blank"
              href="https://github.com/WoodyLovesBoota"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30">
                <motion.path
                  d="M12.9669 22.4133C12.9693 22.679 12.9712 22.886 12.9712 23H18.0261C18.0261 22.89 18.0274 22.6973 18.0292 22.4399L18.0292 22.4392L18.0292 22.4385C18.0327 21.919 18.0379 21.1363 18.0379 20.2359C18.0379 19.295 17.7123 18.6828 17.3479 18.3692C19.6155 18.1206 21.9995 17.2682 21.9995 13.3997C22.0149 12.3971 21.6383 11.4273 20.9484 10.6923C21.053 10.4354 21.4023 9.41115 20.8472 8.02323C20.8472 8.02323 19.9934 7.75299 18.0481 9.05583C16.378 8.60428 14.6159 8.60428 12.9459 9.05583C10.9988 7.75299 10.1434 8.02323 10.1434 8.02323C9.58998 9.41448 9.93924 10.4387 10.0438 10.6923C9.35609 11.4272 8.98035 12.3953 8.99438 13.3964C8.99438 17.2565 11.3734 18.1206 13.6376 18.3742C13.3457 18.6261 13.0808 19.0698 12.9897 19.7221C12.4093 19.9823 10.933 20.4277 10.0253 18.888C10.0253 18.888 9.48706 17.9204 8.46292 17.8487C8.46292 17.8487 7.46913 17.837 8.39373 18.4609C8.39373 18.4609 9.06188 18.7679 9.52418 19.9356C9.52418 19.9356 10.1231 21.7339 12.9577 21.125C12.9596 21.6045 12.9637 22.0606 12.9669 22.4133Z"
                  fill="#000000"
                  strokeWidth="12"
                  strokeLinecap="round"
                  variants={svgVar}
                />
              </svg>
            </LinkContent>
            <LinkContent
              variants={hoverVar}
              animate="animate"
              whileHover={"hover"}
              target="_blank"
              href="https://www.linkedin.com/in/tae-wook-yang-6762092a2/"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30">
                <motion.path
                  d="M11.375 22H8.1875V11.9688H11.375V22ZM9.78125 10.5625C8.75 10.5625 8 9.8125 8 8.78125C8 7.75 8.84375 7 9.78125 7C10.8125 7 11.5625 7.75 11.5625 8.78125C11.5625 9.8125 10.8125 10.5625 9.78125 10.5625ZM23 22H19.8125V16.5625C19.8125 14.9688 19.1562 14.5 18.2187 14.5C17.2812 14.5 16.3437 15.25 16.3437 16.6562V22H13.1562V11.9688H16.1562V13.375C16.4375 12.7188 17.5625 11.6875 19.1562 11.6875C20.9375 11.6875 22.8125 12.7187 22.8125 15.8125V22H23Z"
                  fill="#000000"
                  strokeWidth="12"
                  strokeLinecap="round"
                  variants={svgVar}
                />
              </svg>
            </LinkContent>
            <LinkContent
              variants={hoverVar}
              animate="animate"
              whileHover={"hover"}
              target="_blank"
              href="https://velog.io/@woodylovescoding"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30">
                <motion.path
                  d="M14.8698 22.7946L12.0142 23L9.81064 10.6285H7V9.35029L10.6651 8.27749C12.6618 7.69316 13.3108 8.93183 13.3858 9.6242L15.1396 19.7359C16.8935 17.499 18.2201 15.011 18.7148 13.2763C19.2094 11.5416 18.5798 11.0166 18.2875 10.6285C18.0537 10.3181 17.2607 9.82963 16.8935 9.6242C17.7479 7.95793 21.8402 6.70253 21.9976 10.4231C22.1235 13.3996 17.2982 19.9109 14.8698 22.7946Z"
                  fill="#000000"
                  strokeWidth="12"
                  strokeLinecap="round"
                  variants={svgVar}
                />
              </svg>
            </LinkContent>
          </InfoContent>
        </InfoBox>
      </Container>
    </Wrapper>
  );
});

export default Contact;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 200px 0;
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
  word-break: break-all;
  letter-spacing: -1.5px;
  @media (max-width: 1500px) {
    font-size: 10vw;
  }

  @media (max-width: 1080px) {
    margin-top: 80px;
    font-size: 9.7vw;
  }
  @media (max-width: 745px) {
    margin-top: 40px;
  }
`;

const SubTitle = styled.h2`
  margin-top: 100px;
  font-family: ClashGrotesk-Medium;
  font-size: 150px;
  line-height: 0.9;
  letter-spacing: 3px;
  text-align: right;
  margin-bottom: 150px;
  @media (max-width: 1500px) {
    font-size: 10vw;
  }

  @media (max-width: 1080px) {
    margin-top: 80px;
    font-size: 9.7vw;
  }
  @media (max-width: 745px) {
    margin-top: 40px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoContent = styled.div`
  display: flex;
`;

const LinkContent = styled(motion.a)`
  margin-right: 14px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
`;

const hoverVar = {
  animate: { backgroundColor: "#ffffff", fill: "#000000" },
  hover: { backgroundColor: "#000000", fill: "#ffffff" },
};

const svgVar = {
  animate: { fill: "#000000" },
  hover: { fill: "#ffffff" },
};
