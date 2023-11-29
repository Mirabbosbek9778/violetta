/* eslint-disable react/prop-types */
import { Container, Content } from "./style";
import { Link } from "react-router-dom";
import { Card } from "antd";
const { Meta } = Card;
import { Compressing } from "../../../assets/allImage";

const Cards = ({ title, about }) => {
  return (
    <Container>
      <Content>
        <Link to="/product">
          <Card
            hoverable
            className="w-[350px] h-[400px]"
            cover={
              <img
                alt="Compressing"
                src={Compressing}
                className="w-full h-[200px] bg-cover"
              />
            }
          >
            <Meta title={title} description={about} />
          </Card>
        </Link>
      </Content>
    </Container>
  );
};

export default Cards;
