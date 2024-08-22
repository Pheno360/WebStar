import React from "react";
import Navbar from "./Navbar";
import WebDev from "../assets/ServiceWeb.png";
import 'remixicon/fonts/remixicon.css'
import Footer from './Footer';
import { useLocation } from "react-router-dom";
import UIUX from "../assets/UIUX.png";
import GraphicDesign from "../assets/GraphicDesign.png";
import SocialMedia from "../assets/SocialMedia.png";
import MobileApp from "../assets/MobileApp.png";

const ServicesComponent = () => {

    const {pathname}=useLocation();
    const id=pathname.slice(1)

    const data=[
        {
        title:"WEB DEVELOPMENT",
        tag:"Creating responsive web solutions that adapt to your business needs",
        image:WebDev,
        point1:"E-commerce Website",
        point2:"Business Website",
        point3:"Web Application",
        point4:"CMS Web Development"
    },
    {
        title:"UI/UX Design",
        tag:"Creating visually appealing and intuitive user interfaces that enhance user experience",
        image:UIUX,
        point1:"Mobile Application",
        point2:"Website Design",
        point3:"Web Application",
        point4:"Desktop Application"
    },
    {
        title:"MOBILE APP DEVELOPMENT",
        tag:"Creating cross-platform mobile applications that enhance user experience",
        image:MobileApp,
        point1:"iOS App",
        point2:"Android App",
        point3:"Flutter App",
        point4:"React Native App"
    },
    {
        title:"Search Engine Optimization",
        tag:"Improving your website's visibility and ranking in search engines",
        image:WebDev,
        point1:"SEO Auditing",
        point2:"On-page SEO",
        point3:"Off-page SEO",
        point4:"Link Building"
    },
    {
        title:"GRAPHIC DESIGN",
        tag:"Creating visually appealing and engaging visuals that communicate your brand message",
        image:GraphicDesign,
        point1:"Logos",
        point2:"Brochures",
        point3:"Posters",
        point4:"Social Media Campaigns"
    },
    {
        title:"SOCIAL MEDIA MANAGEMENT",
        tag:"Creating engaging and personalized social media posts that help in the business growth",
        image:SocialMedia,
        point1:"Facebook Ads",
        point2:"Instagram Ads",
        point3:"Twitter Ads",
        point4:"LinkedIn Ads"
    },
]
 const service=data[id-1];

  return (
    <div>
      <Navbar />

      <div className="main md:p-10 p-3">
        <div className='heading md:h-[30vh] h-[20vh] shadow-lg rounded-lg flex flex-col items-center justify-center '>
          <h1 className="md:text-5xl text-xl font-[500] text-orange-900">
            {service.title}
          </h1>
          <div className="w-1/2 bg-[#2b2b2b] md:h-1 h-0.5 md:mt-4 mt-2 bg-gradient-to-r from-orange-800 via-orange-300 to-orange-800 rounded-full"></div>
          <h1 className="mt-4 md:text-2xl text-sm text-center">
          {service.tag}
          </h1>
        </div>
      </div>

      <div className="subheading  flex md:flex-nowrap flex-wrap md:px-20 px-2">

        <div className="points flex flex-col md:w-1/2 w-full h-[48vh] justify-center items-center md:mt-0 -mt-14  ">
        <div className="text-start flex flex-col gap-6 text-xl">

          <h1 className="flex gap-4 font-[500] md:text-2xl text-sm items-center">
          <div className="icon bg-orange-400 px-2 py-1 rounded-full text-white ">
          <i class="ri-code-s-slash-line"></i>
          </div>{service.point1}</h1>

          <h1 className="flex gap-4 font-[500] md:text-2xl text-sm items-center">
          <div className="icon bg-orange-400 px-2 py-1 rounded-full text-white ">
          <i class="ri-code-s-slash-line"></i>
          </div>{service.point2}</h1>

          <h1 className="flex gap-4 font-[500] md:text-2xl text-sm items-center">
          <div className="icon bg-orange-400 px-2 py-1 rounded-full text-white ">
          <i class="ri-code-s-slash-line"></i>
          </div>{service.point3}</h1>

          <h1 className="flex gap-4 font-[500] md:text-2xl text-sm items-center">
          <div className="icon bg-orange-400 px-2 py-1 rounded-full text-white ">
          <i class="ri-code-s-slash-line"></i>
          </div>{service.point4}</h1>

          </div>
        </div>

        <div className="image mr-10 flex md:w-1/2 w-full md:h-[48vh] h-auto md:order-none order-first items-center justify-center">
           <img className="h-full p-10" src={service.image} alt="web" />
        </div>
      </div>

      <div className="mt-10">
      <Footer />
      </div>
      
    </div>

  );
};

export default ServicesComponent;
