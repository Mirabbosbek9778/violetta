import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  background-color: rgb(158, 38, 158);
  display: flex;
  padding: 10px 150px 10px 150px;
`;
const Main = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  /* color: white; */
  cursor: pointer;
`;
const ContainerItem = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Input = styled.input`
  width: 400px;
  border: none;
  border-radius: 10px;
  height: 50px;
  color: black;
  outline: none;
  padding-left: 20px;
  position: relative;
`;

const Text = styled.h1`
  font-weight: 700;
  font-size: ${({ size }) => (size ? "16px" : "26px")};
  color: ${({ size }) => (size ? "black" : "white")};
`;

const Image = styled.img`
  position: absolute;
  right: 830px;
  top: 20px;
`;

const LogoImg = styled.img`
  height: 48px;
  width: 48px;
`;
export { LogoImg, Wrapper, Main, Input, Container, ContainerItem, Text, Image };
