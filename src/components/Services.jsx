import { useState } from "react";
import { motion } from "framer-motion";
import img from "../assets/marvice/Background Abstracts/Dots.png"
import imgOne from "../assets/marvice/Images/Service Section/Onscreen Service/1.png"
import imgTwo from "../assets/marvice/Images/Service Section/Onscreen Service/2.png"
import imgThree from "../assets/marvice/Images/Service Section/Onscreen Service/3.png"
import imgFour from "../assets/marvice/Images/Service Section/Onscreen Service/4.png"
import imgFive from "../assets/marvice/Images/Service Section/Onscreen Service/5.png"
import imgSix from "../assets/marvice/Images/Service Section/Onscreen Service/6.png"
import img7 from "../assets/marvice/Images/Service Section/Worxforu Service/7.png"
import img8 from "../assets/marvice/Images/Service Section/Worxforu Service/8.png"
import img9 from "../assets/marvice/Images/Service Section/Worxforu Service/9.png"
import img10 from "../assets/marvice/Images/Service Section/Worxforu Service/10.png"
import img11 from "../assets/marvice/Images/Service Section/Worxforu Service/11.png"
import img12 from "../assets/marvice/Images/Service Section/Worxforu Service/12.png"
import img13 from "../assets/marvice/Images/Service Section/Worxforu Service/13.png"
import img14 from "../assets/marvice/Images/Service Section/Conxyou Service/14.png"
import img15 from "../assets/marvice/Images/Service Section/Conxyou Service/15.png"
import img16 from "../assets/marvice/Images/Service Section/Conxyou Service/16.png"
import img17 from "../assets/marvice/Images/Service Section/Conxyou Service/17.png"
import img18 from "../assets/marvice/Images/Service Section/Conxyou Service/18.png"


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { title } from "framer-motion/client";
import arrow from "../assets/marvice/Icons/arrow-right.svg"
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useRef } from "react";


const tabs = [
    { id: "1", label: "Onscreens", content: "Onscreens helps businesses thrive in the digital age with expert branding, marketing, and development solutions. We craft strategies that drive engagement, growth, and success." },
    { id: "2", label: "Worxforu", content: "Worxforu builds powerful software solutions that streamline business operations and enhance efficiency. From automation to custom development, we turn ideas into innovation." },
    { id: "3", label: "Conxyou", content: "Conxyou specializes in corporate gifting, packaging, and public relations to elevate brand presence. We craft meaningful connections through thoughtful solutions." }
];

const cardData = {
    "1": [
        { id: 1, image: imgOne, title: "Brand & Consultancy" },
        { id: 2, image: imgTwo, title: "Digital Marketing" },
        { id: 3, image: imgThree, title: "Traditional Marketing" },
        { id: 4, image: imgFour, title: "Ad Commercial " },
        { id: 5, image: imgFive, title: "Web Design & Development" },
        { id: 6, image: imgSix, title: "Mobile App Development" },
    ],
    "2": [

        { id: 7, image: img7, title: "Business Process Automation" },
        { id: 8, image: img8, title: "Custom Software Development" },
        { id: 9, image: img9, title: "Web Portals" },
        { id: 10, image: img10, title: "AI-Based Development & Services" },
        { id: 11, image: img11, title: "Learning Management System" },
        { id: 12, image: img12, title: "Software as Services" },
        { id: 13, image: img13, title: "Consultation & Implementation" },

    ],
    "3": [
        { id: 14, image: img14, title: "Corporate Gifting" },
        { id: 15, image: img15, title: "Boxing & Packaging Manufacturing" },
        { id: 16, image: img16, title: "Public Relations Excellence" },
        { id: 17, image: img17, title: "Event Management & Architecture" },
        { id: 18, image: img18, title: "Photography" },
    ]
};

const TabComponent = () => {
    const [activeTab, setActiveTab] = useState("1");
    const swiperRef = useRef(null);
    const [isPrevActive, setIsPrevActive] = useState(false);
    const [isNextActive, setIsNextActive] = useState(true); // Initially, next is active


    return (
        <div id="services" className=" py-24 px-5 overflow-hidden bg-[#0E1831] container mx-auto">

            <div className="relative flex md:flex-row flex-col items-start   justify-between gap-10 text-white  w-full   ">
                <div> <h1 className="absolute text-[1.25rem]  md:translate-x-10 bg-gradient-to-r from-[#1B2948]  to-[#1B2948]/10 rounded-2xl px-2 py-1">Our Innovative Brands</h1></div>
                {/* Tabs */}
                <img src={img} alt="" className="absolute rotate-290 -left-92 -top-20  w-[700px]" />

                <div className="flex flex-row space-x-6 mt-14 ">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`relative  cursor-pointer font-semibold md:text-[2.25rem] text-[1.3rem] transition ${activeTab === tab.id ? "text-white" : "text-[#6C7382]"
                                }`}
                        >
                            {tab.label}
                            {activeTab === tab.id && (
                                <motion.div
                                    className="absolute left-0 bottom-[-4px] h-[2px] bg-white rounded-full"
                                    layoutId="underline"
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 0.3 }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="md:mt-16">
                    {tabs.map((tab) =>
                        activeTab === tab.id ? (
                            <motion.p
                                key={tab.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-[#FFFFFF]  text-[1.25rem] leading-8"
                            >
                                {tab.content}
                            </motion.p>
                        ) : null
                    )}
                </div>

            </div>
            <div className="text-white mt-10 container mx-auto">
                <h3 className="md:text-[3rem] text-[2rem] md:translate-x-10 font-semibold">We Provide a variety of Services</h3>
            </div>
            {/* cards */}
            <div className="relative  container mx-auto sm:pb-0"
            >

                <div className="md:pl-10  px-5">
                    {/* Custom Navigation Buttons */}
                    <button
                        className="lg:block cursor-pointer  absolute md:left-10 left-28  -bottom-10 translate-y-1/2   bg-white  p-4 rounded-full"
                        id="hero-prev"
                    >
                        <IoIosArrowBack className={`${isPrevActive ? " " : ""}`} />
                    </button>
                    <button
                        className="lg:block cursor-pointer  absolute md:left-24 left-48  -bottom-10 z-10 translate-y-1/2  bg-white    p-4 rounded-full"
                        id="hero-next"
                    >
                        <IoIosArrowForward className={`${isNextActive ? "" : ""}`} />
                    </button>
                    <Swiper
                        ref={swiperRef}
                        modules={[Navigation, Pagination]}
                        spaceBetween={28}
                        slidesPerView={3}
                        navigation={{
                            nextEl: "#hero-next",
                            prevEl: "#hero-prev",
                        }}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3.5 },
                        }}
                        className="mt-5 container   "
                    >
                        {cardData[activeTab].map((data) => (
                            <SwiperSlide key={data.id}>
                                <div className="relative w-full max-w-[369px] mx-auto">
                                    <img
                                        src={data.image}
                                        alt={data.title}
                                        className="h-[443px] w-full rounded-lg opacity-80 object-cover"
                                    />
                                    <p className="absolute w-[257px] h-[40px] bottom-8  left-5 text-lg font-semibold text-white">
                                        {data.title}
                                    </p>
                                    <IoIosArrowForward className="cursor-pointer bg-white rounded-full text-gray-500 text-[2rem] p-2 absolute bottom-10 right-8 translate-x-1/2" />
                                </div>
                            </SwiperSlide>

                        ))}
                    </Swiper>
                </div>
            </div>  
        </div>
    );
};

export default TabComponent;
