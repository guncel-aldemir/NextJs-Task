import Image from "next/image";
import React from "react";
import Photos3 from "../public/Assets/Images/Rectangle191.png";
import Icon from "../public/Assets/Icons/ActivitiesIcon/Group 64.svg";
import { useTranslation } from 'next-i18next';
const Main = () => {
  const { t,i18n } = useTranslation();
  return (
    <div className="w-screen ">
          <div className="h-full md:flex md:flex-col mt-[214px] md:mx-[135px] md:gap-y-[11px]  ">
            <h1 className="font-['Open_Sans'] non-italic font-normal text-[60px] text-center leading-[60px] uppercase text-[#0D0D2D]">{t("main:list-one")}</h1>
            <h3 className=" font-['Open_Sans'] non-italic font-normal text-[25px] text-center leading-[110%] text-[#C38976]">{t("main:list-two")}</h3>
            <p className="font-['Open_Sans'] non-italic font-light text-[17px] text-center leading-[27px] text-[#0D0D2D]">{t("main:list-three")}</p>
            <div className='relative flex flex-col'>
              <Image src={Photos3} alt="" />
              <div className="absolute sm:top-[60px] sm:right-[-5px] flex flex-row justify-between items-center bg-[#E7A954] lg:w-[500px] lg:h-[100px] md:px-[26px] md:py-[20px] md:w-[290px] sm:h-[58px] sm:px-[12px] sm:py-[24px] top-[70px] right-[70px] ">
                <div className="flex flex-col items-start">
                <span className="font-['Open_Sans'] non-italic font-normal text-[36px]  uppercase text-[#0D0D2D]">{t("main:list-four")}</span>
                <p className="font-['Open_Sans'] non-italic font-light text-[24px]  text-[#fff] hidden  lg:block">{t("main:list-five")}</p>
                </div>
                <div className="">
                  <Image src={Icon} alt=""/>
                </div>
              </div>
            </div>
           
          </div>
    </div>
  )
  }
export default Main;
