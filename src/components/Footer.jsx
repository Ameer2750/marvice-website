import React from "react";
import instagram from "../assets/marvice/Images/footer/instagram.png";
import facebook from "../assets/marvice/Images/footer/facebook.png";
import linkedin from "../assets/marvice/Images/footer/linkedin.png";

const Footer = () => {
  return (
    <div className="bg-[#162340] w-full md:h-[725px] md:px-[48px] px-[20px] md:py-20 py-10 ">
      <div className="container mx-auto flex flex-col justify-between md:h-full">
        {/* Top Section */}
        <div className="flex md:flex-row  flex-col justify-between">
          {/* Left Side - Brands & Links */}
          <div className="flex gap-[84px]">
            {/* Our Brands */}
            <div className="text-white flex flex-col gap-4">
              <h1 className="md:text-[32px] text-[20px] font-semibold">Our Brands</h1>
              <div className="flex flex-col gap-14">
                <ul className="md:text-[20px]  mt-4 space-y-4">
                  <li>Onscreens</li>
                  <li>Worxforu</li>
                  <li>Conxyou</li>
                </ul>
                <div className="flex gap-4">
                  <img src={instagram} alt="Instagram" className="w-[32px]" />
                  <img src={facebook} alt="Facebook" className="w-[32px]" />
                  <img src={linkedin} alt="LinkedIn" className="w-[32px]" />
                </div>
              </div>
            </div>
            {/* Links */}
            <div className="text-white">
              <div className="flex flex-col gap-4">
                <h1 className="md:text-[32px] text-[20px] font-semibold">Links</h1>
                <ul className="md:text-[20px] mt-4 space-y-4">
                  <li>Helps</li>
                  <li>Support</li>
                  <li>Client</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side - CTA */}
          <div className="md:w-[567px]">
            <h1 className="text-white md:text-[48px] text-[32px] md:mt-0 mt-5  font-semibold leading-tight">
              Elevate your business now, with creative solutions.
            </h1>
            <button className="mt-6 bg-white text-[#162340] text-[20px] font-semibold px-6 py-3 rounded-full flex items-center gap-2">
              Let’s Talk →
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex md:flex-row flex-wrap justify-between items-center">
          <div className="flex flex-col gap-0">
            <h1 className="md:text-[96px] text-[52px] text-white font-semibold">Marvice</h1>
            <p className="md:text-[20px] text-white italic max-w-[650px] w-full">
              Marvice Media Pvt Ltd is a beacon of innovation and excellence, providing comprehensive digital solutions.
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-4 mr-18">
            <p className="md:text-[24px] text-[20px] text-white font-semibold">Subscribe to our  newsletter.</p>
            <div className="flex flex-row gap-10">
              <input
                type="email"
                placeholder="Your email address"
                className="md:px-6 px-2 md:py-3 py-2 md:w-[300px] w-[200px]  border-2 text-white placeholder:text-gray-200 border-white rounded-full md:text-[18px] outline-none"
              />
              <button className="bg-white text-[#162340] mf:text-[20px] font-semibold md:px-6 px-2 md:py-3 py-2 rounded-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Footer;
