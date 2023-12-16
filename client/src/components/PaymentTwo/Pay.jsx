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
      zIndex: 5, // Set the z-index for the overlay
    },
  };

  useEffect(() => {
    // console.log("location in payment page ");
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
       <Modal   isOpen={isOpen}
    style={modalStyle}
    onRequestClose={onRequestClose} 
    className="m-auto flex flex-col align-center mt-40 justify-center gap-8 p-20 bg-[#373737] rounded-[1rem] w-[44rem] h-[30rem] "
    >
<button onClick={onRequestClose} className="flex justify-end">
          <Cancel />
        </button>
        <Payment />
    </Modal>
    </>
  );
};

export default Pay;
