import React from 'react'
import CountUp from 'react-countup'


const statsData = [
    {
        value: 2017,
        label: "Year of Establishment",
        duration: 2,
        isAnimated: false, // Year is static, no animation
    },
    {
        value: 500,
        label: "customers worldwide",
        duration: 3,
        isAnimated: true, // Animated counter
    },
    {
        value: 6,
        label: "Countries with active client base",
        duration: 3,
        isAnimated: true,
    },
    {
        value: "4.9/5",
        label: "Customer rating",
        duration: 2,
        isAnimated: false,
    },
];


const OurImpact = () => {
    return (
        <div className='bg-[#F4F4FB] w-full my-14 '>
            <div className=' container mx-auto'>
                <div className='flex flex-row justify-between items-center gap-[127px] max-w-[1161px]  py-20'>
                    <div className='flex flex-col gap-5 items-start w-full '>
                        <h1 className='text-[#4230D3] text-[1rem] font-semibold bg-gradient-to-r from-[#D9D6F6] to-[#F4F4Fb] rounded-full px-2 py-2'>Our Impact in Numbers</h1>
                        <h2 className='text-[#162340] text-[3rem] font-semibold'>Empowering Businesses with Cutting-Edge Digital Solutions.</h2>
                        <p className='text-[#8F99AC] text-[1.25rem] leading-[36px]'>At Marvice, we are committed to delivering top-tier digital solutions that drive real results. Our dedication to excellence is reflected in our key achievements.</p>
                    </div>
                    <div className="flex flex-col md:items-end justify-evenly text-center">
                        <div className="flex md:flex-row flex-col md:gap-20">
                            {statsData.slice(0, 2).map((stat, index) => (
                                <div key={index}>
                                    <h3 className="text-[4.625rem] font-bold text-[#242E45]">
                                        {stat.isAnimated ? (
                                            <CountUp start={0} end={stat.value} duration={stat.duration} separator="," />
                                        ) : (
                                            stat.value
                                        )}
                                        {stat.isAnimated && "+"}
                                    </h3>
                                    <span className="bg-gradient-to-r from-[#D9D6F6] to-[#F4F4Fb] h-[10px] w-full block -mt-6"></span>
                                    <span className="text-[#242E45] uppercase text-[0.875rem] font-semibold">{stat.label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex md:flex-row flex-col md:gap-20 mt-6">
                            {statsData.slice(2, 4).map((stat, index) => (
                                <div key={index}>
                                    <h3 className="text-[4.625rem] font-bold text-[#242E45]">
                                        {stat.isAnimated ? (
                                            <CountUp start={0} end={stat.value} duration={stat.duration} separator="," />
                                        ) : (
                                            stat.value
                                        )}
                                        {stat.isAnimated && "+"}
                                    </h3>
                                    <span className="bg-gradient-to-r from-[#D9D6F6] to-[#F4F4Fb] h-[10px] w-full block -mt-6"></span>
                                    <span className="text-[#242E45] uppercase text-[0.875rem] font-semibold">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OurImpact