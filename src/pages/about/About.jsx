import { Container, Wrapper } from "../../components/body/style";
import { Compressing } from "../../assets/allImage";
import Description from "../../components/description/Description";
import Navbar from "../../components/navbar/Navbar";
import Item from "../../components/navbar/item/Item";

const About = () => {
  return (
    <Wrapper>
      <Navbar />
      <Item />
      <Container className="pt-4">
        <div className="flex gap-5 pl-2 items-center justify-center">
          <img
            src={Compressing}
            alt="Compress2"
            className="w-[700px] h-[700px] rounded-sm"
          />
          <Description />
        </div>
      </Container>
    </Wrapper>
  );
};

export default About;
