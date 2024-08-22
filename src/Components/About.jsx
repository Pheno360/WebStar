import React from 'react'
import AboutUS from '../assets/AboutUs.jpg'
import { Link, Route, Routes } from 'react-router-dom'
import AboutMore from './AboutMore'

const About = () => {
  return (
    <div className='h-screen px-[10%] py-[5%] md:mt-0 mt-[5vh] '>

    <div className=" md:text-5xl text-4xl font-[700] text-[#2e9e2c] md:mb-0 -mb-[25vh] md:ml-0 ml-12">
    <h1>ABOUT US</h1>
    </div>

    <div className=' md:flex inline-block py-4 '>
        <div className="md:w-[50%] w-full h-[60vh] flex flex-col justify-center gap-20 text-justify ">
        <h1 className='md:text-2xl text-md font-[500] ' >WebStar Technologies Creates Great and Functional Website Design for Business and Individuals</h1>
        <h1 className='text-lg md:inline-block hidden '>At Webstar Technologies, we are passionate about crafting digital experiences that inspire and engage. 
Since our inception, we have been dedicated to helping businesses of all sizes navigate the complexities of the digital world.
 Our team of creative designers, skilled developers, and strategic thinkers come together to deliver innovative solutions tailored to meet the unique needs of our clients.
Specializing in web development, we build websites that are not only visually appealing but also optimized for performance and user experience. Whether you need a simple 
landing page or a complex e-commerce platform, our expertise ensures that your online presence is both impactful and effective.
</h1>
        </div>

        <div className="md:w-[50%] w-full md:h-[60vh] h-[40vh] p-8 md:mt-0 -mt-[20vh] ">
          <img src={AboutUS} />
        </div>
    </div>

    <div className='h-[6vh]  text-white font-[500] flex items-center justify-center md:mt-4 -mt-10 '>
    <Link to="/about" className='bg-green-600 px-6 rounded-full py-3 md:text-2xl text-xl'>READ MORE</Link>
    </div>
    </div>
  )
}

export default About