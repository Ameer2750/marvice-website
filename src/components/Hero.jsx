import React from 'react'
import hero from "../assets/marvice/Images/Hero Section/Hero Image.png"
import star from "../assets/marvice/Images/Hero Section/star.png"
import arrow from "../assets/marvice/Icons/arrow-right.svg"
const Hero = () => {
  return (
    <div className='relative container mx-auto top-10'>
      <img src={hero} alt='hero-image' className='w-full h-[552] ' />
      {/* <div className='absolute bg-[#16234066]/40 -top-96 translate-x-56  rounded-full p-[32rem] '></div> */}
      <div className='absolute bg-[#16234066]/70 -top-13 translate-x-44 left-10 rounded-full p-[26.2rem] '></div>
      {/* hero content  */}
      <div className='flex flex-col  items-center gap-3 text-white  absolute top-48   left-[297px]  right-[297px]'>
        <div className='flex flex-row gap-1 items-center'>
          <img src={star} alt='hero-content-img' className='w-[20px] h-[19.02px] ' />
          <span className='text-[1rem]'>5.0</span>
          <span className='text-[1rem]'>High Rating Reviews</span>
        </div>
        <div className='flex flex-col gap-3'>
          <h1 className='text-[4.5rem]   font-semibold leading-20 text-center'>We Provide a Digital Solutions</h1>
          <p className='text-[1rem] text-center leading-8'>Onscreens is your gateway to mastering the digital landscape. We transform
            businesses with compelling branding, strategic marketing,
            and cutting-edge development solutions.</p>
        </div>
        <button className="cursor-pointer flex flex-row items-center mt-10 justify-between gap-5 px-4  py-1   rounded-full  bg-gradient-to-r from-[#E7603F] to-[#3B2AAA]"><span className='text-white'>Get Start Now</span><img src={arrow} alt='arrow' className='bg-white rounded-full p-[7px] translate-x-2'/></button>
      </div>
    </div>
  )
}

export default Hero