import styled from "styled-components";

const Header = ({ title, subTitle, isCenter }: IHeaderProps) => {
  return (
    <Wrapper isCenter={isCenter}>
      <SubTitle>
        <Bar />
        {subTitle}
      </SubTitle>
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div<{ isCenter: boolean }>`
  width: ${(props) => props.isCenter && "100%"};
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isCenter ? "center" : "flexStart")};
`;

const Bar = styled.div`
  background-color: gray;
  width: 1rem;
  height: 0.175rem;
  border-radius: 2px;
  margin-right: 0.9375rem;
`;

const SubTitle = styled.h2`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.word.sub};
  font-size: 16px;
  letter-spacing: 7px;
  margin-bottom: 10px;
  font-weight: 500;
  @media (max-width: 800px) {
    letter-spacing: 4px;
  }
`;

const Title = styled.h2`
  color: ${(props) => props.theme.word.main};
  font-size: 48px;
  font-weight: 500;
  letter-spacing: 1px;
  @media (max-width: 800px) {
    font-size: 32px;
  }
`;

interface IHeaderProps {
  title: string;
  subTitle: string;
  isCenter: boolean;
}
