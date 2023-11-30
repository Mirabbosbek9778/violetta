import { Container, Content, Main, Text, TextHover, Wrapper } from "./style";
import { FiYoutube } from "react-icons/fi";
import {
  FaTelegram,
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Main>
          <Text>Contact</Text>
          <div className="flex flex-col gap-4">
            <TextHover>+998 99 577 92 29</TextHover>
            <TextHover>+998 99 577 92 29</TextHover>
          </div>
        </Main>
        <Main>
          <Text>Orders and Returns</Text>
          <div className="flex flex-col gap-4">
            <TextHover sizing="true">Order status</TextHover>
            <TextHover gap="true">information about delivery</TextHover>
            <TextHover sizing="true">Return policy</TextHover>
          </div>
        </Main>
        <Main>
          <Text>Email</Text>
          <div className="flex flex-col gap-4">
            <TextHover>Customer service</TextHover>
            <TextHover sizing="true">Live chat</TextHover>
            <TextHover>About credit card VS</TextHover>
            <TextHover>Find a partner</TextHover>
            <TextHover>violetta@gmail.com</TextHover>
          </div>
        </Main>
        <Main gap>
          <Text>Social Set</Text>
          <Content>
            <a href="https://www.telegram.com/">
              <FaTelegram className="w-6 h-6" />
            </a>
            <TextHover size="true">Telegram</TextHover>
          </Content>
          <Content>
            <FiYoutube className="w-6 h-6" />
            <TextHover size="true">Youtube</TextHover>
          </Content>
          <Content>
            <FaFacebook className="w-6 h-6" />
            <TextHover size="true">Facebook</TextHover>
          </Content>
          <Content>
            <FaInstagramSquare className="w-6 h-6" />
            <TextHover size="true">Instagram</TextHover>
          </Content>
          <Content>
            <FaTwitter className="w-6 h-6" />
            <TextHover size="true">Twitter</TextHover>
          </Content>
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Footer;
