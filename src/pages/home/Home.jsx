import Body from "../../components/body/Body";
import Navbar from "../../components/navbar/Navbar";
import Item from "../../components/navbar/item/Item";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map";
import Message from "../../components/message/Message";
import Footer from "../../components/footer/Footer";
import { Main, Wrapper } from "../../components/card/style";

const Home = () => {
  return (
    <Wrapper>
      <Navbar />
      <Item />
      <Body />
      <Main gap="true">
        <Card />
        <div className="flex gap-2 items-center">
          <Map />
          <Message />
        </div>
      </Main>
      <Footer />
    </Wrapper>
  );
};

export default Home;
