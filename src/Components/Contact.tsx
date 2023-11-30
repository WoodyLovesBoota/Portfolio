import styled from "styled-components";
import Header from "./Header";
import { motion } from "framer-motion";
import { forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPhoneVolume, faEnvelope, faCakeCandles } from "@fortawesome/free-solid-svg-icons";

const Contact = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <Wrapper ref={ref}>
      <Header title="Contact" subTitle="ABOUT ME" isCenter={false} />
      <Container>
        <Form>
          <NameInput placeholder="Name" />
          <EmailInput placeholder="Email" />
          <MessageInput placeholder="Message" />
          <Button variants={buttonVar} whileTap={"click"}>
            Send Message
          </Button>
        </Form>
        <Info>
          <InfoBox>
            <Icon>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Icon>
            <InfoContent>
              <InfoTitle>Address</InfoTitle>
              <InfoDetail>(13628) Bundang-gu, Seongnam-si, Gyeonggi-do, Republic of Korea</InfoDetail>
            </InfoContent>
          </InfoBox>
          <InfoBox>
            <Icon>
              <FontAwesomeIcon icon={faPhoneVolume} />
            </Icon>
            <InfoContent>
              <InfoTitle>Phone</InfoTitle>
              <InfoDetail>(+82) 10-2363-7164</InfoDetail>
            </InfoContent>
          </InfoBox>
          <InfoBox>
            <Icon>
              <FontAwesomeIcon icon={faEnvelope} />
            </Icon>
            <InfoContent>
              <InfoTitle>E-Mail</InfoTitle>
              <InfoDetail>woodylovesboota@gmail.com</InfoDetail>
            </InfoContent>
          </InfoBox>
          <InfoBox>
            <Icon>
              <FontAwesomeIcon icon={faCakeCandles} />
            </Icon>
            <InfoContent>
              <InfoTitle>Birth</InfoTitle>
              <InfoDetail>1995.12.26</InfoDetail>
            </InfoContent>
          </InfoBox>
          <LinkBox>
            <DownLoad variants={buttonVar} whileTap={"click"}>
              DownLoad My CV
            </DownLoad>
          </LinkBox>
        </Info>
      </Container>
    </Wrapper>
  );
});

export default Contact;

const Wrapper = styled.div`
  width: 100%;
  padding: 8%;
`;

const Container = styled.div`
  display: flex;
  padding: 5% 0;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

const LinkBox = styled.div``;

const DownLoad = styled(motion.div)`
  margin-top: 5%;
  padding: 0.9375rem 1.5625rem;
  display: inline-block;
  font-size: 1.125rem;
  font-weight: 500;
  color: white;
  background: linear-gradient(to right, #3498db, #9b59b6, #5dade2, #1f618d, #8e44ad);
  border-radius: 0.9375rem;
  cursor: pointer;
`;

const Form = styled.form`
  width: 45%;
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    width: 100%;
    margin-bottom: 40px;
  }
`;

const NameInput = styled.input`
  width: 90%;
  height: 4rem;
  border-radius: 0.5rem;
  border: none;
  margin-bottom: 2.25rem;
  padding: 1.25rem;
  &:focus {
    outline: none;
    border: 2.5px solid ${(props) => props.theme.main.accent};
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const EmailInput = styled.input`
  width: 90%;
  height: 4rem;
  border-radius: 0.5rem;
  border: none;
  margin-bottom: 2.25rem;
  padding: 1.25rem;
  &:focus {
    outline: none;
    border: 0.1563rem solid ${(props) => props.theme.main.accent};
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const MessageInput = styled.textarea`
  width: 90%;
  height: 16.875rem;
  border-radius: 0.5rem;
  border: none;
  padding: 1.25rem;
  &:focus {
    outline: none;
    border: 0.1563rem solid ${(props) => props.theme.main.accent};
  }
  @media (max-width: 800px) {
    width: 100%;
    margin-bottom: 2.25rem;
  }
`;

const Button = styled(motion.button)`
  width: 90%;
  background-color: ${(props) => props.theme.main.accent};
  color: white;
  padding: 1.5625rem;
  border: none;
  border-radius: 0.625rem;
  margin-top: auto;
  font-size: 1rem;
  cursor: pointer;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const Info = styled.div`
  width: 45%;
  padding: 3% 5%;
  border-radius: 1.5625rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0px 0px 64px 0 rgba(65, 65, 65, 0.2);
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const InfoBox = styled.div`
  display: flex;
  margin: 1.5625rem 0;
  justify-content: space-between;
  align-items: center;
`;

const InfoDetail = styled.h2`
  font-size: 0.875rem;
  font-weight: 400;
  color: gray;
`;

const InfoTitle = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.625rem;
`;

const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
`;

const Icon = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 1.3125rem;
  background-color: ${(props) => props.theme.main.hlbg};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  color: ${(props) => props.theme.word.accent};
  margin-right: 2.5rem;
  box-shadow: 0px 0px 30px 0px rgba(43, 25, 69, 0.3);
`;

const buttonVar = {
  click: { scale: 0.95 },
};
