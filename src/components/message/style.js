import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  width: 300px;
  height: ${({ size }) => (size ? "80px" : "50px")};
  border: 1px solid gray;
  outline: none;
  padding-left: 10px;
  border-radius: 10px;
  background-color: whitesmoke;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100%;
  border: 1px solid gray;
  height: 50px;
  border-radius: 10px;
  background: rgb(65, 65, 226);
  outline: none;

  &:hover {
    cursor: pointer;
    background: blue;
  }
`;

export { Form, Input, Button };
