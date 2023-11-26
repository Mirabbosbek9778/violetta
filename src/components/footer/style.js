import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #b05fa1;
  margin-top: 20px;
  padding: 30px 150px 30px 150px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
`;

const Content = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    border-bottom: 1px solid red;
    color: red;
    cursor: pointer;
  }
`;

const Text = styled.h1`
  color: white;
  font-family: Okta Neue, sans-serif;
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => (gap ? "10px" : "20px")};
`;

const TextHover = styled.h1`
  color: white;
  font-family: Okta Neue, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  &:hover {
    border-bottom: ${({ size }) => (size ? "" : "1px solid red")};
    color: red;
    cursor: pointer;
  }
`;
export { Wrapper, Container, Content, Text, Main, TextHover };