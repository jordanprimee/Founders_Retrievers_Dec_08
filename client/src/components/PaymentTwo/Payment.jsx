// import React from 'react'
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements, ElementsConsumer } from '@stripe/react-stripe-js';
// import CheckoutForm from './CheckOutForm';
// import { useEffect } from 'react';

// const stripePromise = loadStripe('pk_test_51O8p6KLpnPUv1OPZiH9fjfimlr4wwdMQ8VFRYcMP1VL50KcB9oOopJtXLODw8giELvoPXwIDrpPQIYn3bdOAxMUS00mgbU21Pn');
// const Payment = () => {

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="product">
//     {/* <img
//       src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress"
//       alt="laptop"
//       style={{ width: "50px", height: "50px" }}
//     /> */}

//     <div>

//         <Elements stripe={stripePromise}>
//         <ElementsConsumer>

//       {({ stripe, elements }) => (
//         <CheckoutForm stripe={stripe} elements={elements} />
//       )}
//     </ElementsConsumer>
//       </Elements>

//     </div>
//   </div>
//   )
// }

// export default Payment

import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, ElementsConsumer } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckOutForm";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Modal from "react-modal";
import { useModal } from "../../hooks/useContext/ModalContext";

const stripePromise = loadStripe(
  "pk_test_51O8p6KLpnPUv1OPZiH9fjfimlr4wwdMQ8VFRYcMP1VL50KcB9oOopJtXLODw8giELvoPXwIDrpPQIYn3bdOAxMUS00mgbU21Pn"
);
const Payment = ({ isOpen, onRequestClose }) => {
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
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ stripe, elements }) => (
            <CheckoutForm stripe={stripe} elements={elements} />
          )}
        </ElementsConsumer>
      </Elements>
    </>
  );
};

export default Payment;
