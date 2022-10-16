import React from "react";
import Hotel1 from "../public/Assets/Images/Rectangle201.png"
import Hotel2 from "../public/Assets/Images/Rectangle202.png"
import Hotel3 from "../public/Assets/Images/Rectangle203.png"
import Hotel4 from "../public/Assets/Images/Rectangle204.png"
import Hotel5 from "../public/Assets/Images/Rectangle205.png"
import Hotel from "./hotel";

const Hotels = () => {
  return (
    <div className="flex flex-row gap-[25px] justify-start ">
        <Hotel image={Hotel1} title="ASTERIA BODRUM RESORT"/>
        <Hotel image={Hotel2} title="ASTERIA KEMER RESORT" />
        <Hotel image={Hotel3} title="ASTERIA KREMLIN PALACE" />
        <Hotel image={Hotel4} title="ASTERIA ZEUS DİDİM" />
        <Hotel image={Hotel5} title="ASTERIA VENUS DİDİM" />
    </div>
  )
};

export default Hotels;
