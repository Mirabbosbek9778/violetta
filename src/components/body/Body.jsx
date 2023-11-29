import { Compressing } from "../../assets/allImage";
import { Image, Wrapper } from "./style";

const Body = () => {
  return (
    <Wrapper>
      <Image
        src={Compressing}
        alt="Compressing"
        className="w-full md:w-auto h-auto max-w-full"
      />
    </Wrapper>
  );
};

export default Body;
