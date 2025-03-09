import React from "react";
import instagram from "../assets/marvice/Images/footer/instagram.png";
import facebook from "../assets/marvice/Images/footer/facebook.png";
import linkedin from "../assets/marvice/Images/footer/linkedin.png";

const Footer = () => {
  return (
    <div className="bg-[#162340] w-full h-[725px] px-[48px] py-20">
      <div className="container mx-auto flex flex-col justify-between h-full">
        {/* Top Section */}
        <div className="flex flex-row justify-between">
          {/* Left Side - Brands & Links */}
          <div className="flex gap-[84px]">
            {/* Our Brands */}
            <div className="text-white flex flex-col gap-4">
              <h1 className="text-[32px] font-semibold">Our Brands</h1>
              <div className="flex flex-col gap-14">
                <ul className="text-[20px] mt-4 space-y-4">
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
                <h1 className="text-[32px] font-semibold">Links</h1>
                <ul className="text-[20px] mt-4 space-y-4">
                  <li>Helps</li>
                  <li>Support</li>
                  <li>Client</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side - CTA */}
          <div className="w-[567px]">
            <h1 className="text-white text-[48px] font-semibold leading-tight">
              Elevate your business now, with creative solutions.
            </h1>
            <button className="mt-6 bg-white text-[#162340] text-[20px] font-semibold px-6 py-3 rounded-full flex items-center gap-2">
              Let’s Talk →
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col gap-0">
            <h1 className="text-[96px] text-white font-semibold">Marvice</h1>
            <p className="text-[20px] text-white italic max-w-[650px] w-full">
              Marvice Media Pvt Ltd is a beacon of innovation and excellence, providing comprehensive digital solutions.
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-4 mr-18">
            <p className="text-[24px] text-white font-semibold">Subscribe to our  newsletter.</p>
            <div className="flex flex-row gap-10">
              <input
                type="email"
                placeholder="Your email address"
                className="px-6 py-3 w-[300px] border-2 text-white border-white rounded-full text-[18px] outline-none"
              />
              <button className="bg-white text-[#162340] text-[20px] font-semibold px-6 py-3 rounded-full">
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
