import React from "react";
import Navbar from "./Navbar";
import AboutUS from "../assets/AboutUs.jpg";
import Mission from "../assets/MISSION.png";
import Vision from "../assets/Vision.png";
import Footer from "./Footer";


const AboutMore = () => {
  return (
    <>
      <Navbar />
      <div className="md:p-10 p-3 ">
        <div className=' rounded-lg md:h-[30vh] h-[15vh] bg-[url("https://static.vecteezy.com/system/resources/previews/005/182/612/non_2x/green-abstract-geometric-shape-background-free-vector.jpg")] flex flex-col justify-center items-center'>
          <h1 className="md:text-5xl text-2xl font-[500] text-green-900">ABOUT WEBSTAR</h1>
          <div className="w-1/2 bg-[#2b2b2b] md:h-1 h-0.5 md:mt-4 mt-2 bg-gradient-to-r from-green-400 via-green-900 to-green-300 rounded-full"></div>
          <h1 className="md:text-2xl text-md font-[500] text-[#2b2b2b] mt-2">
            We Create Things With Inovation
          </h1>
        </div>

        <div className="flex md:flex-nowrap flex-wrap mt-2 justify-center items-center">
          <div className="image md:h-[45vh] h-full md:w-1/2 w-full md:ml-0 -ml-32 ">
            <img className="h-full ml-[20%]" src={AboutUS} />
          </div>

          <div className="info md:w-1/2 w-full">
            <div className="md:text-xl text-sm font-[500]">
              <h1>WebStar Technologies Creates Bright and Functional </h1>
              <h1> Website Design for Business and Individuals</h1>
            </div>

            <h1 className="md:mt-10 mt-5 text-sm">
              At Webstar Technologies, we are passionate about crafting digital
              experiences that inspire and engage. Since our inception, we have
              been dedicated to helping businesses of all sizes navigate the
              complexities of the digital world. Our team of creative designers,
              skilled developers, and strategic thinkers come together to
              deliver innovative solutions tailored to meet the unique needs of
              our clients.
            </h1>
          </div>
        </div>
      </div>

      <div className="md:h-screen h-auto ">

      <div className="flex md:flex-nowrap flex-wrap md:h-[50vh] h-auto md:mt-0 mt-10">
      <div className="md:w-1/2 w-full  flex flex-col justify-center items-center">
      <h1 className="text-4xl font-[500]">OUR <span className=" text-white  p-1 bg-green-500 tracking-wider">MISSION</span></h1>
      <h1 className="w-[75%] text-justify mt-[7%] md:text-lg text-md">At Webstar Technologies, our mission is to empower businesses of all sizes by delivering innovative, high-quality digital solutions. We strive to create impactful web and app experiences that drive growth, enhance brand presence, and foster lasting customer relationships.</h1>
      </div>

      <div className="image md:w-1/2 w-full flex items-center justify-center p-8">
      <img className="h-full " src={Mission} />
      </div>
      </div>

      <div className="flex md:flex-nowrap flex-wrap md:h-[50vh] h-auto p-8">

      <div className="image md:w-1/2 w-full  flex justify-center items-center md:order-none order-2 md:px-0 px-6 md:mt-0 mt-4 ">
      <img className="h-full" src={Vision} />
      </div>

      <div className="md:w-1/2 w-full flex flex-col justify-center items-center">
      <h1 className="text-4xl font-[500]">OUR <span className=" text-white tracking-wider  p-1 bg-green-500">VISION</span></h1>
      <h1 className="md:w-[75%] w-full text-justify mt-[7%] md:text-lg text-md">Our vision is to be a leading global provider of cutting-edge digital services, recognized for our creativity, excellence, and commitment to customer satisfaction. We envision a world where businesses can seamlessly integrate technology into their operations, creating value and driving innovation.</h1>
      </div>
      </div>


      </div>

      <Footer />

    </>
  );
};

export default AboutMore;
