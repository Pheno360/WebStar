import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div className='h-screen'>

    <div className='md:text-4xl text-2xl font-[600] text-center md:pt-10 pt-0 '>
    <h1>What We Do & We do it well,</h1>
    <h1>Determine the Service you need</h1>
    </div>

    <div className="card1 h-[40vh] flex  justify-evenly items-center md:mt-2">

    <div className="elem1 box bg-white h-[35vh] w-[20vw] py-6 px-2 flex flex-col justify-center items-center">
         <Link to='/1' className=' bg-[#FFD747] rounded-3xl flex p-6 md:w-24 w-20'>
         <svg className=' hover:scale-125 transition'  xmlns="http://www.w3.org/2000/svg" 
         viewBox="0 0 24 24" 
         fill="currentColor"> 
         <path d="M14 18V20L16 21V22H8L7.99639 21.0036L10 20V18H2.9918C2.44405 18 2 17.5511 2 16.9925V4.00748C2 3.45107 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44892 22 4.00748V16.9925C22 17.5489 21.5447 18 21.0082 18H14ZM4 5V14H20V5H4Z">
         </path></svg>
         </Link>

         <div className='text-center mt-2'>
         <Link to="/1" className='md:text-xl text-md font-[500] '>Web Development</Link>
         <p className='mt-2 font-[500] md:inline-block hidden'>We create attractive and functional websites accroding to company activities</p>
         </div>
         
    </div>

    <div className="elem2 bg-white h-[35vh] w-[20vw] py-6 px-2 flex flex-col justify-center items-center">
    <Link to="/2" className=' bg-[#FF6FA3] rounded-3xl flex p-6 md:w-24 w-20'>
    <svg className='hover:scale-125 transition' xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor">
    <path d="M20.0834 10.4999L21.2855 11.2212C21.5223 11.3633 21.599 11.6704 21.457 11.9072C21.4147 11.9776 21.3559 12.0365 21.2855 12.0787L12.0001 17.6499L2.71463 12.0787C2.47784 11.9366 2.40106 11.6295 2.54313 11.3927C2.58536 11.3223 2.64425 11.2634 2.71463 11.2212L3.91672 10.4999L12.0001 15.3499L20.0834 10.4999ZM20.0834 15.1999L21.2855 15.9212C21.5223 16.0633 21.599 16.3704 21.457 16.6072C21.4147 16.6776 21.3559 16.7365 21.2855 16.7787L12.5145 22.0412C12.1979 22.2313 11.8022 22.2313 11.4856 22.0412L2.71463 16.7787C2.47784 16.6366 2.40106 16.3295 2.54313 16.0927C2.58536 16.0223 2.64425 15.9634 2.71463 15.9212L3.91672 15.1999L12.0001 20.0499L20.0834 15.1999ZM12.5145 1.30864L21.2855 6.5712C21.5223 6.71327 21.599 7.0204 21.457 7.25719C21.4147 7.32757 21.3559 7.38647 21.2855 7.42869L12.0001 12.9999L2.71463 7.42869C2.47784 7.28662 2.40106 6.97949 2.54313 6.7427C2.58536 6.67232 2.64425 6.61343 2.71463 6.5712L11.4856 1.30864C11.8022 1.11864 12.1979 1.11864 12.5145 1.30864Z">
    </path></svg>
         </Link>

         <div className='text-center mt-2'>
         <Link to="/2" className='md:text-xl text-md font-[500] '>UI/UX Designer</Link>
         <p className='mt-2 font-[500] md:inline-block hidden'>UI/UX design service provider, our primary goal is to create user-friendly products.</p>
         </div>
    </div>

    <div className="elem3 bg-white h-[35vh] w-[20vw] py-6 px-2 flex flex-col justify-center items-center">
    <Link to="/3" className=' bg-[#55B8FF] rounded-3xl flex p-6 md:w-24 w-20'>
    <svg className='hover:scale-125 transition' xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor"><path d="M7 4V20H17V4H7ZM6 2H18C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2ZM12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17Z">
    </path></svg>
         </Link>

<div className='text-center mt-2'>
<Link to="/3" className='md:text-xl text-md font-[500] '>App Development</Link>
<p className='mt-2 font-[500] md:inline-block hidden'>We build mobile applications which support every platform (Andriod/IOS)</p>
</div>
    </div>

    </div>



    <div className="card2 h-[40vh] flex justify-evenly items-center md:mt-0 -mt-20">

    <div className="elem4 box bg-white h-[35vh] w-[20vw] py-6 px-2 flex flex-col justify-center items-center md:mt-0 mt-7">
    <Link to="/4" className=' bg-[#7482FF] rounded-3xl flex p-6 md:w-24 w-20'>
    <svg className='hover:scale-125 transition' xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor">
    <path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z">
    </path></svg>
         </Link>

         <div className='text-center mt-2 '>
         <Link to="/4" className='md:text-xl text-md font-[500] '>Search Engine Optimization</Link>
         <p className='mt-2 font-[500] md:inline-block hidden'>Our SEO service is a comprehensive approach to improving your website’s visibility and ranking.</p>
         </div>
         
    </div>

    <div className="elem5 bg-white h-[35vh] w-[20vw] py-6 px-2 flex flex-col justify-center items-center">
    <Link to="/5" className=' bg-[#48C6BE] rounded-3xl flex p-6 md:w-24 w-20'>
    <svg className='hover:scale-125 transition' xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.9998 1L18 11H6L11.9998 1ZM13 13.5H21V21.5H13V13.5ZM6.75 22C9.37335 22 11.5 19.8734 11.5 17.25C11.5 14.6266 9.37335 12.5 6.75 12.5C4.12665 12.5 2 14.6266 2 17.25C2 19.8734 4.12665 22 6.75 22Z">
    </path>
    </svg>
         </Link>

         <div className='text-center mt-2'>
         <Link to="/5" className='md:text-xl text-md font-[500] '>Graphic Design</Link>
         <p className='mt-2 font-[500] md:inline-block hidden'>Graphics create an impact on users which results in growth of engagement. </p>
         </div>
    </div>

    <div className="elem6 bg-white h-[35vh] w-[20vw] py-6 px-2 flex flex-col justify-center items-center">
    <Link to="/6" className=' bg-[#62B87A] rounded-3xl flex p-6 md:w-24 w-20'>
    <svg className='hover:scale-125 transition'  xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor">
    <path d="M22 18V20H2V18H22ZM2 3.5L10 8.5L2 13.5V3.5ZM22 11V13H12V11H22ZM22 4V6H12V4H22Z">
    </path>
    </svg>
         </Link>

<div className='text-center mt-2 '>
<Link to="/6" className='md:text-xl text-md font-[500] '>Social Media Management</Link>
<p className='mt-2 font-[500] md:inline-block hidden'>We create engaging social media posts which grabs user attention and help in the business growth.</p>
</div>
    </div>
    </div>

    </div>
  )
}

export default Services
