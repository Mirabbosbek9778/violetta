import Navbar from "../../components/navbar/Navbar";
import Item from "../../components/navbar/item/Item";
import Cards from "../../components/generic/card/Card";
import { Main, Wrapper } from "../../components/generic/card/style";
import { dataCards } from "../../mock/dataCards";

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
