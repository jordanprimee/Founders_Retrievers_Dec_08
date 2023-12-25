import React from "react";
import { ConfirmContactFound } from "../components/uiPrimitives/ConfirmContactFound";

import { useModal } from "../../src/hooks/useContext/ModalContext";
import Modal from "react-modal";
import Pay from "../components/PaymentTwo/Pay";
import CheckoutForm from "../components/PaymentTwo/CheckOutForm";
import { SuccessPublishFound } from "../components/responseModals/SuccessPublishFound";
import { DeliveryAlertFound } from "../components/uiPrimitives/DeliveryAlertFound";
import { ConfirmContactLost } from "../components/uiPrimitives/ConfirmContactLost";
import { FailedToUpload } from "../components/responseModals/FailedToUpload";
import { FailedToUpdate } from "../components/responseModals/FailedToUpdate";
import { FailedToSignIn } from "../components/responseModals/FailedToSignIn";
import { FailedToDelete } from "../components/responseModals/FailedToDelete";
import { SuccessfullyDeleted } from "../components/responseModals/SuccessfullyDeleted";
import { SuccessfullySignedIn } from "../components/responseModals/SuccessfullySignedIn";
import { SuccessfullyUpdated } from "../components/responseModals/SuccessfullyUpdated";
import { SuccessfullyUploaded } from "../components/responseModals/SuccessfullyUploaded";
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
        <br />
        {/* <Pay isOpen={openModal} onRequestClose={closeModal}/> */}
        {/* <ConfirmContactFound isOpen={openModal} onRequestClose={closeModal} /> */}
        {/* <ConfirmContactLost isOpen={openModal} onRequestClose={closeModal} /> */}
        {/* <FailedToUpdate isOpen={openModal} onRequestClose={closeModal} /> */}
        {/* <FailedToDelete isOpen={openModal} onRequestClose={closeModal} /> */}
        {/* <FailedToUpload isOpen={openModal} onRequestClose={closeModal} /> */}
        {/* <SuccessfullyDeleted isOpen={openModal} onRequestClose={closeModal} /> */}
        {/* <SuccessfullySignedIn isOpen={openModal} onRequestClose={closeModal} /> */}
        {/* <SuccessfullyUpdated isOpen={openModal} onRequestClose={closeModal} /> */}
        <SuccessfullyUploaded isOpen={openModal} onRequestClose={closeModal} />
        {/* <FailedToSignIn isOpen={openModal} onRequestClose={closeModal} /> */}
        {/* <DeliveryAlertFound isOpen={openModal} onRequestClose={closeModal} /> */}
      </div>
    </>
  );
};
