import styled from "styled-components";

const Text = styled.h1`
  font-size: 20px;
  color: white;
  font-weight: 500;
  line-height: normal;
`;

const Wrapper = styled.div`
  width: 100%;
  background-color: rgb(158, 38, 158);
  display: flex;
  padding: 10px 150px 5px 200px;
`;
const Main = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  align-items: center;
  gap: 200px;
  justify-content: center;
`;

const Container = styled.div`
  color: white;
  cursor: pointer;
`;
export { Text, Wrapper, Main, Container };
