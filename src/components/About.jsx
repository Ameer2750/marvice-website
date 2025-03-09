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
        <div className='container mx-auto w-full'>

            <div className=' max-w-[1162px]  px-5 flex justify-center'>
                <div
                    id='about-us'
                    className='py-20 flex flex-row items-center justify-center gap-10 '
                >

                    {/* Left Section - Images */}
                    <div className='flex flex-col gap-[28px] w-[568px] h-[691px]'>
                        <img
                            src={imageOne}
                            alt='image-one'
                            className='rounded-[32px] w-full h-[331.5px] object-cover'
                        />
                        <div className='grid grid-cols-2 gap-[28px]'>
                            <img
                                src={imageTwo}
                                alt='image-two'
                                className='rounded-xl w-full h-[291px] object-cover'
                            />
                            <img
                                src={imageThree}
                                alt='image-three'
                                className='rounded-xl w-full h-[291px] object-cover'
                            />
                        </div>
                    </div>

                    {/* Right Section - Text Content */}
                    <div className='flex flex-col gap-[32px] w-[566px] h-[683px] justify-center'>
                        <h1 className='text-[#4230D3] text-[1rem] font-semibold bg-gradient-to-r from-[#D9D6F6] to-[#F4F4Fb] rounded-full px-4 py-2 inline-block'>
                            Creative Approach
                        </h1>
                        <h2 className='text-[3rem] leading-tight font-semibold text-[#162340]'>
                            Choose The Best Digital Service Company
                        </h2>
                        <p className='text-[#8F99AC] leading-8 text-[1.25rem]'>
                            Marvice Media Pvt Ltd, founded in 2017, is a prominent digital solutions provider with three specialized brands.
                            Leveraging advanced technology, creative insights, and strategic approaches, we excel in delivering innovative
                            digital services that enhance growth and innovation across various industries.
                        </p>

                        {/* Buttons and Contact */}
                        <div className='flex flex-wrap items-center gap-5'>
                            <button className='flex flex-row items-center gap-2 bg-[#162340] text-[1.2rem] rounded-full text-white py-4 px-10 cursor-pointer hover:scale-105 transition'>
                                <span>Learn More About Us</span>
                                <img src={arrow} alt='arrow' className='text-white w-5' />
                            </button>
                            <span className='flex flex-row items-center gap-2 font-semibold text-[1.2rem]'>
                                <img src={phone} alt='phone' /> 80562 91930
                            </span>
                        </div>

                        {/* Benefits */}
                        <div className='grid grid-cols-2 gap-5 mt-5'>
                            <span className='flex flex-row items-center gap-2 text-[1rem] text-[#242E45]'>
                                <img src={money} alt='money' /> We Can Save Your Money
                            </span>
                            <span className='flex flex-row items-center gap-2 text-[1rem] text-[#242E45]'>
                                <img src={time} alt='time' /> Promise Specific Timeline Guarantee
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default About;
