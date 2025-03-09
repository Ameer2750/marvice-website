import React from 'react'
import Hero from '../components/Hero'
import OurImpact from '../components/OurImpact'
import About from '../components/About'
import Brands from '../components/Brands'
import Services from '../components/Services'
import Growth from '../components/Growth'


const Home = () => {
    return (
        <div>
            <Hero/>
            <OurImpact/>
            <About/>
            <Brands/>
            <Services/>
            <Growth/>
        </div>
    )
}

export default Home