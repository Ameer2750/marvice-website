import React from 'react'
import instagram from "../assets/marvice/Images/footer/instagram.png"
import facebook from "../assets/marvice/Images/footer/facebook.png"
import linkedin from "../assets/marvice/Images/footer/linkedin.png"

const Footer = () => {
  return (
    <div className='bg-[#162340]  h-[725px] px-[48px] py-20'>
      <div>
        <div className='container mx-auto'>
          <div className='flex flex-row  w-full gap-[84px]'>
            <div className='text-white  h-[194px]'>
              <h1 className='text-[32px]'>Our Brands</h1>
              <ul className='text-[20px]'>
                <li>Onscreens</li>
                <li>Worxforu</li>
                <li>Conxyou</li>
              </ul>
            </div>
            <div className='text-white'>
              <h1 className='text-[32px]'>Links</h1>
              <ul className='text-[20px]'>
                <li>Helps</li>
                <li>Support</li>
                <li>Client</li>
              </ul>
            </div>

          </div>
          <div className='flex flex-row gap-[16px]'>
            <img src={instagram} alt='instagram' className='w-[32px]' />
            <img src={facebook} alt='facebook' className='w-[32px]' />
            <img src={linkedin} alt='linkedin' className='w-[32px]' />
          </div>
        </div>

        <div className='w-[567px] h-[201px]'>
          <h1 className='text-white text-[48px]'>Elevate your business now, with creative solutions.</h1>
          <button>Let's Talk <span></span></button>
        </div>
      </div>
    </div>
  )
}

export default Footer