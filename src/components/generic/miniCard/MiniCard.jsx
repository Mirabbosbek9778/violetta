import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Carousel1,
  Carousel2,
  Carousel3,
  Compressing,
} from "../../../assets/allImage";

import "swiper/css";
import "swiper/css/pagination";

import "../../../index.css";

const MiniCard = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={0}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
      autoplay={{
        delay: 2000,
        disableOnInteraction: true,
      }}
    >
      <SwiperSlide className="ml-[30px]">
        <img src={Compressing} alt="img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Carousel1} alt="img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Carousel2} alt="img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Carousel3} alt="img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Compressing} alt="img" />
      </SwiperSlide>
    </Swiper>
  );
};

export default MiniCard;
