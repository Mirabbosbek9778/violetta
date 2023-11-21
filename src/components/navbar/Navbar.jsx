import {
  ContainerItem,
  Container,
  Input,
  Main,
  Wrapper,
  Text,
  Image,
  LogoImg,
} from "./style";
import Logo from "../../assets/images/logo.jpg";
import Search from "../../assets/icons/search.svg";
import { Button, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useState } from "react";

const Navbar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleLanguageChange = (key, label) => {
    setSelectedLanguage(label);
  };
  const items = [
    {
      key: "1",
      label: (
        <div className="flex items-center gap-4 justify-center hover:bg-yellow-500 ">
          <img
            src="https://blog-website-alisher-rustamov.vercel.app/img/leng/eng.png"
            alt="English"
          />

          <Text size>English</Text>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="flex items-center gap-4 justify-center hover:bg-yellow-500">
          <img
            src="https://blog-website-alisher-rustamov.vercel.app/img/leng/ru.png"
            alt="Russian"
          />
          <Text size>Russian</Text>
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div className="flex items-center gap-5 justify-center hover:bg-yellow-500">
          <img
            src="https://blog-website-alisher-rustamov.vercel.app/img/leng/uz.png"
            alt="Turkey"
          />
          <Text size>Turkey</Text>
        </div>
      ),
    },
  ];
  return (
    <Wrapper>
      <Main>
        <Container>
          <ContainerItem href="/">
            <LogoImg src={Logo} alt="" />
            <Text>Violetta</Text>
          </ContainerItem>
        </Container>
        <div className="flex">
          <Input type="text" placeholder="Search" />
          <Image src={Search} alt="Search" />
        </div>
        <Dropdown
          overlay={
            <Menu>
              {items.map((item) => (
                <Menu.Item
                  key={item?.key}
                  onClick={() =>
                    handleLanguageChange(
                      item?.key,
                      item?.label?.props?.children[1]?.props?.children
                    )
                  }
                >
                  {item?.label}
                </Menu.Item>
              ))}
            </Menu>
          }
          placement="bottom"
          arrow
        >
          <Button className="flex gap-2 justify-center items-center bg-white">
            {selectedLanguage}
            <DownOutlined />
          </Button>
        </Dropdown>
      </Main>
    </Wrapper>
  );
};

export default Navbar;
