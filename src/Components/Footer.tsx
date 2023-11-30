import styled from "styled-components";
import Header from "./Header";
import { motion } from "framer-motion";
import { forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPhoneVolume, faEnvelope, faCakeCandles, faBlog } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <Wrapper>
      <Icons>
        <Icon href="https://github.com/WoodyLovesBoota" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </Icon>
        <Icon href="https://www.instagram.com/tttaeook/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </Icon>
        <Icon href="https://www.linkedin.com/in/tae-wook-yang-6762092a2/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </Icon>
        <Icon href="https://velog.io/@woodylovescoding" target="_blank">
          <FontAwesomeIcon icon={faBlog} />
        </Icon>
      </Icons>
      <Info>@2023 - YANGTAEWOOK</Info>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  width: 100%;
  padding: 8%;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5625rem;
`;

const Icon = styled.a`
  font-size: 1.3125rem;
  margin: 0 0.9375rem;
  cursor: pointer;
`;

const Info = styled.div`
  font-size: 0.75rem;
  font-weight: 400;
`;
