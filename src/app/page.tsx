
import React from 'react'
import Services from './services/page'
import FeaturedCars from './featuredcars/page'
import NewestCar from './newcar/page'
import Client from './clientrev/page'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'

const Home = () => {
  return (
    <div>

 <Hero/>
 <Services/>
 <FeaturedCars/>
 <NewestCar/>
 <Client/>
 <Footer/>

    </div>
  )
}

export default Home