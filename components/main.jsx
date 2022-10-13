import Image from "next/image";
import React from "react";
import Photos3 from "../public/Assets/Images/Rectangle 191.png";
import Icon from "../public/Assets/Icons/ActivitiesIcon/Group 64.svg";
const Main = () => {
  return (
    <div className="w-screen">
        <div className="h-full md:flex md:flex-col mt-[214px] md:mx-[135px] md:gap-y-[11px] relative  ">
            <h1 className="font-['Open_Sans'] non-italic font-normal text-[60px] text-center leading-[60px] uppercase text-[#0D0D2D]">SPECIAL FOR YOU</h1>
            <h3 className=" font-['Open_Sans'] non-italic font-normal text-[25px] text-center leading-[110%] text-[#C38976]">Please click for more details...</h3>
            <p className="font-['Open_Sans'] non-italic font-light text-[17px] text-center leading-[27px] text-[#0D0D2D]">Asteria Kremlin Palace offers you and your loved ones comfortable accommodation possibilites. Hotel’s location give you the possibility to explore the marvelous Antalya while offering magnificent atmosphere as well as quality service.</p>
            <div className="">
            <Image src={Photos3} alt=""  />
            </div>
           
            <div className="absolute flex flex-row justify-between bg-[#E7A954]">
                <div className="flex flex-col z-10 md:justify-center">
                <h3 className="font-['Open_Sans'] non-italic font-normal text-[36px] leading-[36px] uppercase text-[#0D0D2D]">ACTIVITIES</h3>
                <p className="font-['Open_Sans'] non-italic font-normal text-[24px] leading-[110%] text-[#fff] sm:hidden md:inline-block">Please review in detail.</p>
                </div>
                <div className="">
                    <Image src={Icon} alt=""/>
                </div>
                
            </div>

        </div>
    </div>
  )
  }
export default Main;
