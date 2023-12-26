import React from "react";
import Connection from "../assets/clips/Connection.png";
import { NotFoundFace } from "../assets/icons/NotFoundFace";
import  NotFoundMap  from '../assets/clips/NotFoundMap.png'
import { Link } from "react-router-dom";

export const NotFound = () => {
  // // Background style
  // const BgTexture = {
  //     backgroundImage: `url(${Connection})`,
  //     backgroundSize: "cover",
  // };
  return (
    <>
      <div
        //   style={BgTexture}
        className="flex flex-col place-content-center mx-80 my-28  mb-80 "
      >
        <div className="relative text-[11rem] font-bold text-end text-[#e83434]">
          404
        </div>
        <div className=" absolute right-[19rem] top-[21rem] bg-[#f6f6f6] text-[#373737]">
          it's ok to get lost as long as you know your way back
        </div>
        <img
          src={`${NotFoundMap}`}
          alt=""
          className="absolute left-[25rem] top-[12rem] h-[18rem] w-[27rem]"
        />
        <div className="absolute top-[21rem] right-[20.6rem]">
          <div className="text-[10rem] text-end">Not Found</div>
          <div className="text-start flex flex-row gap-4">
            Rest assure it is just a page that is not built  <NotFoundFace /> 
          </div>
          <Link to="/">
              {" "}
              <button className="animate-bounce mt-6 px-3 pb-2 text-[#E83434] w-fit bg-transparent border border-2 border-[#E83434] hover:bg-[#E83434] hover:text-[#FFFFFF] text-xs font-semibold rounded-[0.65rem] text-xs px-5 py-2 ">
                Go to Home page 
              </button>
            </Link>
        </div>
       
      </div>
    </>
  );
};
