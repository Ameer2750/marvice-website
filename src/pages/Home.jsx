import React from 'react'
import Hero from '../components/Hero'
import OurImpact from '../components/OurImpact'
import About from '../components/About'
import Brands from '../components/Brands'
import Services from '../components/Services'


const Home = () => {
    return (
        <div>
            <Hero/>
            <OurImpact/>
            <About/>
            <Brands/>
            <Services/>
        </div>
    )
}

export default Home