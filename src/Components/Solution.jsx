import React from 'react'
import Doubts from '../assets/Doubts.jpg'
import { Link } from 'react-router-dom'

const Solution = () => {
  return (
    <div className='h-screen md:mt-[10%] mt-20 md:mb-0 -mb-20 '>
      <div className='flex justify-center items-end'>
      <img className='md:h-[60vh] h-[40vh] ' src={Doubts} />
      </div>

      <h1 className='text-center md:text-5xl text-2xl font-[500]'>Any Questions? Look here.</h1>
      <h1 className='text-center md:text-3xl text-xl font-[500] mt-4'>Cant't find answer? call us at <br/> +91 9096230241</h1>

    <div className='md:h-[8vh] h-[6vh]  flex justify-center items-center mt-10' >
      <Link to="/contact" className='bg-green-600 md:px-6 px-3 rounded-full md:py-3 py-2 md:text-2xl text-lg text-white font-[500]'>GET SOLUTION</Link>
      </div>
    </div>
  )
}

export default Solution
