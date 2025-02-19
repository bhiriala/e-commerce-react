import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; 
import "swiper/css/pagination";
import './Carrousel.css'
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import slide1 from"../../assets/img/h4-slide.png";
import slide2 from"../../assets/img/h4-slide2.png";
import slide3 from"../../assets/img/h4-slide3.png";
import slide4 from"../../assets/img/h4-slide4.png";

const images = [
    slide1,
    slide2,
    slide3,
    slide4
];

const Carousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      navigation 
      autoplay={{ delay: 4000, disableOnInteraction: false }} 
      style={{ width: "67%", height: "400px",marginTop:"1rem" }} 
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img
            src={img}
            alt={`Slide ${index}`}
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
