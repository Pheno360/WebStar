import React from 'react'
import LandingPage from '../assets/LandingPage.png'
import Google from '../assets/Google.png'
import Microsoft from '../assets/Microsoft.png'
import Dribble from '../assets/Dribbble.png'
import Paypal from '../assets/Paypal.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className=' bg-white h-[90vh] w-full'>
    <div className='flex md:flex-nowrap flex-wrap  md:py-8 py-0 md:px-32 px-2 '>

        <div className=' md:w-[50vw] w-full md:h-[55vh] h-full px-10 md:order-1 order-2 md:mt-0 -mt-20 '>
            <img className=' max-h-[100%] max-w-[100%]' src={LandingPage} alt="" />
        </div>

        <div className='md:w-[50vw] w-[100vw]  h-[55vh] flex justify-start p-16 md:order-2 order-1 md:mt-0 -mt-10 md:ml-0 -ml-8 '>
        <div className='text-center md:text-5xl text-4xl'>
          <h1 className='mt-6'>PLUGGING GREAT IDEAS</h1>
          <h1 className='md:mt-6 mt-0'>INTO YOUR</h1>
          <h1 className='md:mt-6 mt-4'>{"BRAND".split('').map((item,index)=>(<span key={index} className=' bg-green-500 mx-2 px-2 text-white font-[500]'>
            {item}</span>))}</h1>
          </div>
        </div>
    </div>

    <div className='md:h-[10vh] h-[9vh] flex p-3 md:px-[20%] px-2 justify-around text-white font-[600] md:mt-0 mt-2'>
         <Link to="/contact" className='bg-green-600 px-4 py-2 rounded-full md:text-2xl text-lg'>GET A QUOTE</Link>
         <Link to="/about" className='bg-green-600 px-4 rounded-full py-2 md:text-2xl text-lg'>LEARN MORE</Link>
    </div>

    <div className='md:h-[12vh] h-[8vh] flex justify-around bg-[#F1FFE2] items-center md:px-16 px-0 md:flex-nowrap flex-wrap md:mt-0 mt-4  '>
      <img className='md:w-36 w-16 ' src={Google} />
      <img className='md:w-36 w-16 ' src={Microsoft} />
      <img className='md:w-36 w-16 ' src={Paypal} />
      <img className='md:w-36 w-16' src={Dribble} />
      
    </div>
      
    </div>
  )
}

export default Hero
