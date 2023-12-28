import styled from "styled-components";
import Header from "./Header";
import { motion } from "framer-motion";
import { forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faPhoneVolume,
  faEnvelope,
  faCakeCandles,
} from "@fortawesome/free-solid-svg-icons";
import { useRecoilValue } from "recoil";
import { languageState, themeState } from "../atoms";
import { useForm } from "react-hook-form";

const Contact = forwardRef<HTMLDivElement>((props, ref) => {
  const isEng = useRecoilValue(languageState);
  const isDark = useRecoilValue(themeState);
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const onValid = (data: IForm) => {
    setValue("name", "");
    setValue("email", "");
    setValue("message", "");
  };

  return (
    <Wrapper ref={ref}>
      {/* <Header title="Contact" subTitle="ABOUT ME" isCenter={false} /> */}
      <Main>
        <Title>Contact</Title>

        <Container>
          {/* <Form
            method="POST"
            action="https://script.google.com/macros/s/AKfycbxferxVdCmG0i2_T4N-neira2mG8sA81Ujp4HYk3rT8Q0WhNR4OfdlWKrpTcfoENuJt/exec"
            target="frAttachFiles"
            data-email="woodylovesboota@gmail.com"
          >
            <NameInput
              autoComplete="off"
              {...register("name", { required: true })}
              name="name"
              type="text"
              placeholder={isEng ? "Name" : "이름"}
            />
            <EmailInput
              autoComplete="off"
              {...register("email", { required: true })}
              name="email"
              type="text"
              placeholder={isEng ? "Email" : "이메일"}
            />
            <MessageInput
              autoComplete="off"
              {...register("message", { required: true })}
              name="message"
              placeholder={isEng ? "Message" : "메시지"}
            />
            <Button variants={buttonVar} whileTap={"click"} type="submit">
              {isEng ? "Send Message" : "메시지 보내기"}
            </Button>
          </Form> */}
          {isEng ? (
            <Info>
              <InfoBox>
                <InfoContent>
                  <InfoTitle>Address</InfoTitle>
                  <InfoDetail>
                    (13628) Bundang-gu, Seongnam-si, Gyeonggi-do, Republic of Korea
                  </InfoDetail>
                </InfoContent>
              </InfoBox>
              <InfoBox>
                <InfoContent>
                  <InfoTitle>Phone</InfoTitle>
                  <InfoDetail>(+82) 10-2363-7164</InfoDetail>
                </InfoContent>
              </InfoBox>
              <InfoBox>
                <InfoContent>
                  <InfoTitle>E-Mail</InfoTitle>
                  <InfoDetail>woodylovesboota@gmail.com</InfoDetail>
                </InfoContent>
              </InfoBox>
              <InfoBox>
                <InfoContent>
                  <InfoTitle>Birth</InfoTitle>
                  <InfoDetail>1995.12.26</InfoDetail>
                </InfoContent>
              </InfoBox>
              <LinkBox>
                {isDark ? (
                  <DarkDownLoad variants={buttonVar} whileTap={"click"}>
                    DownLoad My CV
                  </DarkDownLoad>
                ) : (
                  <DownLoad variants={buttonVar} whileTap={"click"}>
                    DownLoad My CV
                  </DownLoad>
                )}
              </LinkBox>
            </Info>
          ) : (
            <Info>
              <InfoRow>
                <InfoBox>
                  <InfoContent>
                    <InfoTitle>연락처</InfoTitle>
                    <InfoDetail>(+82) 10-2363-7164</InfoDetail>
                  </InfoContent>
                </InfoBox>
                <InfoBox>
                  <InfoContent>
                    <InfoTitle>이메일</InfoTitle>
                    <InfoDetail>woodylovesboota@gmail.com</InfoDetail>
                  </InfoContent>
                </InfoBox>
              </InfoRow>
              <InfoRow>
                <InfoBox>
                  <InfoContent>
                    <InfoTitle>주소</InfoTitle>
                    <InfoDetail>(13628) 대한민국 경기도 성남시 분당구 미금일로 58</InfoDetail>
                  </InfoContent>
                </InfoBox>
                <InfoBox>
                  <InfoContent>
                    <InfoTitle>팔로우</InfoTitle>
                    <List>
                      <Link href="https://github.com/WoodyLovesBoota" target="_blank">
                        GITHUB
                      </Link>
                      <Link href="https://www.instagram.com/tttaeook/" target="_blank">
                        INSTAGRAM
                      </Link>
                      <Link
                        href="https://www.linkedin.com/in/tae-wook-yang-6762092a2/"
                        target="_blank"
                      >
                        LINKEDIN
                      </Link>
                      <Link href="https://velog.io/@woodylovescoding" target="_blank">
                        BLOG
                      </Link>
                    </List>
                  </InfoContent>
                </InfoBox>
              </InfoRow>
            </Info>
          )}
        </Container>
        <Iframe name="frAttachFiles"></Iframe>
      </Main>
    </Wrapper>
  );
});

export default Contact;

const Wrapper = styled.div`
  width: 100%;
  padding-left: 200px;
`;

const Main = styled.div`
  padding: 125px 0;
  padding-top: 300px;
  border-left: 0.5px solid gray;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 500;
  padding-left: 80px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  padding-bottom: 40px;
  border-bottom: 1px solid #e74946;
`;

const Iframe = styled.iframe`
  display: none;
`;

const Container = styled.div``;

const LinkBox = styled.div``;

const DownLoad = styled(motion.div)`
  margin-top: 72px;
  padding: 15px 25px;
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  color: white;
  background-color: ${(props) => props.theme.main.accent};
  border-radius: 15px;
  cursor: pointer;
  @media (max-width: 800px) {
    margin-top: 16px;
  }
`;

const DarkDownLoad = styled(motion.div)`
  margin-top: 72px;
  padding: 15px 25px;
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  color: white;
  background-color: ${(props) => props.theme.main.accent};
  border-radius: 15px;
  cursor: pointer;
  @media (max-width: 800px) {
    margin-top: 16px;
  }
`;

const Form = styled.form`
  width: 48%;
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;

const NameInput = styled.input`
  width: 100%;
  height: 64px;
  border-radius: 8px;
  border: none;
  margin-bottom: 20px;
  padding: 20px;
  background-color: ${(props) => props.theme.bg.normal};
  color: ${(props) => props.theme.word.main};
  font-size: 16px;

  &:focus {
    outline: none;
    border: 2.5px solid ${(props) => props.theme.main.accent};
  }
  @media (max-width: 1000px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

const EmailInput = styled.input`
  width: 100%;
  height: 64px;
  border-radius: 8px;
  border: none;
  margin-bottom: 20px;
  padding: 20px;
  background-color: ${(props) => props.theme.bg.normal};
  color: ${(props) => props.theme.word.main};
  font-size: 16px;

  &:focus {
    outline: none;
    border: 2.5px solid ${(props) => props.theme.main.accent};
  }
  @media (max-width: 1000px) {
    margin-bottom: 10px;
  }
`;

const MessageInput = styled.textarea`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  border: none;
  padding: 20px;
  background-color: ${(props) => props.theme.bg.normal};
  color: ${(props) => props.theme.word.main};
  margin-bottom: 20px;
  font-size: 16px;
  &:focus {
    outline: none;
    border: 2.5px solid ${(props) => props.theme.main.accent};
  }
  @media (max-width: 1000px) {
    min-height: 200px;
    margin-bottom: 10px;
  }
`;

const Button = styled(motion.button)`
  width: 100%;
  background-color: ${(props) => props.theme.main.accent};
  color: white;
  padding: 20px;
  border: none;
  border-radius: 10px;
  margin-top: auto;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  @media (max-width: 1000px) {
    padding: 10px;
    margin-top: 0;
    margin-bottom: 30px;
  }
`;

const Info = styled.div`
  padding-left: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InfoRow = styled.div`
  margin-bottom: 80px;
  display: flex;
  width: 70%;
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  width: 50%;
`;

const InfoDetail = styled.h2`
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme.word.main};
`;

const InfoTitle = styled.h2`
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 20px;
`;

const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
`;

const List = styled.div`
  display: flex;
  width: 100%;
`;

const Link = styled.a`
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme.word.main};
  margin-right: 15px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Icon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 21px;
  background-color: ${(props) => props.theme.main.hlbg};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: ${(props) => props.theme.word.black};
  margin-right: 40px;
  box-shadow: 0px 0px 30px 0 ${(props) => props.theme.bg.blur};
  @media (max-width: 800px) {
    margin-right: 25px;
  }
`;

const buttonVar = {
  click: { scale: 0.95 },
};

interface IForm {
  name: string;
  email: string;
  message: string;
}
