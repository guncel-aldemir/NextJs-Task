import Image from "next/image";
import React from "react";
import Kremlin from "../public/Assets/Images/Rectangle190.png";
import Family from "../public/Assets/Images/Rectangle192.png";
import { useTranslation } from 'next-i18next';
const Header = () => {
    const { t,i18n } = useTranslation();
  return <div className="w-screen sm:w-screen ">
    <div className="">
    <Image src={Kremlin} layout="responsive" priority="false" alt=""/>
    </div>
    <div className="h-full flex lg:flex-row flex-col md:mt-[173px] mt-[156px] md:mx-[135px] md:gap-x-[20px]  sm:mx-0">
       <div className="w-full flex flex-col justify-start flex-1  mb-[20px]">
        <h1 className="font-['Open_Sans'] not-italic font-normal text-[60px] leading-[60px] mb-[5px] text-[#0D0D2D] ">ASTERIA<br></br>
        KREMLIN PALACE</h1>
        <h3 className=" font-['Open_Sans'] not-italic font-normal text-[25px] leading-[110%] text-[#C38976] mb-[22px]">{t("header:subtitle-one")}</h3>
        <p className="font-['Open_Sans'] not-italic font-light text-[17px] leading-[24.82px] text-[#0D0D2D]">{t("header:subtitle-two")}
        <br></br>
        <br></br>
        </p>
        <p className="font-['Open_Sans'] not-italic font-light text-[17px] leading-[24.82px] text-[#0D0D2D] ">{t("header:subtitle-three")}</p>
       </div>
       <div className="flex flex-1 ">
        <Image src={Family} alt=""/>
       </div>
    </div>
  </div>;
};

export default Header;
