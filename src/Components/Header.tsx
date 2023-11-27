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
  background-color: lightgray;
  width: 1rem;
  height: 0.175rem;
  border-radius: 2px;
  margin-right: 15px;
`;

const SubTitle = styled.h2`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.word.sub};
  font-size: 1rem;
  letter-spacing: 7.5px;
  margin-bottom: 20px;
  font-weight: 500;
`;

const Title = styled.h2`
  color: ${(props) => props.theme.word.main};
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: 1px;
`;

interface IHeaderProps {
  title: string;
  subTitle: string;
  isCenter: boolean;
}
