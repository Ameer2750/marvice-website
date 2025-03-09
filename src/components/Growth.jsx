import React from 'react'
import growth from "../assets/marvice/Background Abstracts/frame 51.png"
import badge from "../assets/marvice/Icons/badge-check.png"
const Growth = () => {
    return (
        <div className='py-10 px-10'>
            <div className='flex flex-row gap-10 justify-between container mx-auto'>
                <div>
                    <img src={growth} alt='growth' className='w-[800px] h-[800px]' />
                </div>
                <div className='flex flex-col items-start gap-5 '>
                    <h1 className='text-[#4230D3] text-[1rem] font-semibold bg-gradient-to-r from-[#D9D6F6] to-[#F4F4Fb] rounded-full px-2 py-2'>Why Choose Us</h1>
                    <h2 className='text-[3rem] leading-12 font-semibold text-[#162340]'>Unlock Revenue Growth‍ For Your Business</h2>
                    <p className='text-[#8F99AC] leading-8 text-[1.25rem]'>we are committed to providing services that drive growth and innovation for businesses of all scales and industries.
                    </p>
                    <div className='flex flex-col gap-5'>
                        <span className='flex flex-row items-center font-semibold gap-2 text-[1.5rem] text-[#162340]'><img src={badge} alt='badge' className='w-[24px]' /> Years of Expertise</span>
                        <p className='text-[#8F99AC] leading-8 text-[1.25rem]'>Established in 2017, our experienced team ensures every project benefits from tried-and-true strategies and innovative approaches.
                        </p>
                        <span className='flex flex-row items-center font-semibold gap-2 text-[1.5rem] text-[#162340]'><img src={badge} alt='badge' className='w-[24px]' /> Bespoke Solutions</span>
                        <p className='text-[#8F99AC] leading-8 text-[1.25rem]'>Tailor-made solutions designed to resonate with your brand's ethos and cater to your specific needs.
                        </p>
                        <span className='flex flex-row items-center font-semibold gap-2 text-[1.5rem] text-[#162340]'><img src={badge} alt='badge' className='w-[24px]' />End-to-End Service</span>
                        <p className='text-[#8F99AC] leading-8 text-[1.25rem]'>From conceptualization to execution and post-launch support, we are with you at every step.
                        </p>
                        <span className='flex flex-row items-center font-semibold gap-2 text-[1.5rem] text-[#162340]'><img src={badge} alt='badge' className='w-[24px]' /> Ethical Practices</span>
                        <p className='text-[#8F99AC] leading-8 text-[1.25rem]'>Upholding the highest standards of integrity and ethical business practices.
                        </p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Growth
