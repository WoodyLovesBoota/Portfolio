import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useRecoilValue } from "recoil";
import { themeState } from "../atoms";

const Footer = () => {
  const isDark = useRecoilValue(themeState);

  return (
    <Wrapper>
      <FooterTitleRow>
        <Logo>YTW.</Logo>
        <RestTitleContent>ABOUT</RestTitleContent>
        <RestTitleContent>WORK</RestTitleContent>
        <RestTitleContent>LINK</RestTitleContent>
      </FooterTitleRow>
      <FooterMainRow>
        <FirstContent>woodylovesboota@gmail.com</FirstContent>
        <RestContent href="https://github.com/WoodyLovesBoota/TravelGo" target="_blank">
          View Code
        </RestContent>
        <RestContent href="https://woodylovesboota.xyz/" target="_blank">
          Portfolio
        </RestContent>
        <RestContent target="_blank" href="https://www.instagram.com/tttaeook/">
          Instagram
        </RestContent>
      </FooterMainRow>
      <FooterMainRow>
        <FirstContent>010-2363-7164</FirstContent>
        <RestContent></RestContent>
        <RestContent target="_blank" href="https://github.com/WoodyLovesBoota">
          Github
        </RestContent>
        <RestContent target="_blank" href="https://www.linkedin.com/in/tae-wook-yang-6762092a2/">
          LinkedIn
        </RestContent>
      </FooterMainRow>
      <FooterMainRow>
        <FirstContent></FirstContent>
        <RestContent></RestContent>
        <RestContent target="_blank" href="https://velog.io/@woodylovescoding">
          Personal Blog
        </RestContent>
        <RestContent></RestContent>
      </FooterMainRow>
      <FooterMainRow>
        <FirstContent>@ 2023 YangTaeWook All Rights Reserved.</FirstContent>
        <RestContent></RestContent>
        <RestContent></RestContent>
        <RestContent></RestContent>
      </FooterMainRow>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  background-color: lightgray;
  padding: 50px 216px;
`;

const FooterTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const FirstContent = styled.h1`
  width: 375px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  font-family: "Helvetica Neue", sans-serif;
`;

const Logo = styled.h1`
  width: 375px;
  font-size: 24px;
  font-weight: 400;
  font-family: "Archivo Black";
`;

const RestTitleContent = styled.h2`
  width: 216px;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  font-family: "Helvetica Neue", sans-serif;
`;

const RestContent = styled.a`
  width: 216px;
  text-align: left;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  font-family: "Helvetica Neue", sans-serif;
  cursor: pointer;
`;

const FooterMainRow = styled.div`
  display: flex;
  justify-content: space-between;
`;
