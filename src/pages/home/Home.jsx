import Body from "../../components/body/Body";
import Navbar from "../../components/navbar/Navbar";
import Item from "../../components/navbar/item/Item";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map";
import Message from "../../components/message/Message";
import Footer from "../../components/footer/Footer";
import { Wrapper } from "../../components/card/style";
import MiniCard from "../../components/miniCard/MiniCard";
import CardGeneral from "../../components/generalCard/CardGeneral";

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
        <Map />
        <Message />
      </div>
      <div className="h-5"></div>
      <MiniCard />
      <Footer />
    </Wrapper>
  );
};

export default Home;
