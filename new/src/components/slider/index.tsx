import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";

import {SliderBox, SliderImage} from "./slider.styles";

interface ImgProps {
  sliderImg: string
}

export default function SliderCard({sliderImg}: ImgProps) {
  return (
    <SliderBox>
      <Swiper
        grabCursor={true}
        pagination={true}
        modules={[Pagination]}
        className="mySwiper"
        autoplay={{
          delay: 1000
        }}
      >
        <SwiperSlide>
          <SliderImage src={sliderImg} alt={"SliderImage"}/>
        </SwiperSlide>
        <SwiperSlide>
          <SliderImage src={sliderImg} alt={"SliderImage"}/>
        </SwiperSlide>
        <SwiperSlide>
          <SliderImage src={sliderImg} alt={"SliderImage"}/>
        </SwiperSlide>
        <SwiperSlide>
          <SliderImage src={sliderImg} alt={"SliderImage"}/>
        </SwiperSlide>
        <SwiperSlide>
          <SliderImage src={sliderImg} alt={"SliderImage"}/>
        </SwiperSlide>
        <SwiperSlide>
          <SliderImage src={sliderImg} alt={"SliderImage"}/>
        </SwiperSlide>
      </Swiper>
    </SliderBox>
  );
}
