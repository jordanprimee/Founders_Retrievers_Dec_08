import React from 'react'
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
import MapFinal from "../assets/clips/MapFinal.svg";
import Lines from "../assets/clips/Lines.svg";

export const MapHerSec = () => {
  return (
    <>
     <img
          src={MapFinal}
          data-te-animation-init
          data-te-animation-start="onScroll"
          data-te-animation-on-scroll="repeat"
          data-te-animation-show-on-load="true"
          data-te-animation="[slide-right_1s_ease-in-out]"
          className="relative lg:px-3 lg:pb-2 lg:mt-6 lg:h-[30rem] mt-6 h-[20rem] justify-self-start "
        />
        <img src={Lines} alt="" className="absolute top-8 right-20 lg:w-[42rem] lg:[h-7rem]" />
        {/* <img src={Group} alt="" className="image-wrapper absolute top-0 right-[3rem] lg:w-[47rem] lg:[h-8rem]" /> */}
        <img src={LostParrotSVG} alt="" className="image-wrapper absolute top-28 right-[22rem] w-32" />
        <img src={LostGuinea} alt="" className="image-wrapper absolute top-0 right-[20.9rem] h-20" />
        <img src={LostToy} alt="" className="image-wrapper absolute top-3 right-[29.9rem] h-20" />
        <img src={LostPurse} alt="" className="image-wrapper absolute top-20 right-[35.9rem] h-20" />
        <img src={LostCat} alt="" className="image-wrapper absolute top-24 right-[8.8rem] " />
        <img src={LostCam} alt="" className="image-wrapper absolute top-10 right-[7.8rem] w-8 " />
        <img src={LostKeys} alt="" className="image-wrapper absolute top-44 right-[2.8rem] h-20" />
        <img src={LostDog} alt="" className="image-wrapper absolute top-56 right-[10.8rem] w-16" />
        <img src={LostGlasses} alt="" className="image-wrapper absolute top-[19rem] right-[24.7rem] h-16" />
        <img src={LostJewelry} alt="" className="image-wrapper absolute top-[16.8rem] right-[39.5rem] h-20" />
        <img src={LostWatch} alt="" className="image-wrapper absolute top-[16rem] right-[46.2rem] h-16" />
        {/* <img src={LostPurse} alt="" className="image-wrapper absolute top-20 right-[35.9rem] h-20" /> */}
    </>
  )
}
