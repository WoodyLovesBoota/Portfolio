import styled from "styled-components";
import { forwardRef } from "react";

import { useRecoilValue } from "recoil";
import { languageState } from "../atoms";

const Contact = forwardRef<HTMLDivElement>((props, ref) => {
  const isEng = useRecoilValue(languageState);

  return (
    <Wrapper ref={ref}>
      <Title>
        <span>C</span>ontact
      </Title>
      {isEng ? (
        <Info>
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
              <InfoTitle>Address</InfoTitle>
              <InfoDetail>
                (13628) Bundang-gu, Seongnam-si, Gyeonggi-do, Republic of Korea
              </InfoDetail>
            </InfoContent>
          </InfoBox>
          <InfoBox>
            <InfoContent>
              <InfoTitle>Follow</InfoTitle>
              <List>
                <Link href="https://github.com/WoodyLovesBoota" target="_blank">
                  GITHUB
                </Link>
                <Link href="https://www.instagram.com/tttaeook/" target="_blank">
                  INSTAGRAM
                </Link>
                <Link href="https://www.linkedin.com/in/tae-wook-yang-6762092a2/" target="_blank">
                  LINKEDIN
                </Link>
                <Link href="https://velog.io/@woodylovescoding" target="_blank">
                  BLOG
                </Link>
              </List>
            </InfoContent>
          </InfoBox>
        </Info>
      ) : (
        <Info>
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
                <Link href="https://www.linkedin.com/in/tae-wook-yang-6762092a2/" target="_blank">
                  LINKEDIN
                </Link>
                <Link href="https://velog.io/@woodylovescoding" target="_blank">
                  BLOG
                </Link>
              </List>
            </InfoContent>
          </InfoBox>
        </Info>
      )}
    </Wrapper>
  );
});

export default Contact;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 500px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 400;
  span {
    color: #e74946;
    font-size: 18px;
    font-weight: 500;
  }
  margin-bottom: 100px;
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
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  width: 50%;
`;

const InfoDetail = styled.h2`
  font-size: 16px;
  font-weight: 400;
`;

const InfoTitle = styled.h2`
  font-size: 12px;
  font-weight: 400;
`;

const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
