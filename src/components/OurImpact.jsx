import React from 'react'
import CountUp from 'react-countup'

const OurImpact = () => {
    return (
        <div className='bg-[#F4F4FB]  relative  '>
            <div className='container mx-auto md:grid grid-cols-2  px-[3.5rem] py-20'>

                <div className='flex flex-col gap-5 items-start'>
                    <h1 className='text-[#4230D3] text-[1rem] font-semibold bg-gradient-to-r from-[#D9D6F6] to-[#F4F4Fb] rounded-full px-2 py-2'>Our Impact in Numbers</h1>
                    <h2 className='text-[#162340] text-[2.5rem] font-semibold'>Empowering Businesses with Cutting-Edge Digital Solutions.</h2>
                    <p className='text-[#8F99AC] text-[1.25rem]'>At Marvice, we are committed to delivering top-tier digital solutions that drive real results. Our dedication to excellence is reflected in our key achievements.</p>

                </div>
                <div className='flex flex-col  md:items-end justify-evenly   text-center'>
                    <div className='flex md:flex-row  flex-col md:gap-20'>
                        <div>
                            <h3 className='text-[4rem] font-bold text-[#242E45]'>2017</h3>  <span className="bg-gradient-to-r from-[#D9D6F6] to-[#F4F4Fb] h-[10px] w-full block -mt-6 "></span>
                            <span className='text-[#242E45] uppercase text-[0.7rem] font-semibold '>Year of Establishment</span>
                        </div>
                        <div>
                            <h3 className="text-[4rem] font-bold text-[#242E45]">
                                <CountUp start={0} end={500} duration={3} separator="," />+
                            </h3>
                            <span className="bg-gradient-to-r from-[#D9D6F6] to-[#F4F4Fb] h-[10px] w-full block -mt-6"></span>
                            <span className="text-[#242E45] uppercase text-[0.7rem] font-semibold">
                                customers worldwide
                            </span>
                        </div>
                    </div>
                    <div className='flex md:flex-row flex-col md:gap-25'>
                        <div>
                            <h3 className="text-[4rem] text-start font-bold text-[#242E45]">
                                <CountUp start={0} end={6} duration={10} separator="," />+
                            </h3>
                            <span className="bg-gradient-to-r from-[#D9D6F6] to-[#F4F4Fb] h-[10px] w-full block -mt-6 "></span>
                            <span className='text-[#242E45] uppercase text-[0.7rem] font-semibold'>Countries with <p>active client base</p> </span>
                        </div>
                        <div className=''>
                            <h3 className='text-[4rem] font-bold text-[#242E45]'>4.9/5</h3> <span className="bg-gradient-to-r from-[#D9D6F6] to-[#F4F4Fb] h-[10px] w-full block -mt-6"></span>
                            <span className='text-[#242E45] uppercase text-[0.7rem] font-semibold'>Customer rating</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OurImpact