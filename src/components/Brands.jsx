import React from "react";
import { motion } from "framer-motion";
import imgOne from "../assets/marvice/Brand Logos/image 1.png";
import imgTwo from "../assets/marvice/Brand Logos/image 2.png";
import imgThree from "../assets/marvice/Brand Logos/image 3.png";
import imgFour from "../assets/marvice/Brand Logos/image 4.png";
import imgFive from "../assets/marvice/Brand Logos/image 5.png";
import imgSix from "../assets/marvice/Brand Logos/image 6.png";

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
    <div className="py-10 text-center">
      {/* Heading Animation */}
      <motion.h1
        className="text-[2.5rem] font-semibold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Trusted by Leading Brands & Institutions
      </motion.h1>

      {/* Logos Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 px-[2.5rem] gap-5 mt-10">
        {logos.map((data) => (
          <motion.div
            key={data.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex justify-center"
          >
            <img src={data.img} alt="brand" className="h-[100px] w-auto object-contain" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
