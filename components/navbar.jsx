import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../public/Assets/Icons/NavbarIcon/logo.svg";
import Vector from "../public/Assets/Icons/NavbarIcon/Vector.svg";
import Vector2 from "../public/Assets/Icons/NavbarIcon/Vector.svg";
import { useRouter } from "next/router";
import { AiOutlineMenu } from "react-icons/ai";
import NavbarToggle from "./navbarToggle";
import { useTranslation } from 'next-i18next';

import Turkey from "../public/Assets/Images/turkey-flag-icon.png"
import Uk from "../public/Assets/Images/united-kingdom-flag-icon.png"

const Navbar = () => {
  const router = useRouter();
  const {locale,locales,defaultLocale} = router;
  console.log("locale",locale);
  console.log("locales",locales);
  console.log("default locale",defaultLocale);
  const [nav, setNav] = useState(false);
  const [language, setLanguage] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const handleLanguage = () => {
    setLanguage(!language);
  };
  const handleChange = (e) =>{
  const locale = e.target.value
  router.push("/","/",{locale})
  }
  const { t,i18n } = useTranslation();

  return (
    <div className="w-screen h-[120px] bg-[#ECFAFF] ">
      <div className="flex flex-row justify-evenly items-center ">
        <div className="">
          <Image src={Logo} alt="" />
        </div>
        <div className=" ">
          <div className="flex flex-row items-center ">
            <ul className=" flex-row gap-[35px] uppercase hidden lg:flex font-['Open_Sans'] font-light text-[14px] text-[#585858] leading-[18.9px]">
              <li className="flex items-center gap-[6px] font-['Rubik'] cursor-pointer font-light text-[13px] text-[#0D0D2D]  relative "onClick={handleLanguage}>
                {defaultLocale}
                <Image src={Vector} alt="" />
                {language && (<div className="flex flex-col items-center justify-center  absolute  top-[30px] left-[-10px] w-[70px] h-[100px] p-3  rounded-lg shadow-lg shadow-gray-400 hover:scale-105 ease-in duration-300 z-10 bg-[#f4f7f8]">
                    <button className="uppercase font-['Rubik'] font-light text-[13px] text-[#0D0D2D] mb-[6px] hover:font-bold" onClick={handleChange} value="en">
                    <Image src={Uk} width="15px" height="15px" alt=""/>
                      En
                    </button>
                    <button className="uppercase font-['Rubik'] font-light text-[13px] mb-[6px] text-[#0D0D2D] hover:font-bold " onClick={handleChange} value="tr">
                    <Image src={Turkey} width="15px" height="15px" alt=""  />
                      Tr
                    </button>
                  </div>
                )}
              </li>
              <li className="flex items-center gap-[6px] font-['Rubik'] font-light text-[13px] text-[#0D0D2D]">
              {t('navbar:list-one')}
                {/* Our Hotels */}
                <Image src={Vector2} alt="" />
              </li>
              <li className="">
                <Link href="/accommodation">
                  <a className={`${router.pathname === "/accommodation"
                        ? "text-[#0D0D2D] font-bold font-['Open_sans']"
                        : "text-[#585858]"
                    }`}
                  >{t('navbar:list-two')}
                    {/* Accommodation */}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/restaurants">
                  <a className={`${router.pathname === "/restaurants"
                        ? "text-[#0D0D2D] font-bold font-['Open_sans']"
                        : "text-[#585858]"
                    }`}
                  >{t('navbar:list-three')}
                    {/* Restaurants */}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/activities">
                  <a className={`${router.pathname === "/activities"
                        ? "text-[#0D0D2D] font-bold font-['Open_sans']"
                        : "text-[#585858]"
                    }`}
                  >{t('navbar:list-four')}
                    {/* actıvıtıes */}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/spawellness">
                  <a className={`${router.pathname === "/spawellness"
                        ? "text-[#0D0D2D] font-bold font-['Open_sans']"
                        : "text-[#585858]"
                    }`}
                  >{t('navbar:list-five')}
                    {/* spa&wellness */}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/conference">
                  <a className={`${router.pathname === "/conference"
                        ? "text-[#0D0D2D] font-bold font-['Open_sans']"
                        : "text-[#585858]"
                    }`}
                  >{t('navbar:list-six')}
                    {/* conference */}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/sport">
                  <a className={`${router.pathname === "/sport"
                        ? "text-[#0D0D2D] font-bold font-['Open_sans']"
                        : "text-[#585858]"
                    }`}
                  >{t('navbar:list-seven')}
                    {/* sport */}
                  </a>
                </Link>
              </li>
            </ul>
            <div className="lg:hidden flex cursor-pointer " onClick={handleNav}>
              <AiOutlineMenu size={20} />
            </div>
            <div className={ nav
                  ? "lg:hidden fixed left-0 top-0 w-full h-screen bg-black/60 z-10"
                  : ""
              }
            >
              <div className={ nav
                    ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#fff] p-10  ease-in duration-500 "
                    : "fixed left-[-100%] top-0 p-10  ease-in duration-500 "
                }
              >
                <NavbarToggle handleNav={handleNav} handleLanguage={handleLanguage} language={language} setNav={setNav}/> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

