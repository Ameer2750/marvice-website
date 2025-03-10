import React, { useEffect, useState, useRef } from 'react';
import logo from "../assets/marvice/logo.webp";
import { CiMail } from "react-icons/ci";
import { BiMenuAltLeft } from 'react-icons/bi';
import { HiX } from 'react-icons/hi';

const Menu = [
  { id: 1, name: 'Home', link: "#" },
  { id: 2, name: 'About Us', link: "#about-us" },
  { id: 3, name: 'Services', link: "#services" },
  { id: 4, name: 'Projects', link: "#projects" },
  { id: 5, name: 'Contact Us', link: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`px-[2.5rem] py-[1.2rem] shadow fixed z-50 top-0 left-0 right-0 ${isScrolled ? 'bg-white' : 'bg-white'}`}>
      <div className='flex flex-row items-center justify-between container mx-auto'>
        {/* Logo */}
        <a href='#'>
          <img src={logo} alt='logo' className='w-[120px] cursor-pointer' />
        </a>

        {/* Navigation */}
        <ul className='hidden lg:flex flex-row justify-between gap-10'>
          {Menu.map((item) => (
            <li key={item.id} className='cursor-pointer'>
              <a href={item.link} className='hover:text-[#4230D3] transition-all'>
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Button */}
        <div className='hidden lg:block'>
          <button className='flex cursor-pointer hover:text-white hover:bg-black hover:scale-105 transition flex-row border rounded-[6.12rem] p-[0.5rem] gap-[0.5rem]'>
            <span>Get In Touch</span>
            <CiMail className='text-[1.5rem] hover:text-white' />
          </button>
        </div>

        {/* Hamburger Menu (for mobile screens) */}
        <button
          onClick={() => setIsMenuOpen(true)}
          aria-label="Toggle Menu"
          aria-expanded={isMenuOpen}
          className="lg:hidden"
        >
          <BiMenuAltLeft size={40} color={isScrolled ? "black" : "black"} />
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="lg:hidden fixed top-0 left-0 w-[390px] h-screen bg-[#0E1831] z-50 p-6 transition-transform duration-300"
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-7 right-7 border-2 border-dotted border-white"
            aria-label="Close Menu"
          >
            <HiX size={30} color="white" />
          </button>
          <ul className="flex flex-col gap-6 text-white text-[1.5rem] text-center justify-center items-center mt-24">
            {Menu.map((item) => (
              <li
                key={item.id}
                onClick={() => setIsMenuOpen(false)}
                className="cursor-pointer"
              >
                <a href={item.link}>
                  {item.name}
                </a>
              </li>
            ))}
            <button className='flex cursor-pointer bg-white text-black hover:text-white hover:scale-105 transition flex-row border rounded-[6.12rem] p-[1.2rem] gap-[0.5rem]'>
              <span className='text-[1.2rem]'>Get In Touch</span>
              <CiMail className='text-[1.7rem] hover:text-white' />
            </button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;