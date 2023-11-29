import styled from "styled-components";
import Header from "./Header";
import { motion } from "framer-motion";
import { forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPhoneVolume, faEnvelope, faCakeCandles } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <Wrapper>
      <Icons></Icons>
      <Info>@2023 - YANGTAEWOOK</Info>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  width: 100%;
  padding: 8%;
`;

const Icons = styled.div``;

const Icon = styled.div``;

const Info = styled.div``;
