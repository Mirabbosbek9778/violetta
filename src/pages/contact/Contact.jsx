import { Container, Wrapper } from "../../components/body/style";
import Footer from "../../components/footer/Footer";
import Maps from "../../components/map/Map";
import Message from "../../components/message/Message";
import Navbar from "../../components/navbar/Navbar";
import Item from "../../components/navbar/item/Item";

const Contact = () => {
  return (
    <Wrapper>
      <Navbar />
      <Item />
      <Container>
        <Maps />
        <Message />
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default Contact;
