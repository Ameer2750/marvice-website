import React from "react";
import hero from "../assets/marvice/Images/Hero Section/Hero Image.png";
import star from "../assets/marvice/Images/Hero Section/star.png";
import arrow from "../assets/marvice/Icons/arrow-right.svg";

const Hero = () => {
  return (
    <div className="container mx-auto overflow-hidden">
      <div className="relative  w-full max-w-[1360px]  h-screen flex items-center justify-center ">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${hero})` }}
        ></div>

        {/* Overlay Circles */}
        <div className="absolute w-[70vw] h-[60vw] max-w-[800px] max-h-[800px] bg-[#16234066]/90 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-[45vw] h-[45vw] max-w-[500px] max-h-[500px] bg-[#16234066]/80 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

        {/* Content (Now Vertically Centered) */}
        <div className="relative text-white flex flex-col items-center text-center max-w-4xl px-5 z-10">
          {/* Rating */}
          <div className="flex items-center gap-2  px-4 py-2 ">
            <img src={star} alt="star" className="w-5 h-5" />
            <span className="text-[1.25rem] font-semibold">5.0</span>
            <span className="text-[1.25rem]">High Rating Reviews</span>
          </div>

          {/* Heading */}
          <h1 className="text-[4.625rem] max-w-[560px] sm:text-5xl md:text-6xl font-semibold leading-tight mt-4">
            We Provide Digital Solutions
          </h1>

          {/* Description */}
          <p className="text-[1.25rem] sm:text-xl mt-4 max-w-3xl leading-[26px] text-light">
            Onscreens is your gateway to mastering the digital landscape. We transform businesses with compelling branding, strategic marketing, and cutting-edge development solutions.
          </p>

          {/* Button */}
          <button className="mt-8 flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#E7603F] to-[#3B2AAA] hover:scale-105 transition">
            <span className="text-white">Get Started Now</span>
            <img
              src={arrow}
              alt="arrow"
              className="bg-white rounded-full p-2 w-8 h-8"
            />
          </button>
        </div>
      </div>
    </div>

  );
};

export default Hero;
