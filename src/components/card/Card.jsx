/* eslint-disable react/prop-types */
import { Container, Content, Title } from "./style";
import { Violet1 } from "../../assets/allImage";
import { Link } from "react-router-dom";

const Card = ({ title, about }) => {
  return (
    <Link to="/product">
      <Container>
        <Content>
          <img src={Violet1} alt="icon" className="w-full h-[200px]" />
          <div className="flex flex-col gap-5">
            <Title>{title}</Title>
            <Title size>{about}</Title>
          </div>
        </Content>
      </Container>
    </Link>
  );
};

export default Card;
