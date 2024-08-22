import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Contact = () => {
  return (
    <div>
    <Navbar />
      <div className=' md:p-10 p-3'>
      <div className=' rounded-lg md:h-[30vh] h-[17vh] bg-[url("https://static.vecteezy.com/system/resources/previews/005/182/612/non_2x/green-abstract-geometric-shape-background-free-vector.jpg")] flex flex-col justify-center items-center'>
          <h1 className="md:text-5xl text-3xl font-[500] text-green-900">GET IN TOUCH</h1>
          <div className="w-1/2 bg-[#2b2b2b] md:h-1 h-0.5 md:mt-4 mt-2 bg-gradient-to-r from-green-400 via-green-900 to-green-300 rounded-full"></div>
          <h1 className="md:text-2xl text-xl font-[500] text-[#2b2b2b] mt-2">
           CONTACT US
          </h1>
        </div>

        <div className='contact-container flex md:flex-nowrap flex-wrap justify-evenly  mt-14'>

        <div className='md:h-[40vh] h-[35vh] md:w-[20vw] w-[40vw] bg-green-200 rounded-2xl flex flex-col items-center justify-center '>
          <div className='-mt-12 text-[10vh] '><i class="ri-phone-fill"></i></div>
          <div className='h-0.5 w-[70%] bg-green-800'></div>

          <div className='font-[500] mt-4 flex flex-col gap-2 md:text-base text-sm'>
          <h1>+91 9096230241,</h1>
          <h1>+91 7887477459</h1>
          </div> 
        </div>

        <div className='md:h-[40vh] h-[35vh] md:w-[20vw] w-[44vw] bg-green-200 rounded-2xl flex flex-col items-center justify-center'>
        <div className='-mb-2 text-[10vh] rotate-45 '><i class="ri-navigation-fill"></i></div>
          <div className='h-0.5 w-[70%] bg-green-800'></div>
          <div className="font-[500] mt-5 md:text-base text-[3.5vw]">
          <h1 >WebStar Technologies</h1>
          <h1>123 Innovation Drive, </h1>
          <h1> Suite 456 Tech City, </h1>
           <h1>TX 78901 India</h1>
           </div>

        </div>

        <div className='md:h-[40vh] h-[30vh]  md:w-[20vw] w-[60vw] bg-green-200 rounded-2xl flex flex-col items-center justify-center md:mt-0 mt-8'>
        <div className='-mt-20 text-[10vh] '><i class="ri-message-2-fill"></i></div>
          <div className='h-0.5 w-[70%] bg-green-800'></div>

          <div className='font-[500] mt-6 flex flex-col gap-2 md:text-base text-[3.5vw]'>
          <h1>webstartechnologies@gmail.com</h1>
          </div> 
        </div>

        </div> 

      </div>

     <div className='mt-20'>
      <Footer />
     </div>
    </div>
  )
}

export default Contact
