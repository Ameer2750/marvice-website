import React from "react";
import hero from "../assets/marvice/Images/Hero Section/Hero Image.png";
import star from "../assets/marvice/Images/Hero Section/star.png";
import arrow from "../assets/marvice/Icons/arrow-right.svg";

const Hero = () => {
  return (
    <div className="container mx-auto  overflow-hidden mt-20">
      <div className="relative   h-screen max-h-[1000px] flex items-center justify-center ">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${hero})` }}
        ></div>

        {/* Overlay Circles */}
        <div className="absolute md:w-[70vw] w-[120vw] md:h-[60vw] h-[125vw] max-w-[800px] max-h-[800px]  bg-[#16234066]/90 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute md:w-[45vw] w-[90vw] md:h-[45vw] h-[95vw] max-w-[500px] max-h-[500px] bg-[#16234066]/80 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

        {/* Content (Now Vertically Centered) */}
        <div className="relative text-white flex flex-col items-center text-center max-w-4xl px-5 z-10">
          {/* Rating */}
          <div data-aos="fade-up" className="flex items-center gap-2  px-4 py-2  ">
            <img src={star} alt="star" className="md:w-5 w-3 md:h-5 h-3" />
            <span  className="md:text-[1.25rem] text-[0.8rem] font-semibold">5.0</span>
            <span className="md:text-[1.25rem] text-[0.8rem]">High Rating Reviews</span>
          </div>

          {/* Heading */}
          <h1 data-aos="fade-up" className="md:text-[4.625rem] text-[2.5rem] max-w-[560px] sm:text-5xl md:text-6xl font-semibold leading-tight mt-4">
            We Provide Digital Solutions
          </h1>

          {/* Description */}
          <p data-aos="fade-up" className="md:text-[1.25rem] text-[0.8rem] sm:text-xl mt-4 max-w-3xl leading-[26px] text-light">
            Onscreens is your gateway to mastering the digital landscape. We transform businesses with compelling branding, strategic marketing, and cutting-edge development solutions.
          </p>

          {/* Button */}
          <button data-aos="fade-up" className="mt-8 flex items-center gap-3 md:px-6 px-4 md:py-1 py-3 rounded-full bg-gradient-to-r from-[#E7603F] to-[#3B2AAA] hover:scale-105 transition">
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




// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import hero from "../assets/marvice/Images/Hero Section/Hero Image.png";
// import star from "../assets/marvice/Images/Hero Section/star.png";
// import arrow from "../assets/marvice/Icons/arrow-right.svg";

// // Register GSAP plugins
// gsap.registerPlugin(ScrollTrigger);

// const Hero = () => {
//     const heroRef = useRef(null);
//     const overlayCircleOneRef = useRef(null);
//     const overlayCircleTwoRef = useRef(null);
//     const contentRef = useRef(null);
//     const ratingRef = useRef(null);
//     const headingRef = useRef(null);
//     const descriptionRef = useRef(null);
//     const buttonRef = useRef(null);

//     useEffect(() => {
//         // Animation for Background Image (Parallax + Blur Effect)
//         gsap.fromTo(
//             heroRef.current,
//             { y: -100, filter: "blur(10px)" },
//             {
//                 y: 100,
//                 filter: "blur(0px)",
//                 scrollTrigger: {
//                     trigger: heroRef.current,
//                     start: "top bottom",
//                     end: "bottom top",
//                     scrub: 1,
//                 },
//             }
//         );

//         // Animation for Overlay Circle One (Scale and Rotate)
//         gsap.fromTo(
//             overlayCircleOneRef.current,
//             { scale: 0, rotation: 0 },
//             {
//                 scale: 1,
//                 rotation: 360,
//                 duration: 2,
//                 scrollTrigger: {
//                     trigger: overlayCircleOneRef.current,
//                     start: "top 80%",
//                     end: "bottom 20%",
//                     scrub: 1,
//                 },
//             }
//         );

//         // Animation for Overlay Circle Two (Pulse + Glow Effect)
//         gsap.fromTo(
//             overlayCircleTwoRef.current,
//             { scale: 0, boxShadow: "0 0 0 0 rgba(22, 35, 64, 0.5)" },
//             {
//                 scale: 1,
//                 boxShadow: "0 0 20px 10px rgba(22, 35, 64, 0.5)",
//                 duration: 2,
//                 scrollTrigger: {
//                     trigger: overlayCircleTwoRef.current,
//                     start: "top 80%",
//                     end: "bottom 20%",
//                     scrub: 1,
//                 },
//             }
//         );

//         // Animation for Rating (Bounce + Glow Effect)
//         gsap.fromTo(
//             ratingRef.current,
//             { opacity: 0, y: -50, scale: 0.8 },
//             {
//                 opacity: 1,
//                 y: 0,
//                 scale: 1,
//                 duration: 1,
//                 ease: "elastic.out(1, 0.5)",
//                 scrollTrigger: {
//                     trigger: ratingRef.current,
//                     start: "top 80%",
//                     end: "bottom 20%",
//                     scrub: 1,
//                 },
//             }
//         );

//         // Animation for Heading (Fade In and Slide Up)
//         gsap.fromTo(
//             headingRef.current,
//             { opacity: 0, y: 50 },
//             {
//                 opacity: 1,
//                 y: 0,
//                 duration: 1.5,
//                 scrollTrigger: {
//                     trigger: headingRef.current,
//                     start: "top 80%",
//                     end: "bottom 20%",
//                     scrub: 1,
//                 },
//             }
//         );

//         // Animation for Description (Fade In with Typing Effect)
//         gsap.fromTo(
//             descriptionRef.current,
//             { opacity: 0 },
//             {
//                 opacity: 1,
//                 duration: 2,
//                 scrollTrigger: {
//                     trigger: descriptionRef.current,
//                     start: "top 80%",
//                     end: "bottom 20%",
//                     scrub: 1,
//                 },
//             }
//         );

//         // Animation for Button (Glow + Scale)
//         gsap.fromTo(
//             buttonRef.current,
//             { scale: 0, opacity: 0, boxShadow: "0 0 0 0 rgba(231, 96, 63, 0.5)" },
//             {
//                 scale: 1,
//                 opacity: 1,
//                 boxShadow: "0 0 20px 10px rgba(231, 96, 63, 0.5)",
//                 duration: 1,
//                 scrollTrigger: {
//                     trigger: buttonRef.current,
//                     start: "top 80%",
//                     end: "bottom 20%",
//                     scrub: 1,
//                 },
//             }
//         );
//     }, []);

//     return (
//         <div className="container mx-auto overflow-hidden mt-20">
//             <div className="relative h-screen max-h-[1000px] flex items-center justify-center">
//                 {/* Background Image */}
//                 <div
//                     ref={heroRef}
//                     className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//                     style={{ backgroundImage: `url(${hero})` }}
//                 ></div>

//                 {/* Overlay Circles */}
//                 <div
//                     ref={overlayCircleOneRef}
//                     className="absolute md:w-[70vw] w-[120vw] md:h-[60vw] h-[125vw] max-w-[800px] max-h-[800px] bg-[#16234066]/90 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//                 ></div>
//                 <div
//                     ref={overlayCircleTwoRef}
//                     className="absolute md:w-[45vw] w-[90vw] md:h-[45vw] h-[95vw] max-w-[500px] max-h-[500px] bg-[#16234066]/80 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//                 ></div>

//                 {/* Content (Now Vertically Centered) */}
//                 <div ref={contentRef} className="relative text-white flex flex-col items-center text-center max-w-4xl px-5 z-10">
//                     {/* Rating */}
//                     <div ref={ratingRef} className="flex items-center gap-2 px-4 py-2">
//                         <img src={star} alt="star" className="md:w-5 w-3 md:h-5 h-3" />
//                         <span className="md:text-[1.25rem] text-[0.8rem] font-semibold">5.0</span>
//                         <span className="md:text-[1.25rem] text-[0.8rem]">High Rating Reviews</span>
//                     </div>

//                     {/* Heading */}
//                     <h1 ref={headingRef} className="md:text-[4.625rem] text-[2.5rem] max-w-[560px] sm:text-5xl md:text-6xl font-semibold leading-tight mt-4">
//                         We Provide Digital Solutions
//                     </h1>

//                     {/* Description */}
//                     <p ref={descriptionRef} className="md:text-[1.25rem] text-[0.8rem] sm:text-xl mt-4 max-w-3xl leading-[26px] text-light">
//                         Onscreens is your gateway to mastering the digital landscape. We transform businesses with compelling branding, strategic marketing, and cutting-edge development solutions.
//                     </p>

//                     {/* Button */}
//                     <button ref={buttonRef} className="mt-8 flex items-center gap-3 md:px-6 px-4 md:py-1 py-3 rounded-full bg-gradient-to-r from-[#E7603F] to-[#3B2AAA] hover:scale-105 transition">
//                         <span className="text-white">Get Started Now</span>
//                         <img
//                             src={arrow}
//                             alt="arrow"
//                             className="bg-white rounded-full p-2 w-8 h-8"
//                         />
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Hero;
