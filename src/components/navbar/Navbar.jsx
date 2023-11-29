import { Container, Image, Input, Select, Text, Wrapper } from "./style";
import { Logotip } from "../../assets/allImage";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <Link to="/" className="flex items-center gap-3">
          <Image src={Logotip} alt="logo" />
          <Text>Violetta</Text>
        </Link>
        <Input type="text" placeholder="Search" />
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

// const [sidebarOpen, setSidebarOpen] = useState(false);

// const toggleSidebar = () => {
//   setSidebarOpen(!sidebarOpen);
// };

// const closeSidebar = () => {
//   setSidebarOpen(false);
// };

{
  /* <ImageMenu src={Menu} alt="Menu" onClick={toggleSidebar} />
    
    <Sidebar isOpen={sidebarOpen}>
              <button
                onClick={closeSidebar}
                className="w-10 h-10 text-white text-[34px] font-bold"
              >
                X
              </button>
              <div className="flex items-center gap-3">
                <Image src={Logo2} alt="logo" />
                <Text>Violetta</Text>
                </div>
              <Input type="text" placeholder="Search" />
              <Select name="" id="">
              <option value="English">English</option>
              <option value="Russian">Russian</option>
              <option value="Turkey">Turkey</option>
              </Select>
            </Sidebar> */
}
