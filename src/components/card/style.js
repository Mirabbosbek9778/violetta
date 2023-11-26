import styled from "styled-components";

const Container = styled.div`
  width: 350px;
  height: 400px;
  border: 1px solid whitesmoke;
  box-shadow: 20px 20px 20px whitesmoke;
  border-radius: 10px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  padding-top: 20px;
  flex-wrap: wrap;
  flex-direction: ${({ gap }) => (gap ? "column" : "")};
`;

const Title = styled.h1`
  color: ${({ size }) => (size ? "gray" : " black")};
  font-family: Okta Neue, sans-serif;
  font-size: ${({ size }) => (size ? "18px" : " 24px")};
  font-style: normal;
  font-weight: ${({ size }) => (size ? "400" : " 600")};
  line-height: normal;
  cursor: pointer;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;

export { Container, Wrapper, Main, Title, Content };
