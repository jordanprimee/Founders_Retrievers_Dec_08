import React from "react";
import WorldMap from "../assets/clips/WorldMap.png";
import heroNow from "../assets/clips/heroNow.png";
import MapPng from "../assets/clips/MapPng.png";
import MapFinal from "../assets/clips/MapFinal.svg";
import Lines from "../assets/clips/Lines.svg";
import Group from "../assets/clips/main/Group.svg";
import { Link } from "react-router-dom";
import { UseUser } from "../hooks/useContext/UserContext";
import '../components/heroAnimation/sectry.css'

import LostParrotSVG from "../assets/clips/imagessvg/LostParrotSVG.svg";
import LostGuinea from "../assets/clips/imagessvg/LostGuinea.svg";
import LostToy from "../assets/clips/imagessvg/LostToy.svg";
import LostPurse from "../assets/clips/imagessvg/LostPurse.svg";
import LostCat from "../assets/clips/imagessvg/LostCat.svg";
import LostCam from "../assets/clips/imagessvg/LostCam.svg";
import LostKeys from "../assets/clips/imagessvg/LostKeys.svg";
import LostDog from "../assets/clips/imagessvg/LostDog.svg";
import LostGlasses from "../assets/clips/imagessvg/LostGlasses.svg";
import LostJewelry from "../assets/clips/imagessvg/LostJewelry.svg";
import LostWatch from "../assets/clips/imagessvg/LostWatch.svg";
import { MapHerSec } from "./MapHerSec";



export const HomeHero = () => {
  const { user } = UseUser();
  return (
    <>
      <div
        id="hero-section"
        className="scale-75 lg:scale-100 flex lg:flex-row md:flex-row sm:flex-wrap flex-wrap justify-around lg:mt-20 lg:mx-20	md:mt-20 md:mx-20 sm:mt-4 sm:mx-0 mt-0 mx-0	mb-0 p-0		"
      >
        <div className="flex flex-col justify-center items-center text-center">
          <p className="font-bold	lg:text-4xl md:text-4xl sm:text-3xl text-2xl mb-5">
            Founders Retrievers{" "}
          </p>
          <p className="max-w-[35rem]">
            Founders Retrievers is your all in one place lost and found items.
            Together we can link all lost items to their rightful owner !{" "}
          </p>
          {user ? (
            <Link to="/feedpage">
              {" "}
              <button className="mt-6 px-3 pb-2 text-[#E83434] w-fit bg-transparent border border-2 border-[#E83434] hover:bg-[#E83434] hover:text-[#FFFFFF] text-xs font-semibold rounded-[0.65rem] text-xs px-5 py-2 ">
                EXPLORE BELONGINGS
              </button>
            </Link>
          ) : (
            <ul className="flex flex-row justify-center lg:pt-2 lg:mt-4 md:pt-2 md:mt-4 mb-12">
              <li className=" mb-2 mt-6 mx-2">
                <Link
                  to="/signin"
                  className=" px-3 pb-2 text-[#000000] bg-transparent hover:border hover:border-2 hover:border-[#E83434]  hover:text-[#E83434]  px-5 py-2 rounded-[0.65rem] text-xs font-semibold"
                >
                  <button>SIGN IN</button>
                </Link>
              </li>
              <li className=" mb-2 mt-6">
                <Link
                  to="/signup"
                  className="px-3 pb-2 text-[#E83434] bg-transparent border border-2 border-[#E83434]  focus:outline-none hover:bg-[#E83434] hover:text-[#FFFFFF] text-xs font-semibold rounded-[0.65rem] text-xs px-5 py-2  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  {" "}
                  <button className="transition duration-150 ease-out hover:ease-in ">SIGN UP</button>{" "}
                </Link>
              </li>
            </ul>
          )}
        </div>
        <div className="lg:scale-100 md:scale-95 sm:scale-90 scale-90 lg:hidden md:block sm:block block md:px-3 md:pb-2 md:mt-12 md:h-[30rem] mt-6 h-[20rem] justify-self-start ">
          <img src={heroNow} alt="" />
        </div>
        <div className="md:hidden sm:hidden hidden lg:block md:mt-24 lg:scale-100 md:scale-95 sm:scale-75 scale-75"><MapHerSec /></div>
       
      </div>
    </>
  );
};
