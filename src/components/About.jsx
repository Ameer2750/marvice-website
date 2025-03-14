import React from 'react'
import imageOne from "../assets/marvice/Images/About Us Section/About 1.png"
import imageTwo from "../assets/marvice/Images/About Us Section/About 2.png"
import imageThree from "../assets/marvice/Images/About Us Section/About 3.png"
import arrow from "../assets/marvice/Icons/arrow-right.png"
import phone from "../assets/marvice/Icons/phone-call.svg"
import money from "../assets/marvice/Icons/Frame 18.png"
import time from "../assets/marvice/Icons/Frame 19.png"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 10000, // Animation duration in milliseconds
            once: true, // Animation runs only once
        });
    }, []);
    return (
        <div  id='about-us' className=' w-full '>
            <div className=' container mx-auto '>
                <div className='py-20 md:px-0 px-5 flex md:flex-row flex-col items-center justify-between gap-[28px] '>
                    {/* Left Section - Images (50%) */}
                    <div  data-aos="fade-up" className='flex flex-col gap-[28px] basis-1/2'>
                        <div className='w-full'>
                            <img
                                src={imageOne}
                                alt='image-one'
                                className='rounded-[32px] w-full h-[331.5px] object-cover'
                            />
                        </div>
                        <div  data-aos="fade-up" className='grid grid-cols-2 gap-[28px]'>
                            <img
                                src={imageTwo}
                                alt='image-two'
                                className='rounded-xl w-full h-[331.5px] object-cover'
                            />
                            <img
                                src={imageThree}
                                alt='image-three'
                                className='rounded-xl w-full h-[331.5px] object-cover'
                            />
                        </div>
                    </div>

                    {/* Right Section - Text Content (50%) */}
                    <div className='flex flex-col gap-[32px] basis-1/2 justify-center w-full'>
                        <h1 data-aos="fade-up" className='text-[#4230D3] text-[1rem] font-semibold bg-gradient-to-r from-[#D9D6F6] to-[#ffffff] rounded-full px-4 py-2 inline-block'>
                            Creative Approach
                        </h1>
                        <h2 data-aos="fade-up" className='text-[40px] leading-[64px] font-semibold text-[#162340] w-full'>
                            Choose The Best Digital Service Company
                        </h2>
                        <p data-aos="fade-up" className='text-[#8F99AC] leading-[36px] text-[1rem]'>
                            Marvice Media Pvt Ltd, founded in 2017, is a prominent digital solutions provider with three specialized brands. Leveraging advanced technology, creative insights, and strategic approaches, we excel in delivering innovative digital services that enhance growth and innovation across various industries. Our commitment spans all business scales, ensuring impactful solutions tailored to each client's unique needs.
                        </p>
                        {/* Buttons and Contact */}
                        <div data-aos="fade-up" className='flex  md:flex-wrap  flex-row items-center gap-5'>
                            <button className='flex flex-row items-center gap-2 bg-[#162340] rounded-full text-white py-4 md:px-10 px-2 cursor-pointer hover:scale-105 transition'>
                                <span className='md:text-[1.2rem] text-[0.9rem] leading-[100%]'>Learn More About Us</span>
                                <img src={arrow} alt='arrow' className='text-white w-5  ' />
                            </button>
                            <span className='flex flex-row items-center gap-2 font-semibold md:text-[1.2rem] text-[0.8rem]'>
                                <img src={phone} alt='phone' /> 80562 91930
                            </span>
                        </div>
                        {/* Benefits */}
                        <div data-aos="fade-up" className='grid md:grid-cols-2 grid-cols-1 gap-5 mt-5'>
                            <span className='flex flex-row items-center gap-2 text-[1rem] text-[#242E45]'>
                                <img src={money} alt='money' /> We Can Save Your Money
                            </span>
                            <span className='flex flex-row items-center gap-2 text-[1rem] text-[#242E45]'>
                                <img src={time} alt='time' /> Promise Specific Timeline Guarantee
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;





// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import imageOne from "../assets/marvice/Images/About Us Section/About 1.png";
// import imageTwo from "../assets/marvice/Images/About Us Section/About 2.png";
// import imageThree from "../assets/marvice/Images/About Us Section/About 3.png";
// import arrow from "../assets/marvice/Icons/arrow-right.png";
// import phone from "../assets/marvice/Icons/phone-call.svg";
// import money from "../assets/marvice/Icons/Frame 18.png";
// import time from "../assets/marvice/Icons/Frame 19.png";

// // Register GSAP plugins
// gsap.registerPlugin(ScrollTrigger);

// const About = () => {
//     const imageOneRef = useRef(null);
//     const imageTwoRef = useRef(null);
//     const imageThreeRef = useRef(null);
//     const textContentRef = useRef(null);
//     const buttonRef = useRef(null);
//     const benefitsRef = useRef(null);

//     useEffect(() => {
//         // Animation for Image One (Slide In from Left)
//         gsap.fromTo(
//             imageOneRef.current,
//             { x: -100, opacity: 0 },
//             {
//                 x: 0,
//                 opacity: 1,
//                 duration: 1,
//                 scrollTrigger: {
//                     trigger: imageOneRef.current,
//                     start: "top 90%",
//                     end: "bottom 10%",
//                     scrub: 1,
//                 },
//             }
//         );

//         // Animation for Image Two (Slide In from Bottom)
//         gsap.fromTo(
//             imageTwoRef.current,
//             { y: -50, opacity: 0 },
//             {
//                 y: 0,
//                 opacity: 1,
//                 duration: 1,
//                 scrollTrigger: {
//                     trigger: imageTwoRef.current,
//                     start: "top 90%",
//                     end: "bottom 10%",
//                     scrub: 1,
//                 },
//             }
//         );

//         // Animation for Image Three (Slide In from Right)
//         gsap.fromTo(
//             imageThreeRef.current,
//             { y: 50, opacity: 0 },
//             {
//                 y: 0,
//                 opacity: 1,
//                 duration: 1,
//                 scrollTrigger: {
//                     trigger: imageThreeRef.current,
//                     start: "top 90%",
//                     end: "bottom 10%",
//                     scrub: 1,
//                 },
//             }
//         );

//         // Animation for Text Content (Fade In)
//         gsap.fromTo(
//             textContentRef.current,
//             { opacity: 0, y: 50 },
//             {
//                 opacity: 1,
//                 y: 0,
//                 duration: 1,
//                 scrollTrigger: {
//                     trigger: textContentRef.current,
//                     start: "top 90%",
//                     end: "bottom 10%",
//                     scrub: 1,
//                 },
//             }
//         );

//         // Animation for Button (Scale Up)
//         gsap.fromTo(
//             buttonRef.current,
//             { scale: 0.8, opacity: 0 },
//             {
//                 scale: 1,
//                 opacity: 1,
//                 duration: 1,
//                 scrollTrigger: {
//                     trigger: buttonRef.current,
//                     start: "top 90%",
//                     end: "bottom 10%",
//                     scrub: 1,
//                 },
//             }
//         );

//         // Animation for Benefits (Staggered Fade In)
//         gsap.fromTo(
//             benefitsRef.current.querySelectorAll("span"),
//             { opacity: 0, y: 20 },
//             {
//                 opacity: 1,
//                 y: 0,
//                 stagger: 0.2,
//                 duration: 1,
//                 scrollTrigger: {
//                     trigger: benefitsRef.current,
//                     start: "top 90%",
//                     end: "bottom 10%",
//                     scrub: 1,
//                 },
//             }
//         );
//     }, []);

//     return (
//         <div id="about-us" className="w-full">
//             <div className="container mx-auto">
//                 <div className="py-20 md:px-0 px-5 flex md:flex-row flex-col items-center justify-between gap-[28px]">
//                     {/* Left Section - Images (50%) */}
//                     <div className="flex flex-col gap-[28px] basis-1/2">
//                         <div className="w-full" ref={imageOneRef}>
//                             <img
//                                 src={imageOne}
//                                 alt="image-one"
//                                 className="rounded-[32px] w-full h-[331.5px] object-cover"
//                             />
//                         </div>
//                         <div className="grid grid-cols-2 gap-[28px]">
//                             <div ref={imageTwoRef}>
//                                 <img
//                                     src={imageTwo}
//                                     alt="image-two"
//                                     className="rounded-xl w-full h-[331.5px] object-cover"
//                                 />
//                             </div>
//                             <div ref={imageThreeRef}>
//                                 <img
//                                     src={imageThree}
//                                     alt="image-three"
//                                     className="rounded-xl w-full h-[331.5px] object-cover"
//                                 />
//                             </div>
//                         </div>
//                     </div>

//                     {/* Right Section - Text Content (50%) */}
//                     <div ref={textContentRef} className="flex flex-col gap-[32px] basis-1/2 justify-center w-full">
//                         <h1 className="text-[#4230D3] text-[1rem] font-semibold bg-gradient-to-r from-[#D9D6F6] to-[#ffffff] rounded-full px-4 py-2 inline-block">
//                             Creative Approach
//                         </h1>
//                         <h2 className="text-[40px] leading-[64px] font-semibold text-[#162340] w-full">
//                             Choose The Best Digital Service Company
//                         </h2>
//                         <p className="text-[#8F99AC] leading-[36px] text-[1rem]">
//                             Marvice Media Pvt Ltd, founded in 2017, is a prominent digital solutions provider with three specialized brands. Leveraging advanced technology, creative insights, and strategic approaches, we excel in delivering innovative digital services that enhance growth and innovation across various industries. Our commitment spans all business scales, ensuring impactful solutions tailored to each client's unique needs.
//                         </p>
//                         {/* Buttons and Contact */}
//                         <div ref={buttonRef} className="flex md:flex-wrap flex-row items-center gap-5">
//                             <button className="flex flex-row items-center gap-2 bg-[#162340] rounded-full text-white py-4 md:px-10 px-2 cursor-pointer hover:scale-105 transition">
//                                 <span className="md:text-[1.2rem] text-[0.9rem] leading-[100%]">Learn More About Us</span>
//                                 <img src={arrow} alt="arrow" className="text-white w-5" />
//                             </button>
//                             <span className="flex flex-row items-center gap-2 font-semibold md:text-[1.2rem] text-[0.8rem]">
//                                 <img src={phone} alt="phone" /> 80562 91930
//                             </span>
//                         </div>
//                         {/* Benefits */}
//                         <div ref={benefitsRef} className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-5">
//                             <span className="flex flex-row items-center gap-2 text-[1rem] text-[#242E45]">
//                                 <img src={money} alt="money" /> We Can Save Your Money
//                             </span>
//                             <span className="flex flex-row items-center gap-2 text-[1rem] text-[#242E45]">
//                                 <img src={time} alt="time" /> Promise Specific Timeline Guarantee
//                             </span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default About;
