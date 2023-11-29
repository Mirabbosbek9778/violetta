import { OrderStatus } from "../../assets/allImage";
import { Container, Content, Main, Text, TextHover, Wrapper } from "./style";
import { Md6FtApart, MdOutlinePolicy, MdOutlinePhone } from "react-icons/md";
import { IoMdInformationCircle } from "react-icons/io";
import { FaTelegram, FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import {
  CustomerServiceOutlined,
  WechatOutlined,
  CreditCardOutlined,
  MailOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Main>
          <Text>Contact</Text>
          <div className="flex flex-col gap-4">
            <TextHover>
              <MdOutlinePhone />
              +998 99 577 92 29
            </TextHover>
            <TextHover>
              <MdOutlinePhone />
              +998 99 577 92 29
            </TextHover>
          </div>
        </Main>
        <Main>
          <Text>Orders and Returns</Text>
          <div className="flex flex-col gap-4">
            <TextHover sizing="true">
              <img src={OrderStatus} alt="" className="w-7 h-7" /> Order status
            </TextHover>
            <TextHover gap="true">
              <IoMdInformationCircle className="w-7 h-7" />
              information about delivery
            </TextHover>
            <TextHover sizing="true">
              <MdOutlinePolicy className="w-7 h-7" />
              Return policy
            </TextHover>
          </div>
        </Main>
        <Main>
          <Text>Email</Text>
          <div className="flex flex-col gap-4">
            <TextHover>
              <CustomerServiceOutlined className="w-7 h-7" /> Customer service
            </TextHover>
            <TextHover sizing="true">
              <WechatOutlined className="w-7 h-7" /> Live chat
            </TextHover>
            <TextHover>
              <CreditCardOutlined className="w-7 h-7" /> About credit card VS
            </TextHover>
            <TextHover>
              <Md6FtApart className="w-7 h-7" />
              Find a partner
            </TextHover>
            <TextHover>
              <MailOutlined className="w-7 h-7" />
              violetta@gmail.com
            </TextHover>
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
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Footer;
