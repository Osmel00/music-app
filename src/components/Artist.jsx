import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
// Import Swiper styles
import "swiper/css";

export const Artist = ({ img }) => {
  return (
    <>
      <img
        className="object-cover rounded-full w-full shadow-2xl"
        src={img}
        alt="img"
      />
    </>
  );
};
