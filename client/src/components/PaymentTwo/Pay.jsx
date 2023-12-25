import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, ElementsConsumer } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckOutForm";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Modal from "react-modal";
import { useModal } from "../../hooks/useContext/ModalContext";
import Payment from "./Payment";
import { Cancel } from "../../assets/icons/IconsSVGConst";

const stripePromise = loadStripe(
  "pk_test_51O8p6KLpnPUv1OPZiH9fjfimlr4wwdMQ8VFRYcMP1VL50KcB9oOopJtXLODw8giELvoPXwIDrpPQIYn3bdOAxMUS00mgbU21Pn"
);
const Pay = ({ isOpen, onRequestClose }) => {
  const location = useLocation();
  //   const { price } = location.state
  const modalStyle = {
    overlay: {
      backgroundColor: "#ffffff10", // Set the overlay background color with transparency
      zIndex: 6002, // Set the z-index for the overlay
    },
  };

  useEffect(() => {
    // console.log("location in payment page ");
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Modal
        isOpen={isOpen}
        style={modalStyle}
        onRequestClose={onRequestClose}
        className="m-auto flex flex-col align-center mt-40 justify-center gap-8 p-20 bg-[#373737] rounded-[1rem] w-[44rem] h-[33rem]  absolute bottom-1/2 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:scale-100 sm:scale-75 md:scale-75 scale-[0.45] "
      >
        <button onClick={onRequestClose} className="flex self-end pt-16">
          <Cancel size={12} color="#CDCDCD" />
        </button>
        <Payment />
        {/* <div>please wait till a success message pops up</div> */}
      </Modal>
    </>
  );
};

export default Pay;
