import { Container, Wrapper } from "./style";
import { Text } from "../style";
import { Link } from "react-router-dom";

const Item = () => {
  return (
    <Wrapper>
      <Container>
        <Link to="/about">
          <Text>About</Text>
        </Link>
        <Link to="/contact">
          <Text>Contact</Text>
        </Link>
        <Link to="/product">
          <Text>Product</Text>
        </Link>
      </Container>
    </Wrapper>
  );
};

export default Item;
