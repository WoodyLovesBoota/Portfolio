import styled from "styled-components";
import Header from "./Header";
import { motion } from "framer-motion";
import { forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPhoneVolume, faEnvelope, faCakeCandles } from "@fortawesome/free-solid-svg-icons";
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
      <Header title="Contact" subTitle="ABOUT ME" isCenter={false} />
      <Container>
        <Form
          method="POST"
          action="https://script.google.com/macros/s/AKfycbxferxVdCmG0i2_T4N-neira2mG8sA81Ujp4HYk3rT8Q0WhNR4OfdlWKrpTcfoENuJt/exec"
          target="frAttachFiles"
          data-email="woodylovesboota@gmail.com"
        >
          <NameInput
            {...register("name", { required: true })}
            name="name"
            type="text"
            placeholder={isEng ? "Name" : "이름"}
          />
          <EmailInput
            {...register("email", { required: true })}
            name="email"
            type="text"
            placeholder={isEng ? "Email" : "이메일"}
          />
          <MessageInput
            {...register("message", { required: true })}
            name="message"
            placeholder={isEng ? "Message" : "메시지"}
          />
          <Button variants={buttonVar} whileTap={"click"} type="submit">
            {isEng ? "Send Message" : "메시지 보내기"}
          </Button>
        </Form>
        {isEng ? (
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
            <InfoBox>
              <Icon>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Icon>
              <InfoContent>
                <InfoTitle>주소</InfoTitle>
                <InfoDetail>(13628) 대한민국 경기도 성남시 분당구 미금일로 58</InfoDetail>
              </InfoContent>
            </InfoBox>
            <InfoBox>
              <Icon>
                <FontAwesomeIcon icon={faPhoneVolume} />
              </Icon>
              <InfoContent>
                <InfoTitle>연락처</InfoTitle>
                <InfoDetail>(+82) 10-2363-7164</InfoDetail>
              </InfoContent>
            </InfoBox>
            <InfoBox>
              <Icon>
                <FontAwesomeIcon icon={faEnvelope} />
              </Icon>
              <InfoContent>
                <InfoTitle>이메일</InfoTitle>
                <InfoDetail>woodylovesboota@gmail.com</InfoDetail>
              </InfoContent>
            </InfoBox>
            <InfoBox>
              <Icon>
                <FontAwesomeIcon icon={faCakeCandles} />
              </Icon>
              <InfoContent>
                <InfoTitle>생년월일</InfoTitle>
                <InfoDetail>1995.12.26</InfoDetail>
              </InfoContent>
            </InfoBox>
            <LinkBox>
              {isDark ? (
                <DarkDownLoad variants={buttonVar} whileTap={"click"}>
                  이력서 다운받기
                </DarkDownLoad>
              ) : (
                <DownLoad variants={buttonVar} whileTap={"click"}>
                  이력서 다운받기
                </DownLoad>
              )}
            </LinkBox>
          </Info>
        )}
      </Container>
      <Iframe name="frAttachFiles"></Iframe>
    </Wrapper>
  );
});

export default Contact;

const Wrapper = styled.div`
  width: 100%;
  padding: 8%;
`;

const Iframe = styled.iframe`
  display: none;
`;

const Container = styled.div`
  display: flex;
  padding: 5% 0;
  justify-content: space-between;
  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

const LinkBox = styled.div``;

const DownLoad = styled(motion.div)`
  margin-top: 5%;
  padding: 15px 25px;
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  color: white;
  background-color: ${(props) => props.theme.main.accent};
  border-radius: 15px;
  cursor: pointer;
`;

const DarkDownLoad = styled(motion.div)`
  margin-top: 5%;
  padding: 15px 25px;
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  color: white;
  background-color: ${(props) => props.theme.main.accent};
  border-radius: 15px;
  cursor: pointer;
`;

const Form = styled.form`
  width: 45%;
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;

const NameInput = styled.input`
  width: 90%;
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
  }
`;

const EmailInput = styled.input`
  width: 90%;
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
  }
`;

const MessageInput = styled.textarea`
  width: 90%;
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
    border: 2.5008px solid ${(props) => props.theme.main.accent};
  }
  @media (max-width: 1000px) {
    width: 100%;
    min-height: 200px;
  }
`;

const Button = styled(motion.button)`
  width: 90%;
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
    width: 100%;
  }
`;

const Info = styled.div`
  width: 50%;
  padding: 3% 5%;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${(props) => props.theme.word.main};
  background-color: ${(props) => props.theme.bg.lighter};
  box-shadow: 0px 0px 64px 0 ${(props) => props.theme.bg.blur};
  @media (max-width: 1000px) {
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
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => props.theme.word.sub};
`;

const InfoTitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
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
  margin-right: 2.5rem;
  box-shadow: 0px 0px 30px 0 ${(props) => props.theme.bg.blur};
`;

const buttonVar = {
  click: { scale: 0.95 },
};

interface IForm {
  name: string;
  email: string;
  message: string;
}
