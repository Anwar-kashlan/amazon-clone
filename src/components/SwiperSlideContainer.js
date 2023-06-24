import React from "react";
import { Navigation, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import style from "./Swiper.module.css";

const SwiperSlideContainer = ({ images }) => {
  return (
    <Swiper
      modules={[Navigation, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      navigation
      autoplay={{ delay: 5000 }}
      className={style.swiper}
    >
      {images.map((image) => (
        <SwiperSlide key={image}>
          <img className={style.homeImg} src={image} alt="carousel" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSlideContainer;
