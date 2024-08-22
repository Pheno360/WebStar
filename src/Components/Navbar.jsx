import React, { useEffect } from 'react'
import WebStar from '../assets/WebStar.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Navbar = () => {
  const {pathname}=useLocation();

  const Navigate= useNavigate();
  const tl = gsap.timeline();

useGSAP(()=>{

  tl.to(".nav1-menu",{
   transform:"translateX(16%)"
 })

 tl.pause();
},[pathname])

const handleClick = () => {
  tl.play();

  console.log("Clicked")
}


const handleLinkClick = (e) => {
  useEffect(()=>{
    tl.pause();
  },[pathname])
}

const handleExit = () => {
  tl.reverse();
}


  return (
    <>
    <div className='nav1-menu md:hidden flex h-auto w-[95vw] -ml-10 fixed z-10 bg-zinc-100 p-10  flex-col rounded-xl shadow-2xl border border-green-200 transform translate-x-[120%]'>

    <div onClick={handleExit} className='exit-icon text-4xl self-end text-green-500 '>
    <i class="ri-close-circle-fill"></i>
    </div>

<div className=' flex flex-col gap-6 mt-16 ml-5 text-2xl font-[500]'>
    <Link className='border-b-green-500 border-b-2' to="/">Home</Link>
    <Link className='border-b-green-500 border-b-2' to="/about">About</Link>
    <Link className='border-b-green-500 border-b-2' to="/1">Services</Link>
    <div className='text-lg mt flex flex-col -mt-5 ml-2 gap-2'>
    <Link onClick={handleLinkClick} to="/1">Web Development</Link>
    <Link onClick={handleLinkClick} to="/2">UI/UX Design</Link>
    <Link onClick={handleLinkClick} to="/3">Mobile App Development</Link>
    <Link onClick={handleLinkClick} to="/4">SEO</Link>
    <Link onClick={handleLinkClick} to="/5">Graphic Design</Link>
    <Link onClick={handleLinkClick} to="/6">Social Media Management</Link>
    </div>
    <Link className='border-b-green-500 border-b-2 mb-20' to="/contact">Contact</Link>
    </div>

    </div>
    <div className='md:h-[10vh] h-[8vh] bg-[#84f15f] flex items-center p-4'>
      <div className=' flex items-center h-full'> 
        <img className='md:w-[8vw] w-[18vh] md:ml-0 -ml-4' src={WebStar} />
        <h1 className='-ml-7 text-2xl font-[500] md:inline-block hidden'>WEBSTAR</h1> 
      </div>

      <div onClick={handleClick} className='menu-icon flex md:hidden justify-end  w-[90%] text-[4vh]'>
      <i class="ri-menu-3-line"></i>
      </div>
 
      <div className=' w-full md:flex hidden gap-10 justify-end px-20 font-[500] mt-5 text-xl'>
      <Link to="/" >Home</Link>
      <Link to="/about" >About</Link>
      <div className="relative group transition">
            <button className=" hover:text-green-800 transition">
              Services
            </button>

            {/* Dropdown Menu */}
            <div className="absolute top-5 w-60 text-[1rem]  hidden group-hover:block bg-white text-black shadow rounded mt-2">
              <Link
                to="/1"
                className="block px-4 py-2 hover:bg-[#a7ff8a]"
              >
                Web Development
              </Link>
              <Link
                to="/2"
                className="block px-4 py-2 hover:bg-[#a7ff8a]"
              >
                UI/UX Design
              </Link>
              <Link
                to="/3"
                className="block px-4 py-2 hover:bg-[#a7ff8a]"
              >
                App Development
              </Link>
              <Link
                to="/4"
                className="block px-4 py-2 hover:bg-[#a7ff8a]"
              >
               Search Engine Optimization
              </Link>
              <Link
                to="/5"
                className="block px-4 py-2 hover:bg-[#a7ff8a]"
              >
                Graphic Design
              </Link>
              <Link
                to="/6"
                className="block px-4 py-2 hover:bg-[#a7ff8a]"
              >
                Social Media Management
              </Link>
              
            </div>
          </div>
      <Link to="/contact" >Contact</Link>
      </div>

    </div>
    </>
  )
}

export default Navbar
