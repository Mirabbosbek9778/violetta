import { dataCards } from "../../mock/dataCards";
import Navbar from "../../components/navbar/Navbar";
import Item from "../../components/navbar/item/Item";
import { Main, Wrapper } from "../../components/card/style";
import Cards from "../../components/card/Card";

const Product = () => {
  return (
    <Wrapper>
      <Navbar />
      <Item />
      <Main>
        {dataCards.map((item, _) => (
          <Cards key={_} {...item} />
        ))}
      </Main>
    </Wrapper>
  );
};

export default Product;
