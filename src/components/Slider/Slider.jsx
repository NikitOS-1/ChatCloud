import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import { Slide } from "./Slide/Slide";

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
        pagination={false}
        mousewheel={true}
        keyboard={true}
        loop={true}
        // autoplay={{ delay: 10000, disableOnInteraction: false }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper">
        <SwiperSlide>
          <Slide
            img={MainIllustrationFirst}
            title={"Group Chats"}
            text={"Add new people to your friend list"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            img={MainIllustrationSecond}
            title={"Find new friends around the world"}
            text={"Add new people to your friend list"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            img={MainIllustrationThird}
            title={"Share your hobbies with others"}
            text={"Chat with people based on common interests"}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Slider;
