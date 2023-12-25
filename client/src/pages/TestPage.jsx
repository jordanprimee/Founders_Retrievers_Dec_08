import React from "react";
import { ConfirmContactFound } from "../components/uiPrimitives/ConfirmContactFound";

import { useModal } from "../../src/hooks/useContext/ModalContext";
import Modal from "react-modal";
import Pay from "../components/PaymentTwo/Pay";
import CheckoutForm from "../components/PaymentTwo/CheckOutForm";
Modal.setAppElement(document.getElementById("root"));

export const TestPage = (isOpen, onRequestClose) => {
  const { modalIsOpen, openModal, closeModal } = useModal();

  //   const openModal = () => {
  //     setIsUserSignedIn(true);
  //   };

  //   const closeModal = () => {
  //     setFoundModalIsOpen(false);
  //     setLostModalIsOpen(false);
  //     setIsUserSignedIn(false);
  //   };

  return (
    <>
      <div className="flex flex-col gap-40">
      <br/>
      <Pay isOpen={openModal} onRequestClose={closeModal}/>
      {/* <ConfirmContactFound isOpen={openModal} onRequestClose={closeModal} /> */}

      </div>
    </>
  );
};
