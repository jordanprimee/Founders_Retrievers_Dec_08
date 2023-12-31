import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LogoTwoPng from "../assets/clips/LogoTwoPng.png";
import {
  Plus,
  LinkIcon,
  Minus,
  UserProfile,
  Profile,
  ProfileWhite,
  Posts,
} from "../assets/icons/IconsSVGConst";
import { PublishLost } from "./PublishLost";
import { NotSignedIn } from "../components/uiPrimitives/NotSignedIn";

import { useModal } from "../../src/hooks/useContext/ModalContext";
import Modal from "react-modal";
import { PublishFound } from "./PublishFound";
////JWT///////
import { UseUser } from "../hooks/useContext/UserContext";
Modal.setAppElement(document.getElementById("root"));

export const Navbar = () => {
  ////JWT///////
  const { user, logout } = UseUser();
  const { modalIsOpen, openModal } = useModal();

  const [isVisible, setIsVisible] = useState(false);

  const [foundModalIsOpen, setFoundModalIsOpen] = useState(false);
  const [lostModalIsOpen, setLostModalIsOpen] = useState(false);

  const openFoundModal = () => {
    setFoundModalIsOpen(true);
  };

  const openLostModal = () => {
    setLostModalIsOpen(true);
  };

  const closeModal = () => {
    setFoundModalIsOpen(false);
    setLostModalIsOpen(false);
  };

  const [isListOpen, setListOpen] = useState(false);

  const toggleList = () => {
    setListOpen(!isListOpen);
  };

  return (
    <>
      <div className="flex flex-row justify-around">
        <ul className="flex flex-row pt-8 px-4 lg:gap-x-4  md:gap-x-4  sm:gap-x-4  mt-4">
          {/* Manage if signed in  */}
          <li className=" ">
            <button className="whitespace-nowrap hidden sm:hidden lg:flex flex-row inline-block gap-x-2 px-[0.75rem] pb-2 text-[#18E074] bg-none border border-2 border-[#18E074]  focus:outline-none hover:bg-[#18E074] hover:text-[#FFFFFF] text-[0.7rem] font-semibold rounded-[0.65rem] text-xs px-5 py-2  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-[7rem]">
              {" "}
              <LinkIcon /> RETRIEVED
            </button>
          </li>
          <li className=" ">
            <button
              onClick={openFoundModal}
              className="whitespace-nowrap hidden md:flex sm:flex sm:scale-90 lg:scale-100 lg:flex flex-row inline-block gap-x-2 px-[0.75rem] pb-2 text-[#f1d900] bg-none border border-2 border-[#f1d900]  focus:outline-none hover:bg-[#FBE62E] hover:text-[#FFFFFF] text-[0.7rem] font-semibold rounded-[0.65rem] text-xs px-5 py-2  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              <Plus /> I’VE FOUND
            </button>
          </li>
          <li className=" ">
            <button
              onClick={openLostModal}
              className="whitespace-nowrap hidden md:flex sm:flex sm:scale-90 lg:scale-100 lg:flex flex-row inline-block gap-x-2 px-[0.75rem] pb-2 text-[#E83434] bg-none border border-2 border-[#E83434]  focus:outline-none hover:bg-[#E83434] hover:text-[#FFFFFF] text-[0.7rem] font-semibold rounded-[0.65rem] text-xs px-5 py-2  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              <Minus /> I’VE LOST
            </button>
          </li>
          <li>
            {" "}
            <button
              onClick={openFoundModal}
              className="sm:hidden scale-[0.8] flex bg-none border border-2 border-[#f1d900] rounded-[0.75rem] w-8 p-2 "
            >
              {" "}
              <Plus />
            </button>
          </li>
          <li>
            {" "}
            <button
              onClick={openLostModal}
              className="sm:hidden scale-[0.8] flex bg-none border border-2 border-[#E83434] rounded-[0.75rem] w-8 p-2 "
            >
              <Minus />
            </button>
          </li>
          {user ? (
            <PublishFound
              isOpen={foundModalIsOpen}
              onRequestClose={closeModal}
            />
          ) : (
            <NotSignedIn
              isOpen={foundModalIsOpen}
              onRequestClose={closeModal}
            />
          )}
          {user ? (
            <PublishLost isOpen={lostModalIsOpen} onRequestClose={closeModal} />
          ) : (
            <NotSignedIn isOpen={lostModalIsOpen} onRequestClose={closeModal} />
          )}
        </ul>
        <img
          src={LogoTwoPng}
          className="sm:scale-60 scale-[0.8] md:scale-60 lg:scale-100 px-3 pb-2  gap-x-4  lg:mt-6 lg:h-[4.25rem] mt-8 h-[3.75rem] justify-self-start	"
        />
        <ul className="flex flex-row pt-2 mt-4">
          <li className="lg:block hidden mb-2 mt-6 mx-2">
            <div className="w-[7rem] px-3 pb-2 text-transparent  bg-transparent focus:outline-none   px-5 py-2 rounded-[0.65rem] text-xs font-semibold"></div>
          </li>
          {user ? (
            <>
              <li className="lg:visible md:visible sm:hidden hidden mb-2 mt-6 mx-2">
                <div className="w-[7rem] px-3 pb-2 text-transparent  bg-transparent focus:outline-none   px-5 py-2 rounded-[0.65rem] text-xs font-semibold"></div>
              </li>

              <button
                onClick={toggleList}
                className={`lg:scale-100 md:scale-75 sm:scale-75 scale-50 lg:mr-12 mr-0 relative ${
                  isListOpen
                    ? "relative border border-spacing-8 dotted border-[#18E074] rounded-full p-2"
                    : ""
                }`}
              >
                <UserProfile />
              </button>

              {isListOpen && (
                <ul className="lg:scale-100 md:scale-75 sm:scale-75 scale-50 absolute pt-6 sm:top-[9%] sm:right-[10%] md:top lg:top-[15%] lg:right-[7%] -right-0 top-[%] bg-[#333333] w-[18rem] rounded-[1rem] p-4 flex flex-row gap-4 items-center justify-center">
                  <li>
                    <Link
                      to="/feedpage"
                      className="flex flex-row items-center  text-[#ffffff] font-extralight "
                    >
                      {" "}
                      <Posts />{" "}
                      <span className="hover:border-b-[0.01rem]">
                        Feed Page
                      </span>
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      to="/profilepage"
                      className="flex flex-row items-center text-[#ffffff] font-extralight "
                    >
                      <ProfileWhite />{" "}
                      <span className="hover:border-b-[0.01rem]">Profile</span>
                    </Link>
                  </li> */}
                  
                  <li className="">
                    <Link to="">
                      {" "}
                      <button
                        onClick={logout}
                        className="whitespace-nowrap   pb-2 text-[#E83434] bg-transparent border border-2 border-[#E83434]  focus:outline-none hover:bg-[#E83434] hover:text-[#FFFFFF] font-semibold rounded-[0.65rem] text-xs px-5 py-2  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 "
                      >
                        LOG OUT{" "}
                      </button>
                    </Link>
                  </li>
                </ul>
              )}
            </>
          ) : (
            <>
              <li className=" mb-2 mt-6 lg:mx-2 md:mx-2 sm:mx-2 mx-0">
                <button className="whitespace-nowrap hidden sm:block px-3 pb-2 text-[#000000] bg-transparent focus:outline-none  hover:border hover:border-2 hover:border-[#E83434]  hover:text-[#E83434]  px-5 py-2 rounded-[0.65rem] text-xs font-semibold">
                  <Link to="/signin">SIGN IN</Link>
                </button>
              </li>
              <li className=" mb-2 mt-6">
                <button className="whitespace-nowrap lg:scale-100 sm:scale-90 md:scale-90 scale-[0.75]  px-3 pb-2 text-[#E83434] bg-transparent border border-2 border-[#E83434]  focus:outline-none hover:bg-[#E83434] hover:text-[#FFFFFF] text-xs font-semibold rounded-[0.65rem] text-xs px-5 py-2  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                  <Link to="/signup">SIGN UP</Link>
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
};
