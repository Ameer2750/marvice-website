import React from 'react'
import imageOne from "../assets/marvice/Images/About Us Section/About 1.png"
import imageTwo from "../assets/marvice/Images/About Us Section/About 2.png"
import imageThree from "../assets/marvice/Images/About Us Section/About 3.png"
import arrow from "../assets/marvice/Icons/arrow-right.png"
import phone from "../assets/marvice/Icons/phone-call.svg"
import money from "../assets/marvice/Icons/Frame 18.png"
import time from "../assets/marvice/Icons/Frame 19.png"

const About = () => {
    return (
        <div className='py-20  container mx-auto grid grid-cols-2 gap-[1.75rem] px-[2.5rem]'>
            <div className=''>
                <img src={imageOne} alt='image-one' className='rounded-xl w-[900px] h-[291px]' />
                <div className='grid grid-cols-2 gap-5 mt-5 '>
                    <img src={imageTwo} alt='image-one' className='rounded-xl w-[900px] h-[291px]' />
                    <img src={imageThree} alt='image-one' className='rounded-xl w-[568px] h-[291px]' />
                </div>
            </div>

            <div className=' flex flex-col items-start gap-5'>
                <h1 className='text-[#4230D3] text-[1rem] font-semibold bg-gradient-to-r from-[#D9D6F6] to-[#F4F4Fb] rounded-full px-2 py-2'>Creative Approach</h1>
                <h2 className='text-[3rem] leading-12 font-semibold text-[#162340]'>Choose The Best Digital Service Company</h2>
                <p className='text-[#8F99AC] leading-8 text-[1.25rem]'>Marvice Media Pvt Ltd, founded in 2017, is a prominent digital solutions provider with three specialized brands. Leveraging advanced technology, creative insights, and strategic approaches, we excel in delivering innovative digital services that enhance growth and innovation across various industries. Our commitment spans all business scales, ensuring impactful solutions tailored to each client's unique needs.</p>
                <div className='flex flex-wrap  items-center gap-5'>

                    <button className='flex flex-row gap-2 bg-[#162340] text-[1.2rem] rounded-full text-white py-4 px-20'><span>Learn More About Us</span> <img src={arrow} alt='arrow' className='text-white w-[20px]' /></button>
                    <span className='flex flex-row gap-2 font-semibold text-[1.2rem] text-end'><img src={phone} alt='' />80562 91930</span>
                </div>
                <div className='grid grid-cols-2 mt-5'>
                    <span className='flex flex-row items-center gap-2 text-[1rem] text-[#242E45]'><img src={money} alt='money' />We Can Save Your Money</span>
                    <span className='flex flex-row items-center gap-2 text-[1rem] text-[#242E45]'><img src={time} alt='money' />Promiss Specific Timelinel Guarantee</span>
                </div>
            </div>



        </div>
    )
}

export default About