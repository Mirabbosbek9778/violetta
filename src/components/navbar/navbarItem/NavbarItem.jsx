import { Link } from "react-router-dom";
import { Text, Main, Wrapper } from "./style";

const NavbarItem = () => {
  return (
    <Wrapper>
      <Main>
        <Link to="/about">
          <Text>About</Text>
        </Link>
        <Link to="/contact">
          <Text>Contact</Text>
        </Link>
        <Link to="/product">
          <Text>Product</Text>
        </Link>
      </Main>
    </Wrapper>
  );
};

export default NavbarItem;
