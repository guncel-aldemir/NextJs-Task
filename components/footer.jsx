import Image from "next/image";
import React from "react";
import Logo from "../public/Assets/Icons/FooterIcon/logo2.svg";

import Hotels from "../pages/hotels";
const Footer = () => {
    
  return (
    <div className="w-screen">
        <div className="flex flex-row  md:mx-[135px] md:mt-[232px] ">
        <div className="flex flex-col justify-center items-start gap-[11px] bg-[#F8F8F8] mr-[70px]">
                <Image src={Logo} alt=""/>
                <p className="font-['Open_Sans'] non-italic font-light text-[14px] text-[#0D0D2D] leading-[17.5px]">Our Hotels</p>
            </div>
            <div className="flex flex-row justify-start">
               <Hotels /> 
            </div>
           
      
        </div>
       
    </div>
  )
};

export default Footer;
