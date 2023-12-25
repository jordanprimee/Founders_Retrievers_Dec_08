import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Cancel,
  AlertRed,
  Copy,
  Phone,
} from "../../assets/icons/IconsSVGConst";

import Modal from "react-modal";
import { useModal } from "../../hooks/useContext/ModalContext";
import { FailedToUpload } from "../responseModals/FailedToUpload";
import { SuccessPublishFound } from "../responseModals/SuccessPublishFound";

Modal.setAppElement(document.getElementById("root"));

export const DeliveryAlertFound = ({ isOpen, onRequestClose }) => {
  const [successfullyUploadedIsOpen, setSuccessfullyUploadedIsOpen] =
    useState(false);
  const [failedToUploadIsOpen, setFailedToUploadIsOpen] = useState(false);

  const openSuccessfullyUploaded = () => {
    setSuccessfullyUploadedIsOpen(true);
  };
  const openFailedToUpload = () => {
    setFailedToUploadIsOpen(true);
  };
  const closeModal = () => {
    setSuccessfullyUploadedIsOpen(false);
  };

  const modalStyle = {
    overlay: {
      backgroundColor: "#ffffff10", // Set the overlay background color with transparency
      zIndex: 6002, // Set the z-index for the overlay
    },
  };
  return (
    <>
      {successfullyUploadedIsOpen && (
        <SuccessPublishFound
          isOpen={openSuccessfullyUploaded}
          onRequestClose={closeModal}
        />
      )}
      {failedToUploadIsOpen && (
        <FailedToUpload
          isOpen={openFailedToUpload}
          onRequestClose={closeModal}
        />
      )}
      <Modal
        isOpen={isOpen}
        style={modalStyle}
        onRequestClose={onRequestClose}
        className="m-auto flex flex-col align-center mt-40 justify-center gap-8 p-20 bg-[#373737] rounded-[1rem] w-[44rem] h-[26rem] absolute  bottom-1/2 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:scale-100 sm:scale-75 md:scale-75 scale-[0.45]"
      >
        <button onClick={onRequestClose} className="flex justify-end">
          <Cancel />
        </button>
        <div className="self-center relative">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E83434] opacity-75"></span>{" "}
          <AlertRed />{" "}
        </div>
        <div className="text-[1rem] font-light text-[#fff] text-wrap text-center">
          {" "}
          Kindly note that in the next 72hrs, our delivery firm will contact you
          to get the belonging you found.{" "}
          <span className="block text-[#ffffff95]"></span>{" "}
        </div>

        <button
          type="submit"
          className="mt-8 self-center text-center w-48 px-3 pb-2 text-[#fff] bg-transparent border border-1 border-[#fff] font-light focus:outline-none hover:bg-[#ffffff] hover:text-[#373737]  rounded-lg text-[1rem] px-5 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          onClick={openSuccessfullyUploaded}
        >
          Confirm Delivery
        </button>
        <div className="self-center col-span-3 text-[0.85rem] mb-1 justify-self-center place-items-center text-[#CDCDCD85]">
          Contact the delivery company{" "}
          <Link
            to="/signin"
            className="flex gap-4 items-center text-[#ffffff95] hover:text-[#ffffff95]  "
          >
            {" "}
            <Phone /> +962 70 0000 0000 <Copy />{" "}
          </Link>
        </div>

        {/* Have a nice day ! */}
      </Modal>
    </>
  );
};
