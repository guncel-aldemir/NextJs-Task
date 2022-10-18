import Image from "next/image";
import React from "react";
import Logo from "../public/Assets/Icons/FooterIcon/logo2.svg";
import FooterPartOne from "./footerPartOne";
import Hotels from "../pages/hotels";
import FooterPartTwo from "./footerPartTwo";
import { useTranslation } from 'next-i18next';
const Footer = () => {
  const { t,i18n } = useTranslation();
  return (
    <div className="w-screen bg-[#F8F8F8]  h-screen  z-100  ">
      <div className="h-[150px] w-screen bg-[#F8F8F8] md:mt-[232px]">
        <div className="flex lg:flex-row md:mx-[135px] mt-[128px] flex-col ">
          <div className="flex flex-col mt-[10px] items-start gap-[11px]  mr-[70px]   ">
            <Image src={Logo} alt="" />
            <p className="font-['Open_Sans'] not-italic font-light text-[14px] text-[#0D0D2D] leading-[17.5px]">
              {t("footer:element")}
            </p>
          </div>
          <div className="flex flex-row justify-start ">
            <Hotels />
          </div>
        </div>
        
        <FooterPartOne/>
        <FooterPartTwo/>
        
      </div>
      <div className="bg-[#DEF6FF] h-screen sm:pl-[0px] "></div>
    </div>
  );
};

export default Footer;
