import React from 'react';
import CountUp from 'react-countup';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
const statsData = [
    {
        value: 2017,
        startValue: 0,
        label: "Year of Establishment",
        duration: 2,
        isAnimated: false,
    },
    {
        value: 500,
        startValue: 1,
        label: "customers worldwide",
        duration: 3,
        isAnimated: true,
    },
    {
        value: 6,
        startValue: 0,
        label: "Countries with active client base",
        duration: 3,
        isAnimated: true,
    },
    {
        value: "4.9/5",
        label: "Customer rating",
        duration: 2,
        isAnimated: false,
    },
];

const OurImpact = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Animation runs only once
        });
    }, []);
    return (
        <div className="bg-[#F4F4FB] w-full py-20 ">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between gap-14 items-center md:mx-14 mx-5">
                    {/* Left Content */}
                    <div className="flex flex-col gap-5 md:w-1/2">
                        <h1  data-aos="fade-up" className="text-[#4230D3] text-[1rem] font-semibold bg-gradient-to-r from-[#D9D6F6] to-[#F4F4FB] rounded-full px-4 py-2">
                            Our Impact in Numbers
                        </h1>
                        <h2  data-aos="fade-left" className="text-[#162340] text-[3rem] font-semibold  leading-[64px]">
                            Empowering Businesses with Cutting-Edge Digital Solutions.
                        </h2>
                        <p  data-aos="fade-left" className="text-[#8F99AC] text-[1.25rem] leading-[36px]">
                            At Marvice, we are committed to delivering top-tier digital solutions that drive real results. Our dedication to excellence is reflected in our key achievements.
                        </p>
                    </div>

                    {/* Right Content */}
                    <div   data-aos="fade-right" className="grid grid-cols-2 md:w-1/2 md:gap-10 gap-5 ">
                        {statsData.map((stat, index) => (
                            <div key={index} className="flex flex-col items-start">
                                <h3 className="md:text-[4.625rem] text-[3rem] font-bold text-[#242E45]">
                                    {stat.isAnimated ? (
                                        <CountUp start={stat.startValue} end={stat.value} duration={stat.duration} separator="," />
                                    ) : (
                                        stat.value
                                    )}
                                    {stat.isAnimated && "+"}
                                </h3>
                                <span className="bg-gradient-to-r from-[#D9D6F6] to-[#F4F4FB] h-[10px] w-full block md:-mt-6 -mt-3"></span>
                                <span className="text-[#242E45] uppercase text-[0.875rem] font-semibold">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurImpact;




// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import CountUp from "react-countup";
// import "aos/dist/aos.css"; // Import AOS styles

// // Register GSAP plugins
// gsap.registerPlugin(ScrollTrigger);

// const statsData = [
//     {
//         value: 2017,
//         startValue: 0,
//         label: "Year of Establishment",
//         duration: 2,
//         isAnimated: false,
//     },
//     {
//         value: 500,
//         startValue: 1,
//         label: "customers worldwide",
//         duration: 3,
//         isAnimated: true,
//     },
//     {
//         value: 6,
//         startValue: 0,
//         label: "Countries with active client base",
//         duration: 3,
//         isAnimated: true,
//     },
//     {
//         value: "4.9/5",
//         label: "Customer rating",
//         duration: 2,
//         isAnimated: false,
//     },
// ];

// const OurImpact = () => {
//     const leftContentRef = useRef(null);
//     const rightContentRef = useRef(null);
//     const sectionRef = useRef(null);

//     useEffect(() => {
//         // Text Reveal Animation for Left Content
//         gsap.fromTo(
//             leftContentRef.current.querySelectorAll("h1, h2, p"),
//             { opacity: 0, y: 50 },
//             {
//                 opacity: 1,
//                 y: 0,
//                 stagger: 0.2, // Stagger animation for each element
//                 duration: 1,
//                 scrollTrigger: {
//                     trigger: leftContentRef.current,
//                     start: "top 90%",
//                     end: "bottom 10%",
//                     scrub: 1,
//                 },
//             }
//         );

//         // Glowing Effect for Stats
//         gsap.to(".stat-item", {
//             boxShadow: "0 0 20px rgba(66, 48, 211, 0.5)", // Glow effect
//             scrollTrigger: {
//                 trigger: ".stat-item",
//                 start: "top 90%",
//                 end: "bottom 10%",
//                 scrub: 1,
//             },
//         });

//         // 3D Flip Animation for Stats
//         gsap.fromTo(
//             ".stat-item",
//             { rotationY: 180, opacity: 0 },
//             {
//                 rotationY: 0,
//                 opacity: 1,
//                 duration: 1,
//                 stagger: 0.2,
//                 scrollTrigger: {
//                     trigger: ".stat-item",
//                     start: "top 90%",
//                     end: "bottom 10%",
//                     scrub: 1,
//                 },
//             }
//         );

//         // Particle Background Animation
//         const particleAnimation = gsap.to(".particles", {
//             opacity: 1,
//             duration: 2,
//             scrollTrigger: {
//                 trigger: sectionRef.current,
//                 start: "top bottom",
//                 end: "bottom top",
//                 scrub: 1,
//             },
//         });

//         // Cleanup
//         return () => {
//             particleAnimation.kill();
//         };
//     }, []);

//     return (
//         <div ref={sectionRef} className="bg-[#F4F4FB] w-full py-20 relative overflow-hidden">
//             {/* Particle Background */}
//             <div className="particles absolute inset-0 opacity-0">
//                 <div className="particle"></div>
//                 <div className="particle"></div>
//                 <div className="particle"></div>
//             </div>

//             <div className="container mx-auto relative z-10">
//                 <div className="flex flex-col md:flex-row justify-between gap-14 items-center md:mx-14 mx-5">
//                     {/* Left Content */}
//                     <div ref={leftContentRef} className="flex flex-col gap-5 md:w-1/2">
//                         <h1 className="text-[#4230D3] text-[1rem] font-semibold bg-gradient-to-r from-[#D9D6F6] to-[#F4F4FB] rounded-full px-4 py-2">
//                             Our Impact in Numbers
//                         </h1>
//                         <h2 className="text-[#162340] text-[3rem] font-semibold leading-[64px]">
//                             Empowering Businesses with Cutting-Edge Digital Solutions.
//                         </h2>
//                         <p className="text-[#8F99AC] text-[1.25rem] leading-[36px]">
//                             At Marvice, we are committed to delivering top-tier digital solutions that drive real results. Our dedication to excellence is reflected in our key achievements.
//                         </p>
//                     </div>

//                     {/* Right Content */}
//                     <div ref={rightContentRef} className="grid grid-cols-2 md:w-1/2 md:gap-10 gap-5">
//                         {statsData.map((stat, index) => (
//                             <div key={index} className="stat-item flex flex-col items-start p-6 rounded-lg bg-white transform-style-preserve-3d">
//                                 <h3 className="md:text-[4.625rem] text-[3rem] font-bold text-[#242E45]">
//                                     {stat.isAnimated ? (
//                                         <CountUp
//                                             start={stat.startValue}
//                                             end={stat.value}
//                                             duration={stat.duration}
//                                             separator=","
//                                         />
//                                     ) : (
//                                         stat.value
//                                     )}
//                                     {stat.isAnimated && "+"}
//                                 </h3>
//                                 <span className="bg-gradient-to-r from-[#D9D6F6] to-[#F4F4FB] h-[10px] w-full block md:-mt-6 -mt-3"></span>
//                                 <span className="text-[#242E45] uppercase text-[0.875rem] font-semibold">
//                                     {stat.label}
//                                 </span>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default OurImpact;
