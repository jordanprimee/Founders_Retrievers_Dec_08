import React from "react";
import { Link } from "react-router-dom";


export const SideBar = () => {
  return (
    <>
    {/* SIDEBAR */}

      {/* <div className="absolute left-0 top-0 mt-16 p-16 bg-[#86868673] w-[20rem] h-[50rem] rounded-r-[1.25rem] flex flex-col gap-4"> */}
      <div className="mt-16 p-16 bg-[#86868673] w-[20rem] h-[50rem] rounded-r-[1.25rem] flex flex-col gap-4">
        <ul className="sticky flex flex-col">
          {" "}
          Lists
          <hr className=" w-[12rem] border-[#868686] border-dashed  sm:mx-auto dark:border-gray-700 " />
          <li className="ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center border-dotted border-white">
            Over View
          </li>
          <li className="ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center border-dotted border-white">
            Users
          </li>
          <li className="ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center border-dotted border-white">
            Partners
          </li>
          <li className="ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center border-dotted border-white">
            All Losts
          </li>
          <li className="ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center">
            All Founds{" "}
          </li>
          <li className="ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center">
            All Retrieved
          </li>
          {/* <li className="ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center">
            Requests{" "}
          </li> */}
          <li className="ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center">
            Delivery Forms{" "}
          </li>
          {/* <li className="ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center">
            Comments
          </li> */}
          <li className="ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center">
            Reached Out
          </li>
          {/* <li className="ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center">
            Donate
          </li> */}
          {/* <li className='text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center'>All posts from website</li> */}
          {/* <li className='ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center'>All posts from website</li> */}
          <li className=" mb-2 mt-6 mx-2">
            <Link to="">
              {" "}
              <button className=" px-3 pb-2 text-[#E83434] bg-transparent border border-2 border-[#E83434]  focus:outline-none hover:bg-[#E83434] hover:text-[#FFFFFF] text-xs font-semibold rounded-[0.65rem] text-xs px-5 py-2  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 whitespace-nowrap ">
                LOG OUT{" "}
              </button>
            </Link>
          </li>
        </ul>
      </div>

      {/* TABLES */}

    </>
  );
};
