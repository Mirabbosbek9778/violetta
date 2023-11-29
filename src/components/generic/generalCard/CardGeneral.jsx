import { Card } from "antd";
const { Meta } = Card;

import { dataCards } from "../../../mock/dataCards";
import { Compressing } from "../../../assets/allImage";

import { Link } from "react-router-dom";

const CardGeneral = () => {
  return (
    <div className="flex gap-4">
      {dataCards.slice(0, 3).map((item, _) => (
        <Link key={_} to="/product">
          <Card
            hoverable
            className="w-[350px] h-[400px]"
            cover={
              <img
                alt="Compressing"
                src={Compressing}
                className="w-full h-[200px] bg-cover"
              />
            }
          >
            <Meta
              title="Europe Street beat"
              description={item?.about}
              className="font-sans font-normal"
            />
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default CardGeneral;
