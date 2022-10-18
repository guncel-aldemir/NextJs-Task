import React from "react";
import { useTranslation } from 'next-i18next';
const FooterPartTwo = () => {
  const { t,i18n } = useTranslation();
  return (
    <div className="flex xl:flex-row  justify-evenly items-start lg:mx-[280px] sm:mx-[130px] mx-[30px] h-full flex-col gap-[50px] xl:mt-[35px] sm:mt-[105px] mt-4 gap-y-[10px]  gap-x-[30px]    ">
      <div className="grid grid-rows-1 lg:grid-cols-[100px_85px_253px]  grid-cols-2 md:gap-x-[96px]   gap-x-[30px]  w-full">
        <div className="">
          <p className="font-['Rubik'] not-italic font-light text-[14px] text-[#0D0D2D] leading-[29px] uppercase">
           {t("footerTwo:element-sec-one")}
          </p>
        </div>
        <div className="border-b-2  border-[#DFCDA5] w-[58px]  ">
          <p className="font-['Rubik'] not-italic font-bold text-[14px] text-[#0D0D2D] leading-[29px] uppercase">
          {t("footerTwo:element-sec-two")}
          </p>
        </div>
        <div className="">
          <p className="font-['Rubik'] not-italic font-light text-[14px] text-[#0D0D2D] leading-[29px] uppercase">
          {t("footerTwo:element-sec-three")}
          </p>
        </div>

        <div>
          <p className="font-['Rubik'] not-italic font-light text-[14px] text-[#0D0D2D] leading-[29px] uppercase">
          {t("footerTwo:element-sec-four")}
          </p>
        </div>
        <div>
          <p className="font-['Rubik'] not-italic font-light text-[14px] text-[#0D0D2D] leading-[29px] uppercase">
          {t("footerTwo:element-sec-five")}
          </p>
        </div>
      </div>
      <div className="w-full xl:text-right text-center ">
        <p className="font-['Rubik'] not-italic font-light text-[14px] text-[#0D0D2D] leading-[29px] uppercase ">
        {t("footerTwo:element-sec-six")}
        </p>
      </div>
    </div>
  );
};

export default FooterPartTwo;


