import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;
export { Wrapper, Container, Image };
