import { Container, Wrapper } from "./style";
import { Text } from "../style";
import { Link } from "react-router-dom";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

const Item = () => {
  const items = [
    {
      key: "1",
      label: (
        <Link to="/about">
          <Text colur="true">About</Text>
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link to="/about">
          <Text colur="true">Подарочные коллекции</Text>
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link to="/about">
          <Text colur="true">БЮСТГАЛЬТЕРЫ</Text>
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <Link to="/about">
          <Text colur="true">ТРУСИКИ</Text>
        </Link>
      ),
    },
    {
      key: "5",
      label: (
        <Link to="/about">
          <Text colur="true">Ночные пижамы</Text>
        </Link>
      ),
    },
    {
      key: "6",
      label: (
        <Link to="/about">
          <Text colur="true">СПОРТ И ОТДЫХ- спорт бельё шорты</Text>
        </Link>
      ),
    },
    {
      key: "7",
      label: (
        <Link to="/about">
          <Text colur="true">ДАМСКОЕ БЕЛЬЕ</Text>
        </Link>
      ),
    },
    {
      key: "8",
      label: (
        <Link to="/about">
          <Text colur="true">НОВЫЙ!</Text>
        </Link>
      ),
    },
    {
      key: "9",
      label: (
        <Link to="/about">
          <Text colur="true">РАСПРОДАЖА</Text>
        </Link>
      ),
    },
  ];

  return (
    <Wrapper>
      <Container>
        <Dropdown
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <Text>About</Text>
              <DownOutlined className="text-white" />
            </Space>
          </a>
        </Dropdown>
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

{
  /* <Text>About</Text> */
}
// <Select gap="true">
//   <option value="">
//     <Link to="/about">About</Link>
//   </option>
//   <option value="">Подарочные коллекции</option>
//   <option value="">БЮСТГАЛЬТЕРЫ</option>
//   <option value="">ТРУСИКИ</option>
//   <option value="">Ночные пижамы</option>
//   <option value="">СПОРТ И ОТДЫХ- спорт бельё шорты </option>
//   <option value="">ДАМСКОЕ БЕЛЬЕ</option>
//   <option value="">НОВЫЙ!</option>
//   <option value="">РАСПРОДАЖА</option>
// </Select>
