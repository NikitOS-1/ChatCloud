import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const MainIllustrationFirst = "/static/Illustaration/MainIllustrationFirst.svg";
const MainIllustrationSecond =
  "/static/Illustaration/MainIllustrationSecond.svg";
const MainIllustrationThird = "/static/Illustaration/MainIllustrationThird.svg";

const Slider = () => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper">
        <SwiperSlide>
          <div>
            <img src={MainIllustrationFirst} alt="picture" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={MainIllustrationSecond} alt="picture" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={MainIllustrationThird} alt="picture" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Slider;
