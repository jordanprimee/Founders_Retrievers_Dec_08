import React, { useState } from "react";
import { Link } from "react-router-dom";

import Modal from "react-modal";
import { Cancel } from "../../assets/icons/IconsSVGConst";
import { MineDeliveryAler } from "../uiPrimitives/MineDeliveryAler";
Modal.setAppElement(document.getElementById("root"));

export const SuccessfullyPaid = ({ isOpen, onRequestClose }) => {
  const modalStyle = {
    overlay: {
      backgroundColor: "#ffffff05", // Set the overlay background color with transparency
      zIndex: 6005, // Set the z-index for the overlay
    },
  };

  const [alertIsOpen, setAlertIsOpen] = useState(false);

  const openModal = () => {
    setAlertIsOpen(true);
  };
  const handleNextButtonClick = () => {
    // onRequestClose(); // Close the SuccessfullyPaid modal
    setAlertIsOpen(false); // Open the MineDeliveryAler modal
  };

  return (
    <>
      {alertIsOpen && (
        <MineDeliveryAler
          isOpen={openModal}
          onRequestClose={handleNextButtonClick}
        />
      )}
      <Modal
        className="flex flex-col align-center justify-center gap-8 p-12 bg-[#373737] rounded-[1rem] w-[34rem] h-[18rem] absolute  bottom-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:scale-100 sm:scale-75 md:scale-75 scale-[0.45]"
        isOpen={isOpen}
        style={modalStyle}
        onRequestClose={onRequestClose}
        contentLabel="Not signed in Modal"
      >
        {/* <button onClick={onRequestClose} className="flex justify-end">
          <Cancel size={12} color="#CDCDCD" />
        </button> */}
        <div className="animate-bounce  self-center">
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
        <div className="text-[2rem] mb-4 font-light text-[#fff] text-wrap text-center">
          Successfully Paid
        </div>

        <button
          onClick={openModal}
          className="mt-4 self-center text-center w-52 px-3 pb-2 text-[#fff] bg-transparent border border-1 border-[#fff] font-light focus:outline-none hover:bg-[#ffffff] hover:text-[#373737]  rounded-lg text-[1rem] px-5 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Next
        </button>
      </Modal>
    </>
  );
};
