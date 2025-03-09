import React from 'react';
import growth from "../assets/marvice/Background Abstracts/frame 51.png";
import badge from "../assets/marvice/Icons/badge-check.png";

const features = [
    {
        title: "Years of Expertise",
        description: "Established in 2017, our experienced team ensures every project benefits from tried-and-true strategies and innovative approaches."
    },
    {
        title: "Bespoke Solutions",
        description: "Tailor-made solutions designed to resonate with your brand's ethos and cater to your specific needs."
    },
    {
        title: "End-to-End Service",
        description: "From conceptualization to execution and post-launch support, we are with you at every step."
    },
    {
        title: "Ethical Practices",
        description: "Upholding the highest standards of integrity and ethical business practices."
    }
];

const Growth = () => {
    return (
        <div className='py-14 container mx-auto w-full'>
            <div className='flex flex-row gap-[28px] justify-between max-w-[1360px] '>
                <img src={growth} alt='growth' className='w-[665px] h-[766.31px] object-contain' />
                <div className='flex flex-col items-start gap-2 '>
                    <h1 className='text-[#4230D3] text-[1rem] font-semibold bg-gradient-to-r from-[#D9D6F6] to-[#F4F4Fb] rounded-full px-2 py-2'>
                        Why Choose Us
                    </h1>
                    <h2 className='text-[40px] leading-[64px] font-semibold text-[#162340]'>
                        Unlock Revenue Growth For Your Business
                    </h2>
                    <p className='text-[#8F99AC]  text-[20px]'>
                        We are committed to providing services that drive growth and innovation for businesses of all scales and industries.
                    </p>
                    
                    {/* Dynamic List */}
                    <div className='flex flex-col gap-4'>
                        {features.map((feature, index) => (
                            <div key={index} className='flex flex-col gap-2'>
                                <span className='flex flex-row items-center font-semibold gap-2 text-[24px] text-[#162340]'>
                                    <img src={badge} alt='badge' className='w-[24px]' />
                                    {feature.title}
                                </span>
                                <p className='text-[#8F99AC] leading-8 text-[20px]'>
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Growth;
