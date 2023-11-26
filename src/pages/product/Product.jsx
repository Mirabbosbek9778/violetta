import Card from "../../components/card/Card";
import { dataCards } from "../../mock/dataCards";
import Navbar from "../../components/navbar/Navbar";
import Item from "../../components/navbar/item/Item";
import { Main, Wrapper } from "../../components/card/style";

const Product = () => {
  return (
    <Wrapper>
      <Navbar />
      <Item />
      <Main>
        {dataCards.map((item, _) => (
          <Card key={_} {...item} />
        ))}
      </Main>
    </Wrapper>
  );
};

export default Product;
