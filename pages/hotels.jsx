import React from "react";
import Hotel1 from "../public/Assets/Images/Rectangle201.png"
import Hotel2 from "../public/Assets/Images/Rectangle202.png"
import Hotel3 from "../public/Assets/Images/Rectangle203.png"
import Hotel4 from "../public/Assets/Images/Rectangle204.png"
import Hotel5 from "../public/Assets/Images/Rectangle205.png"
import Hotel from "./hotel";

const Hotels = () => {
  return (
    <div className="flex flex-row flex-nowrap   gap-[6px] sm:gap-[20px] justify-start  ">
        <Hotel image={Hotel1} title="ASTERIA" titleSec="BODRUM RESORT"/>
        <Hotel image={Hotel2} title="ASTERIA" titleSec="KEMER RESORT" />
        <Hotel image={Hotel3} title="ASTERIA" titleSec="KREMLIN PALACE"  />
        <Hotel image={Hotel4} title="ASTERIA" titleSec="ZEUS DİDİM" />
        <Hotel image={Hotel5} title="ASTERIA" titleSec="VENUS DİDİM" />
       
    </div>
  )
};

export default Hotels;
