import React from 'react'
import WebStar from '../assets/WebStar.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='h-[60vh]'>
      <div className='md:h-[58vh] h-auto  bg-green-300 rounded-3xl'>
      
      <div className='flex justify-around cursor-default p-10 md:flex-nowrap flex-wrap '>
      
      <div className="icon  w-[20vw] h-full md:inline-block hidden ">
        <img className='-mt-10' src={WebStar} />
        <h1 className='-mt-16 font-[500] text-2xl  justify-center '>WebStar Technologies</h1>
        
      </div>
      <div className="quick-links md:w-[20vw] w-[40vw] flex flex-col items-center md:mt-10 mt-2 md:ml-0 -ml-12 ">
        <h1 className=' bg-white md:p-3 p-2 md:text-xl text-md rounded-full font-[500] tracking-wider'>Quick Links</h1>
        <div className=' text-start mr-10 mt-4 md:leading-8 leading-6 md:text-lg text-sm font-[500] flex flex-col gap-2'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/1">Services</Link>
        <Link to="/contact">Contact</Link>
        </div>
        
      </div>
      <div className="services md:w-[25vw] w-[55vw] flex flex-col items-center md:mt-10 mt-2 md:mr-0 -mr-10  ">
      <h1 className=' bg-white md:p-3 p-2 md:text-xl text-md rounded-full font-[500] tracking-wider md:mr-44 mr-10'>Services</h1>
        <div className=' text-start md:mr-10 mt-4 md:leading-8 leading-5 md:text-lg text-sm font-[500] flex flex-col gap-2  -mr-4'>
        <Link to="/1">Web Development</Link>
        <Link to="/2">UI/UX Design</Link>
        <Link to="/3">Mobile App Development</Link>
        <Link to="/4">Search Engine Optimization</Link>
        <Link to="/5">Graphic Design</Link>
        <Link to="/6">Socail Media Management</Link>
        </div>
      </div>

      <div className="contact  md:w-[20vw] w-[60vw] flex flex-col items-center md:mt-10 mt-5 ">
      <h1 className=' bg-white md:p-3 p-2 md:text-xl text-md rounded-full font-[500] tracking-wider mr-14 md:-ml-0 -ml-32 '>Contact Us</h1>
        <div className=' text-start mr-10 md:ml-0 -ml-6  mt-4 md:leading-8 leading-6 md:text-lg text-sm font-[500]'>
        <h1>webstartechnologies@gmail.com</h1>
        <h1>+91 9096230241</h1>
        <h1>+91 7887477459</h1>
        
        <h1 className='mt-5'>Find us on</h1>
        <div className='text-[25px] flex gap-2'>
        <i class="ri-facebook-box-fill"></i>
        <i class="ri-instagram-fill"></i>
        <i class="ri-linkedin-box-fill"></i>
        </div>
        </div>
      </div>

      </div>
      
      </div>

      <div className='flex justify-center items-center h-[7vh] md:text-xl text-[3.2vw] font-[500]'>
      <h1>©2024 All rights reserved Term of use and Privacy Policy</h1>
      </div>

    </div>
  )
}

export default Footer
