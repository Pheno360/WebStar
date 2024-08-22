import React from "react";
import Experience from '../assets/Experience.png'

const Team = () => {
  return (
    <div className="h-screen md:mt-0 -mt-44">
      <div className="flex md:flex-nowrap flex-wrap">

        <div className=" left md:w-[50%] w-full md:h-[100vh] h-auto  md:flex hidden justify-end items-center px-24 md:order-first order-1">
            <img src={Experience} />
        </div>


        <div className="right md:w-[50%] w-full md:h-[100vh] h-full ">
          <div className="right-top h-[50%] flex flex-col justify-end md:text-5xl text-3xl md:px-16 px-8 py-24 font-[500] "> 
            <h1 className="">
              Our{" "}
              <span className="underline decoration-green-500">Experience</span>{" "}
              and
            </h1>
            <h1 className="underline decoration-green-500">
              Professional Team
            </h1>
            <div className="left w-full h-auto md:hidden flex justify-center items-center px-10 md:order-first order-1 mt-10 -mb-16">
            <img src={Experience} />
        </div>
          </div>

          <div className="right-bottom h-[50%] md:px-16 px-4 ">
            <div className="flex flex-col gap-8 md:w-[35vw] w-full md:pl-6 pl-4 md:py-10 py-4 rounded-3xl  bg-green-200 font-[500] md:text-[18px] text-[15px] ">

              <h1 className="flex gap-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                    clipRule="evenodd"
                  />
                </svg>
                Best designing experience with trending tools and sizes.
              </h1>

              <h1 className="flex gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                    clipRule="evenodd"
                  />
                </svg>
                Training and communication method conducted remotely
              </h1>

              <h1 className="flex gap-4 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                    clipRule="evenodd"
                  />
                </svg>
                Amazing communication experience from our team.
              </h1>

              <h1 className="flex gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                    clipRule="evenodd"
                  />
                </svg>
                24/7 online support system available for your service.
              </h1>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
