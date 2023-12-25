// import { ElementsConsumer, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import React from "react";
// import CardSection from "./CardSection";
// import axios from "axios";
// import Swal from 'sweetalert2';
// import 'sweetalert2/dist/sweetalert2.min.css';
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

// function CheckoutForm({stripe, elements}){
//   useEffect
//   (() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const navigate= useNavigate();
// //     const stripe = useStripe();

// //   const elements = useElements();

//   const handleSubmit = async event => {
//     event.preventDefault();

//     // const { stripe, elements } = props;
//     if (!stripe || !elements) {
//       return;
//     }

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//         type: "card",
//         card: elements.getElement(CardElement),
//       });

//     const card = elements.getElement(CardElement);
//     const result = await stripe.createToken(card);
//     if (result.error) {
//       console.log(result.error.message);
//     } else {
//       console.log(result.token);
//     }
// //handle amount
//     const { id } = paymentMethod;
//     const response = await axios.post("http://localhost:3000/payment", {
//       amount: 10 * 100,
//       id,
//     });

//     if (response.data.success) {
//       try {
//         // setSuccess(true);
//         console.log("goooood");
// } catch (error) {console.log(error);}
// };}

// const handleBuyClick=()=>{
//   Swal.fire({
//     icon: 'success',
//     title: 'Order Successful!',
//     text: 'Thank you for your order.',
//     timer: 2000,

//   });
//   setTimeout(() => {
//     navigate('/');
//   }, 1500);
// }
//     return (
//       <div className="grid grid-cols-2 mx-4 md:mx-20 gap-5 md:gap-40 mt-20 ">
// <div>
//   <h1 className="text-center  text-gray-600 font-bold md:text-2xl mb-2 "> Order Summary</h1>
// <div className="border-2 border-gray-300 shadow-md shadow-gray-300  rounded-lg mb-80 p-5 h-80">
//         <div class="product-info ">
//           <h3 className="product-title">Apple MacBook Pro</h3>
//           <h4 className="product-price">$999</h4>
//         </div>
//         </div>
//       </div>

//       <div>
//       <h1 className="text-center font-bold   text-gray-600 md:text-2xl mb-2">Checkout</h1>
//       <div className="border-2 border-gray-300 shadow-md shadow-gray-300 rounded-lg mb-80 p-5 px-10 h-80 ">

//       <div className="mt-4 p-4">
//   <div className="">
//     <div className="my-3">
//       <input
//         type="text"
//         className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
//         placeholder="Card holder"
//         maxLength={22}
//         x-model="cardholder"
//       />
//     </div>

//   </div>
// </div>

//         <form  onSubmit={handleSubmit}>
//           <CardSection/>
//           <div className="flex justify-center mt-7">
//           <button className="btn-pay bg-orange-400 text-white px-3 py-1 rounded-lg " onClick={handleBuyClick} >Buy Now</button>
//           </div>
//         </form>

// </div>

//       </div>

//       </div>
//     );

// }
// export default CheckoutForm

import {
  ElementsConsumer,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import CardSection from "./CardSection";
import axios from "axios";
import { SuccessfullyPaid } from "./SuccessfullyPaid";
import { FailedToPay } from "./FailedToPay";
function CheckoutForm({ stripe, elements }) {
  //     const stripe = useStripe();

  //   const elements = useElements();
  const [deliveryAlertIsOpen, setDeliveryAlertIsOpen] =
  useState(false);
const [failedToUploadIsOpen, setFailedToUploadIsOpen] = useState(false);

const openPayment = () => {
  setDeliveryAlertIsOpen(true);
};
const openFailedToUpload = () => {
  setFailedToUploadIsOpen(true);
};
const closeModal = () => {
  setDeliveryAlertIsOpen(false);
};

  const handleSubmit = async (event) => {
    event.preventDefault();

    // const { stripe, elements } = props;
    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);
    if (result.error) {
      console.log(result.error.message);
    } else {
      console.log(result.token);
    }
    //handle amount
    const { id } = paymentMethod;
    const response = await axios.post("http://localhost:3000/payment", {
      amount: 10 * 100,
      id,
    }
    );

    if (response.data.success) {
      try {
        // setSuccess(true);
        setDeliveryAlertIsOpen(true);

        console.log("goooood");
      } catch (error) {
        console.log(error);
      }
    }
  };

  //   render() {
  return (
    <>
     {deliveryAlertIsOpen && (
        <SuccessfullyPaid
        onRequestClose={closeModal} 
          isOpen={openPayment}
        />
      )}
       {failedToUploadIsOpen && (
        <FailedToPay
          isOpen={openFailedToUpload}
          onRequestClose={closeModal}
        />
      )}
    <div className="absolute bottom-1/2 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:scale-100 sm:scale-75 md:scale-75 scale-[0.45]">
      <div className="bg-[#373737] w-[35rem]  h-[25rem] rounded-[1.5rem] flex flex-col gap-12 p-12">
        <h3 className="text-[#fff] text-center font-light">
          Kindly Note that in order to get your belonging you have to pay a
          small fee of <span className="text-[#fbe62e]">5JD</span>
        </h3>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <CardSection />
          <button className="w-32 self-center px-3 pb-2 text-[#fff] bg-transparent border border-1 border-[#fff] font-light focus:outline-none hover:bg-[#ffffff] hover:text-[#373737] rounded-lg text-sm  py-2 mt-24 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            Buy Now
          </button>
        </form>

        <div className=" self-center text-[#fff] font-light  text-sm mb-8">please wait till a success message pops up</div>

      </div>
    </div>
    </>
  );
  //   }
}
export default CheckoutForm;
