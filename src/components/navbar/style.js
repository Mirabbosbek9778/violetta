import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #b05fa1;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 10px;
  @media (max-width: 550px) {
    display: none;
  }
`;

const Text = styled.h1`
  color: #fff;
  font-family: Okta Neue, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (max-width: 550px) {
    margin-bottom: 20px;
    display: none;
  }
`;
const Input = styled.input`
  width: 350px;
  height: 50px;
  outline: none;
  border-radius: 10px;
  padding-left: 10px;
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 550px) {
    display: none;
  }
`;

const Select = styled.select`
  width: 100px;
  height: 50px;
  outline: none;
  font-size: 18px;
  border-radius: 10px;
  background-color: transparent;
  border: 1px solid white;
  color: white;

  &:hover {
    cursor: pointer;
    color: black;
  }

  @media (max-width: 550px) and (min-width: 550px) {
    display: none;
  }
`;

const ImageMenu = styled.img`
  width: 50px;
  height: 50px;

  @media (min-width: 550px) {
    display: none;
  }
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
  transition: right 0.3s ease-in-out;
`;

export { Container, Wrapper, Image, Text, Input, Select, ImageMenu, Sidebar };
