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
    { id: "2", label: "Worxforu", content: "Worxforu focuses on creating impactful marketing strategies and business growth techniques." },
    { id: "3", label: "Conxyou", content: "Conxyou provides advanced technology solutions to enhance your digital presence and customer experience." }
];

const cardData = {
    "1": [
        { id: 1, image: imgOne, title: "Brand & Consultancy" },
        { id: 2, image: imgTwo, title: "Digital Marketing" },
        { id: 3, image: imgThree, title: "Traditional Marketing" },
        { id: 4, image: imgFour, title: "SEO " },
        { id: 5, image: imgFive, title: "Social Media " },
        { id: 6, image: imgSix, title: "PPC & Ad Campaigns" },
    ],
    "2": [

        { id: 7, image: img7, title: "SEO & Content Marketing" },
        { id: 8, image: img8, title: "Social Media Management" },
        { id: 9, image: img9, title: "PPC & Ad Campaigns" },
        { id: 10, image: img10, title: "Brand & Consultancy" },
        { id: 11, image: img11, title: "Digital Marketing" },
        { id: 12, image: img12, title: "Traditional Marketing" },
        { id: 13, image: img13, title: "Traditional Marketing" },

    ],
    "3": [
        { id: 14, image: img14, title: "UI/UX Design" },
        { id: 15, image: img15, title: "Custom Web Development" },
        { id: 16, image: img16, title: "AI & Automation" },
        { id: 17, image: img17, title: "SEO & Content Marketing" },
        { id: 18, image: img18, title: "Social Media Management" },
    ]
};

const TabComponent = () => {
    const [activeTab, setActiveTab] = useState("1");
    const swiperRef = useRef(null);
    const [isPrevActive, setIsPrevActive] = useState(false);
    const [isNextActive, setIsNextActive] = useState(true); // Initially, next is active


    return (
        <div id="services" className="bg-[#0E1831] py-20 mx-10 overflow-hidden">

            <div className="relative flex flex-row items-start container  justify-between gap-10 text-white  w-full  mx-auto">
                <div> <h1 className="absolute text-[1.25rem]  translate-x-14 bg-gradient-to-r from-[#1B2948]  to-[#1B2948]/10 rounded-2xl px-2 py-1">Our Innovative Brands</h1></div>
                {/* Tabs */}
                <img src={img} alt="" className="absolute rotate-290 -left-92 -top-20  w-[700px]" />

                <div className="flex flex-row space-x-6 mt-14 ">

                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`relative text-lg cursor-pointer font-semibold text-[2.25rem] transition ${activeTab === tab.id ? "text-white" : "text-[#6C7382]"
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
                <div className="mt-16">
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
                <h3 className="text-[3rem] translate-x-10 font-semibold">We Provide a variety of Services</h3>
            </div>
            {/* cards */}
            <div className="relative container mx-auto sm:pb-0"

            >

                {/* Custom Navigation Buttons */}
                <button
                    className="lg:block cursor-pointer hidden absolute md:left-0 left-0 -bottom-10 translate-y-1/2   bg-white  p-4 rounded-full"
                    id="hero-prev"
                >
                    <IoIosArrowBack className={`${isPrevActive ? " " : ""}`} />
                </button>
                <button
                    className="lg:block cursor-pointer hidden absolute left-14  -bottom-10 z-10 translate-y-1/2  bg-white    p-4 rounded-full"
                    id="hero-next"
                >
                    <IoIosArrowForward className={`${isNextActive ? "" : ""}`} />
                </button>
                <Swiper
                    ref={swiperRef}

                    modules={[Navigation, Pagination]}
                    spaceBetween={10}
                    slidesPerView={3}
                    navigation={{
                        nextEl: "#hero-next",
                        prevEl: "#hero-prev",
                    }}
                    // onSlideChange={(swiper) => {
                    //     setIsPrevActive(swiper.activeIndex > 0);
                    //     setIsNextActive(swiper.activeIndex < swiper.slides.length - 4);
                    // }}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 4.5 },
                    }}
                    className="mt-5 container "
                >
                    {cardData[activeTab].map((data) => (
                        <SwiperSlide key={data.id}>
                            <div className="relative">
                                <img
                                    src={data.image}
                                    alt={data.title}
                                    className="h-[320px] w-[270px] rounded-lg opacity-80 object-cover"
                                />
                                <p className="absolute bottom-5 left-5 text-lg font-semibold text-white">
                                    {data.title}
                                </p>
                                <IoIosArrowForward className="cursor-pointer bg-white rounded-full text-gray-500 text-[2rem] p-2 absolute bottom-4 right-2" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {/* <div className="flex flex-row items-center gap-4 mt-10 container mx-auto ">
                <IoIosArrowBack className="bg-white rounded-full text-gray-500 text-[2.5rem] p-2"/>
                <IoIosArrowForward className="bg-white rounded-full text-gray-500 text-[2.5rem] p-2"/>
            </div> */}/



        </div>
    );
};

export default TabComponent;
