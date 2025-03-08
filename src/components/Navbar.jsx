import React from 'react';
import logo from "../assets/marvice/logo.webp";
import mail from "../assets/marvice/Icons/mail.svg";
import { CiMail } from "react-icons/ci";

const Menu = [
  { id: 1, name: 'Home', link: "#" },
  { id: 2, name: 'About Us', link: "#about-us" },
  { id: 3, name: 'Services', link: "#services" },
  { id: 4, name: 'Projects', link: "#projects" },
  { id: 5, name: 'Contact Us', link: "#contact" },
];

const Navbar = () => {
  return (
    <div className='px-[2.5rem] py-[1.2rem] shadow fixed z-50 top-0 left-0 right-0 bg-white'>
      <div className='flex flex-row items-center justify-between container mx-auto'>
        {/* Logo */}
        <a href='#'>
          <img src={logo} alt='logo' className='w-[120px] cursor-pointer' />
        </a>

        {/* Navigation */}
        <ul className='flex flex-row justify-between gap-10'>
          {Menu.map((item) => (
           
              <li key={item.id} className='cursor-pointer'>
                <a href={item.link} className='hover:text-[#4230D3] transition-all'>
                  {item.name}
                </a>
              </li>
           
          ))}
        </ul>

        {/* Button */}
        <div>
          <button className='flex cursor-pointer hover:text-white hover:bg-black hover:scale-105 transition flex-row border rounded-[6.12rem] p-[0.5rem] gap-[0.5rem]'>
            <span className=' '>Get In Touch</span>
            <CiMail className='text-[1.5rem] hover:text-white'/>
            {/* <img src={mail} alt='mail' className='w-[20px] bg-white' /> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
