import React from 'react'
import AdImage from '../../../assets/images/adimage.png'
import { LuFacebook } from "react-icons/lu";
import { SlSocialTwitter } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa6";

const AdSection = () => {
  return (
    <div className="relative flex justify-center items-center md:h-[50vh] lg:h-[90vh] py-10 px-2 md:p-10 xl:min-h-screen font-poppins ">

    <div className="absolute inset-0 bg-white" />
    <div 
      className="absolute inset-0 bg-primary" 
      style={{
        clipPath:"polygon(60% 0%, 0% 0%, 0% 100%, 30% 100%)" 
        
      }}
    />
    

    <div className="relative shadow-2xl bg-white md:bg-transparent flex items-center xl:w-2/3 z-10">
        


      
<div className='relative grid grid-cols-1 md:grid-cols-2 p-10  w-full z-10 gap-5'>
<div className=" flex flex-col justify-center  md:p-5">
        <div className="w-full aspect-square">
          <img 
            src={AdImage}
            alt="Perfume" 
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute top-6 left-6 h-20 w-20 bg-white p-5 shadow-lg text-black rounded-full flex justify-center items-center font-bold">
        <h1 className=' whitespace-nowrap -rotate-[20deg]'>50% off</h1>
      </div>
      <div className='flex pt-5 gap-2'>
        <div><LuFacebook /></div>
        <div><SlSocialTwitter /></div>
        <div><FaInstagram /></div>
      </div>
      </div>
      

      <div className=" md:p-5 xl:p-5 flex flex-col gap-6 justify-center">
        <h2 className="text-4xl font-bold text-[#3A3A3A]">
          <span className="italic text-primary">Special</span> <br/> 
          ATYAB MAKKA
        </h2>
        <p className=" text-gray-600">
          We've got some awesome combos like pure gems. The best-smelling combo ever! Check them out.
        </p>
        <div className=' flex justify-end'>
        <button className=" px-6 py-2 border border-gray-600 text-black hover:bg-black hover:text-white transition-all duration-300  font-medium ">
          Show More
        </button>

        </div>

      </div>
      <div className='absolute bottom-2 md:bottom-5 right-5 text-sm'>www.Atyabmakka.com</div>
</div>

    </div>
  </div>
  )
}

export default AdSection