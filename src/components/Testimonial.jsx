import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import testimonial from "../assets/marvice/Background Abstracts/world Map.png";
import client from "../assets/marvice/testimonial/Ellipse 3.png";
import arrow from "../assets/marvice/testimonial/Frame 53.png";
import brand from "../assets/marvice/testimonial/Vector.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const cardData = [
  {
    id: 1,
    img: client,
    brandImg: brand,
  },
  {
    id: 2,
    img: client,
    brandImg: brand,
  },
  {
    id: 3,
    img: client,
    brandImg: brand,
  },
];

const Testimonial = () => {
  return (
    <div className="relative container mx-auto py-14">
      <img src={testimonial} alt="testimonial" />
      <div className="flex flex-col justify-center items-center container mx-auto">
        <h1 className="absolute top-28 text-[#4230D3] text-[1rem] font-semibold bg-gradient-to-r from-[#D9D6F6] to-[#F4F4Fb] rounded-full px-2 py-2">
          Testimonial
        </h1>
        <h2 className="absolute top-44 text-center text-[3rem] leading-12 font-semibold text-[#162340]">
          Trusted by the world's fastest growing companies
        </h2>
      </div>

      {/* Swiper Slider */}
      <div className="absolute top-80 left-50 w-full">
        <Swiper
          slidesPerView={1}
          navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
          modules={[Navigation]}
          loop={true}
          spaceBetween={30}
          className="flex flex-row justify-center items-center"
        >
          {cardData.map((data) => (
            <SwiperSlide key={data.id} className="flex justify-center">
              <div className="relative flex flex-row items-center gap-10">
                <img src={client} alt="client" className="w-[288px] h-[278px]" />
                <img src={arrow} alt="arrow" className="absolute bottom-0 left-10 w-[50px] h-[50px]" />
                <div className="flex flex-col gap-5 w-[626px] h-[250px] mt-5">
                  <img src={brand} alt="brand" className="w-[100px]" />
                  <p className="text-[#8F99AC] leading-8 text-[1.25rem]">
                    “It is a pleasure to work with the team at Marvice Media Pvt Ltd. They're knowledge of websites and all things digital is a breath of fresh air. Many agencies claim to understand and know what's going on in the marketplace, but this firm really does!”
                  </p>
                  <span className="text-[#4230D3] text-[1.25rem]">
                    MATTHEW TAYLOR, KIA MOTORS
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-[650px] left-1/2 transform -translate-x-1/2 flex gap-6">
        <button className="prev-btn bg-[#DDDAF7] text-[#4230D3] cursor-pointer px-6 py-3 rounded-full font-semibold text-lg">
          <IoIosArrowBack  />
        </button>
        <button className="next-btn bg-[#DDDAF7] text-[#4230D3] cursor-pointer px-6 py-3 rounded-full font-semibold text-lg">
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
