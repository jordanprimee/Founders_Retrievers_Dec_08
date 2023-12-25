import React, { useState } from "react";
import { Link } from "react-router-dom";

import Modal from "react-modal";
import { useModal } from "../../hooks/useContext/ModalContext";
import { Cancel } from "../../assets/icons/IconsSVGConst";
import { ConfirmContactFound } from "../uiPrimitives/ConfirmContactFound";
Modal.setAppElement(document.getElementById("root"));

export const SuccessPublishFound = ({ isOpen, onRequestClose }) => {
    const[openModal, closeModal] = useState(false);

  const modalStyle = {
    overlay: {
      backgroundColor: "#ffffff05", // Set the overlay background color with transparency
      zIndex: 5, // Set the z-index for the overlay
    },
  };
  return (
    <>
      <Modal
        className="absolute top-44 left-[30rem] flex flex-col align-center justify-center gap-8 p-12 bg-[#373737] rounded-[1rem] w-[34rem] h-[24rem] "
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
            <circle cx="20" cy="20" r="19.5" stroke="#18E074" />
            <path
              d="M11 21.5L15.0805 26.6933C15.8306 27.6481 17.2515 27.7196 18.0937 26.845L29.5 15"
              stroke="#18E074"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className="text-[2rem] font-light text-[#fff] text-wrap text-center">
          Successfully uploaded =)
        </div>

        <button
          onClick={openModal}
          className="self-center mt-8 self-center text-center w-52 px-3 pb-2 text-[#fff] bg-transparent border border-1 border-[#fff] font-light focus:outline-none hover:bg-[#ffffff] hover:text-[#373737]  rounded-lg text-[1rem] px-5 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Next
        </button>
        <ConfirmContactFound isOpen={openModal} onRequestClose={closeModal}/>
        
      </Modal>
    </>
  );
};
