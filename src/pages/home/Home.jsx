import Body from "../../components/body/Body";
import Navbar from "../../components/navbar/Navbar";
import Item from "../../components/navbar/item/Item";
import Message from "../../components/message/Message";
import Footer from "../../components/footer/Footer";
import { Wrapper } from "../../components/card/style";
import MiniCard from "../../components/miniCard/MiniCard";
import CardGeneral from "../../components/generalCard/CardGeneral";
import Maps from "../../components/map/Map";

const Home = () => {
  return (
    <Wrapper>
      <Navbar />
      <Item />
      <Body />
      <div className="h-5"></div>
      <CardGeneral />
      <div className="h-5"></div>
      <div className="flex gap-4 items-center">
        <Maps />
        <Message />
      </div>
      <div className="h-5"></div>
      <MiniCard />
      <Footer />
    </Wrapper>
  );
};

export default Home;
