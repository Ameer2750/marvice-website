import React from "react";
import imgOne from "../assets/marvice/Brand Logos/img-1.png";
import imgTwo from "../assets/marvice/Brand Logos/img-2.png";
import imgThree from "../assets/marvice/Brand Logos/img-3.png";
import imgFour from "../assets/marvice/Brand Logos/img-4.png";
import imgFive from "../assets/marvice/Brand Logos/img-5.png";
import imgSix from "../assets/marvice/Brand Logos/img-6.png";

const logos = [imgOne, imgTwo, imgThree, imgFour, imgFive, imgSix];

const Brands = () => {
  return (
    <div className="md:py-10 py-5 text-center md:px-10 overflow-hidden container mx-auto">
      <h1 className="md:text-[2.5rem] text-[1.8rem] text-[#162340] font-semibold">
        Trusted by Leading Brands & Institutions
      </h1>

      {/* Marquee Wrapper */}
      <div className="relative w-full mt-10 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...logos, ...logos].map((img, index) => (
            <img
              key={index}
              src={img}
              alt="brand"
              className="h-[100px] w-auto object-contain mx-10"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
