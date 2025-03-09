import React from 'react';
import CountUp from 'react-countup';

const statsData = [
    {
        value: 2017,
        startValue: 0,
        label: "Year of Establishment",
        duration: 2,
        isAnimated: false,
    },
    {
        value: 500,
        startValue: 450,
        label: "customers worldwide",
        duration: 0.5,
        isAnimated: true,
    },
    {
        value: 6,
        startValue: 0,
        label: "Countries with active client base",
        duration: 0.5,
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
        <div className="bg-[#F4F4FB] w-full py-20 ">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between gap-14 items-center mx-14">
                    {/* Left Content */}
                    <div className="flex flex-col gap-5 md:w-1/2">
                        <h1 className="text-[#4230D3] text-[1rem] font-semibold bg-gradient-to-r from-[#D9D6F6] to-[#F4F4FB] rounded-full px-4 py-2">
                            Our Impact in Numbers
                        </h1>
                        <h2 className="text-[#162340] text-[3rem] font-semibold leading-tight">
                            Empowering Businesses with Cutting-Edge Digital Solutions.
                        </h2>
                        <p className="text-[#8F99AC] text-[1.25rem] leading-[36px]">
                            At Marvice, we are committed to delivering top-tier digital solutions that drive real results. Our dedication to excellence is reflected in our key achievements.
                        </p>
                    </div>

                    {/* Right Content */}
                    <div className="grid grid-cols-2 md:w-1/2  mt-10 md:mt-0">
                        {statsData.map((stat, index) => (
                            <div key={index} className="flex flex-col items-start">
                                <h3 className="text-[4.625rem] font-bold text-[#242E45]">
                                    {stat.isAnimated ? (
                                        <CountUp start={stat.startValue} end={stat.value} duration={stat.duration} separator="," />
                                    ) : (
                                        stat.value
                                    )}
                                    {stat.isAnimated && "+"}
                                </h3>
                                <span className="bg-gradient-to-r from-[#D9D6F6] to-[#F4F4FB] h-[10px] w-full block -mt-6"></span>
                                <span className="text-[#242E45] uppercase text-[0.875rem] font-semibold">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurImpact;
