import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import About from './About'
import Services from './Services'
import Team from './Team'
import Solution from './Solution'
import Footer from './Footer'
const Home = () => {

  return (
    <div>
    <div className=' md:scale-100 scale-110 md:mr-0 mr-2'>
   <Navbar />
   </div>
   <Hero />
   <About />
   <Services />
   <Team />
   <Solution />
   <Footer />
    </div>
  )
}

export default Home
