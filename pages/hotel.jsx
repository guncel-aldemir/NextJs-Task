import Image from "next/image";
import React from "react";
import Vector from "../public/Assets/Icons/FooterIcon/vector.svg";
const Hotel = ({ image, title, titleSec }) => {
  return (
    <div className="flex flex-col justify-between ">
      <div className="flex flex-col xl:items-end justify-center md:items-start   ">
        <p className="font-['Rubik'] font-medium text-[14px] not-italic text-[#074A81] leading-[18px]">{title}</p>
        <p  className="font-['Rubik'] font-medium text-[14px] not-italic text-[#074A81] leading-[18px]">{titleSec}</p>
      </div>
      <div className="relative w-full">
        <Image
          src={image}
          alt=""
          width="180px"
          height="209px"
          priority={true}
          objectFit="fill"
          
        />
        <div className="absolute bottom-[-20px] right-[20px]">
          <Image src={Vector} alt="" priority={true} />
        </div>
      </div>
    </div>
  );
};

export default Hotel;
