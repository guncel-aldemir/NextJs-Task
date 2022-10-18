import React from "react";
import { useTranslation } from 'next-i18next';
const FooterPartOne = () => {
  const { t,i18n } = useTranslation();
  return (
    <div className="grid grid-rows-1 grid-cols-2 md:grid-rows-1 lg:grid-cols-3  xl:grid-cols-5 lg:mx-[280px]  mt-[35px] sm:mx-[130px] mx-[30px] md:gap-x-[95px] gap-x-[30px] gap-y-[10px]   ">
          <div className="border-b-2  border-[#DFCDA5] w-[58px]">
            <p className="font-['Maison Neue'] non-italic font-medium text-[14px] text-[#0D0D2D] leading-[28.7px] uppercase ">
              {t("footerOne:element-one")}
            </p>
          </div>
          <div>
            <p className="font-['Rubik'] not-italic font-light text-[14px] text-[#0D0D2D] leading-[29px] uppercase">
            {t("footerOne:element-two")}
            </p>
          </div>
          <div>
            <p className="font-['Rubik'] not-italic font-light text-[14px] text-[#0D0D2D] leading-[29px] uppercase lg:w-[138px]">
            {t("footerOne:element-three")}
            </p>
          </div>
          <div>
            <p className="font-['Rubik'] not-italic font-light text-[14px] text-[#0D0D2D] leading-[29px] uppercase">
            {t("footerOne:element-four")}
            </p>
          </div>
          <div>
            <p className="font-['Rubik'] not-italic font-light text-[14px] text-[#0D0D2D] leading-[29px] uppercase lg:w-[360px]">
            {t("footerOne:element-five")}
            </p>
          </div>
          <div>
            <p className="font-['Rubik'] not-italic font-light text-[14px] text-[#0D0D2D] leading-[29px] uppercase">
            {t("footerOne:element-six")}
            </p>
          </div>
          <div>
            <p className="font-['Rubik'] not-italic font-light text-[14px] text-[#0D0D2D] leading-[29px] uppercase">
            {t("footerOne:element-seven")}
            </p>
          </div>
          <div className="lg:w-[138px]">
            <p className="font-['Rubik'] not-italic font-light text-[14px] text-[#0D0D2D] leading-[29px] uppercase ">
            {t("footerOne:element-eight")}
            </p>
          </div>
          <div>
            <p className="font-['Rubik'] not-italic font-light text-[14px] text-[#0D0D2D] leading-[29px] uppercase">
            {t("footerOne:element-nine")}
            </p>
          </div>
        </div>
  )
};

export default FooterPartOne;
