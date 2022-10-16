import Image from "next/image";
import React from "react";
import Vector from "../public/Assets/Icons/FooterIcon/vector.svg";
const Hotel = ({image,title}) => {
  return <div className="flex flex-col   ">
    <div className="flex  ">
        <p>{title}</p>
    </div>
    <div className="relative">
        <Image src={image} alt="" width="180px" height="209px" priority={true} />
        <div className="absolute bottom-[-20px] right-[30px]">
    <Image src={Vector} alt="" priority={true}   />   
    </div>
    </div>
    
  </div>;
};

export default Hotel;
