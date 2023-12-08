import React from "react";
import { Link } from "react-router-dom";

import Modal from "react-modal";
import { Cancel } from "../../assets/icons/IconsSVGConst";
Modal.setAppElement(document.getElementById("root"));

export const FailedToSignIn = ({ isOpen, onRequestClose }) => {
  const modalStyle = {
    overlay: {
      backgroundColor: "#ffffff05", // Set the overlay background color with transparency
      zIndex: 5, // Set the z-index for the overlay
    },
  };
  return (
    <>
      <Modal
        className="absolute top-44 left-[30rem] flex flex-col align-center justify-center gap-8 p-8 bg-[#373737] rounded-[1rem] w-[34rem] h-[18rem] "
        isOpen={isOpen}
        style={modalStyle}
        onRequestClose={onRequestClose}
        contentLabel="Not signed in Modal"
      >
        <button onClick={onRequestClose} className="flex justify-end">
          <Cancel />
        </button>
        <div className="self-center">
        <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="19.5" stroke="#E83434" />
            <path
              d="M20 11V22"
              stroke="#E83434"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M20 27V29"
              stroke="#E83434"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="text-[1rem] font-light text-[#fff] text-wrap text-center">
        Failed to Sign In. Please try again.
        </div>

        {/* <button onClick={onRequestClose} className="self-center" >
             <Link to='/profilepage ' 
            className="mt-8 self-center text-center w-52 px-3 pb-2 text-[#fff] bg-transparent border border-1 border-[#fff] font-light focus:outline-none hover:bg-[#ffffff] hover:text-[#373737]  rounded-lg text-[1rem] px-5 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Go to my profile
          
          </Link></button>

          <div className="text-center self-center col-span-3 text-[0.75rem] mb-1 justify-self-center place-items-center text-[#CDCDCD55]">
          or Go to {" "}
          <button onClick={onRequestClose} className="self-center"><Link
            to="/signin"
            onClick={onRequestClose}
            className="hover:text-[#ffffff95]  underline decoration-solid"
          >
           Feed Page
          </Link> instead !</button>
        </div> */}
      </Modal>
    </>
  );
};
