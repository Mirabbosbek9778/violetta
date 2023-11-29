import { Container, Image, Input, Select, Text, Wrapper } from "./style";
import { Logotip } from "../../assets/allImage";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <Link to="/" className="flex items-center gap-3">
          <Image src={Logotip} alt="logo" />
          <Text>Violetta</Text>
        </Link>
        <div>
          <Input type="text" placeholder="Search" />
          <FaSearch className="absolute top-[42px] ml-[320px]" />
        </div>
        <Select name="" id="">
          <option value="English">English</option>
          <option value="Russian">Russian</option>
          <option value="Turkey">Turkey</option>
        </Select>
      </Container>
    </Wrapper>
  );
};

export default Navbar;
