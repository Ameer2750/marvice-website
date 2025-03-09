import React from 'react'
import Hero from '../components/Hero'
import OurImpact from '../components/OurImpact'
import About from '../components/About'
import Brands from '../components/Brands'
import Services from '../components/Services'
import Growth from '../components/Growth'
import Testimonial from '../components/Testimonial'


const Home = () => {
    return (
        <div>
            <Hero/>
            <OurImpact/>
            <About/>
            <Brands/>
            <Services/>
            <Growth/>
            <Testimonial/>
        </div>
    )
}

export default Home