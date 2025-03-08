import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import imgOne from "../assets/marvice/Brand Logos/img-1.png";
import imgTwo from "../assets/marvice/Brand Logos/img-2.png";
import imgThree from "../assets/marvice/Brand Logos/img-3.png";
import imgFour from "../assets/marvice/Brand Logos/img-4.png";
import imgFive from "../assets/marvice/Brand Logos/img-5.png";
import imgSix from "../assets/marvice/Brand Logos/img-6.png";

const logos = [
  { id: 1, img: imgOne },
  { id: 2, img: imgTwo },
  { id: 3, img: imgThree },
  { id: 4, img: imgFour },
  { id: 5, img: imgFive },
  { id: 6, img: imgSix },
];

const Brands = () => {
  return (
    <div className="py-10 text-center px-10">
      <h1 className="text-[2.5rem] text-[#162340] font-semibold ">
        Trusted by Leading Brands & Institutions
      </h1>

      {/* Swiper Carousel */}
      <Swiper
        breakpoints={{
          640: { slidesPerView: 3 }, // On small screens, show 3 logos
          768: { slidesPerView: 4 }, // On tablets, show 4 logos
          1024: { slidesPerView: 4}, // On desktops, show 6 logos
        }}
        spaceBetween={10}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay]}
        className="mt-10 container mx-auto"
      >
        {logos.map((data) => (
          <SwiperSlide key={data.id} className="flex flex-row justify-center">
            <img src={data.img} alt="brand" className="h-[140px] w-[400px] object-fit" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
