import React from 'react'
import logo from "../assets/marvice/logo.webp"
import mail from "../assets/marvice/Icons/mail.svg"

const Menu = [
  {
    id: 1,
    name: 'Home',
    link: "/"
  },
  {
    id: 2,
    name: 'About Us',
    link: "/"
  },
  {
    id: 3,
    name: 'Services',
    link: "/"
  },
  {
    id: 4,
    name: 'Projects',
    link: "/"
  },
  {
    id: 5,
    name: 'Contact Us',
    link: "/"
  },
]

const Navbar = () => {
  return (
    <div className='px-[2.5rem] py-[1.2rem] shadow fixed z-10 top-0 left-0 right-0 bg-white'>
      <div className='flex flex-row items-center justify-between  container mx-auto '>
        {/* logo */}
        <div>
          <img src={logo} alt='logo' className='w-[120px] cursor-pointer' />
        </div>
        <div className=''>
          {/* navigations */}

          <ul className='flex flex-row justify-between gap-10'>
            {Menu.map((data) => (
            <li className='cursor-pointer'>{data.name}</li>
            ))
            }
          </ul>
        </div>
        {/* button */}
        <div>
          <button className='flex cursor-pointer flex-row border rounded-[6.12rem] p-[0.5rem] gap-[0.5rem]'><span>Get In Touch</span><img src={mail} alt='mail' className='w-[20px]' /> </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar