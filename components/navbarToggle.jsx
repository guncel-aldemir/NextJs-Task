import React from "react";
import Link from "next/link";
import Image from "next/image";
import Vector from "../public/Assets/Icons/NavbarIcon/Vector.svg";
import Vector2 from "../public/Assets/Icons/NavbarIcon/Vector.svg";
import {  AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";
import { useTranslation } from 'next-i18next';
const NavbarToggle = ({handleNav,handleLanguage,language}) => {
    const router = useRouter();
    const { t,i18n } = useTranslation();
  return (
    <div>
                  <div className="flex flex-col w-full justify-between">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer flex self-end" onClick={handleNav}
                    >
                      {" "}
                      <AiOutlineClose />
                    </div>
                    <div className="py-4 flex flex-col self-start ">
                      <ul className="font-light text-[14px] text-[#585858] leading-[18.9px]">
                        <li className="my-[20px] gap-3 flex items-center font-['Rubik'] font-light text-[13px] text-[#0D0D2D] relative uppercase cursor-pointer" onClick={handleLanguage}>
                          Tr
                          <Image src={Vector} alt="" />
                          {language && ( 
                          <div className="flex flex-col items-center justify-center  absolute  top-[30px] left-[-10px] w-[60px] h-[100px] p-3 rounded-lg shadow-lg shadow-gray-400 hover:scale-105 ease-in duration-300 z-10 bg-[#f4f7f8]">
                              <button className="uppercase font-['Rubik'] font-light text-[13px] text-[#0D0D2D] mb-[6px] hover:font-bold">
                                En
                              </button>
                              <button className="uppercase font-['Rubik'] font-light text-[13px] mb-[6px] text-[#0D0D2D] hover:font-bold ">
                                Tr
                              </button>
                          </div>
                          )}
                        </li>
                        <li className="my-[20px] gap-3 flex items-center font-['Rubik'] font-light text-[13px] text-[#0D0D2D] uppercase ">
                        {t('navbar:list-one')}
                          {/* Our Hotels */}
                          <Image src={Vector2} alt="" />
                        </li>
                        <li className="my-[20px] uppercase">
                          <Link href="/accommodation">
                            <a className={`${router.pathname === "/accommodation"
                                  ? "text-[#0D0D2D] font-bold font-['Open_sans'] "
                                  : "text-[#585858]"
                              }`}
                            > {t('navbar:list-two')}
                              {/* Accommodation */}
                            </a>
                          </Link>
                        </li>
                        <li className="my-[20px] uppercase">
                          <Link href="/restaurants">
                            <a className={`${router.pathname === "/restaurants"
                                  ? "text-[#0D0D2D] font-bold font-['Open_sans']"
                                  : "text-[#585858]"
                              }`}
                            > {t('navbar:list-three')}
                              {/* Restaurants */}
                            </a>
                          </Link>
                        </li>
                        <li className="my-[20px] uppercase">
                          <Link href="/activities">
                            <a className={`${router.pathname === "/activities"
                                  ? "text-[#0D0D2D] font-bold font-['Open_sans']"
                                  : "text-[#585858]"
                              }`}
                            > {t('navbar:list-four')}
                              {/* activities */}
                            </a>
                          </Link>
                        </li>
                        <li className="my-[20px] uppercase">
                          <Link href="/spawellness">
                            <a className={`${router.pathname === "/spawellness"
                                  ? "text-[#0D0D2D] font-bold font-['Open_sans']"
                                  : "text-[#585858]"
                              }`}
                            > {t('navbar:list-five')}
                              {/* spa&wellness */}
                            </a>
                          </Link>
                        </li>
                        <li className="my-[20px] uppercase">
                          <Link href="/conference">
                            <a className={`${router.pathname === "/conference"
                                  ? "text-[#0D0D2D] font-bold font-['Open_sans']"
                                  : "text-[#585858]"
                              }`}
                            > {t('navbar:list-six')}
                              {/* conference */}
                            </a>
                          </Link>
                        </li>
                        <li className="my-[20px] uppercase">
                          <Link href="/sport">
                            <a className={`${router.pathname === "/sport"
                                  ? "text-[#0D0D2D] font-bold font-['Open_sans']"
                                  : "text-[#585858]"
                              }`}
                            > {t('navbar:list-seven')}
                              {/* sport */}
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
  )
};

export default NavbarToggle;
