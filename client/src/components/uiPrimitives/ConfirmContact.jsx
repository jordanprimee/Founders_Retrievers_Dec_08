//////////////////////LOST/////////////////////////
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
////JWT///////
import { UseUser } from "../../hooks/useContext/UserContext";

import {
  Cancel,
  AlertRed,
  Copy,
  Location,
  Phone,
} from "../../assets/icons/IconsSVGConst";
import Modal from "react-modal";
import { useModal } from "../../hooks/useContext/ModalContext";
import { useCookies } from 'react-cookie';
import { useParams } from "react-router-dom";
import Pay from "../PaymentTwo/Pay"



import { DeliveryAlertFound } from "../DeliveryAlertFound";
Modal.setAppElement(document.getElementById("root"));

export const ConfirmContact = ({ isOpen, onRequestClose }) => {
  const { modalIsOpen, openModal } = useModal();

  const [deliveryAlertIsOpen, setDeliveryAlertIsOpen] = useState(false);
  const [paymentIsOpen, setPaymentIsOpen] = useState(false);
  const [userInfo, setUserInfo] = useState([]);

  const openDeliveryAlert = () => {
    setDeliveryAlertIsOpen(true);
  };
  const closeModal = () => {
    setDeliveryAlertIsOpen(false);
    setPaymentIsOpen(false);

  };
  const openPayment = () => {
    setPaymentIsOpen(true);
  };

  // Input border style
  const inputBorderStyle = {
    background: "transparent",
    border: "none",
    borderBottom: "1px solid #CDCDCD84",
    placeholder: "#CDCDCD84",
    color: "white",
  };
 
  const [error, setError] = useState("");

  ////////////// JWT÷÷ GET and UPDATE user Data///////
  const [editedUsername, setEditedUsername] = useState("");
  const [editedCity, setEditedCity] = useState("");
  const [editedPhoneNumber, setEditedPhoneNumber] = useState("");
  const [userId, setUserId] = useState("");
  const { user } = UseUser();
  
  const {id_user} = useParams();
  const [cookies] = useCookies(['userToken']);

  useEffect(() => {
      const fetchUserData = async () => {
        try {
          if (user) {
            const token = cookies.userToken || null;
            axios.defaults.headers.common['authorization'] = `${token}`;
            const response = await axios.get(`http://localhost:3000/profile`);
  
            setUserData(response.data[0]);
            setUserId(userData.id_user)
            console.log('userid',userData.id_user)
            console.log('userdata',response.data);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };
  
      fetchUserData();
    }, [user, id_user]);
  
    const [userData, setUserData] = useState({
      user_id: "",
      username: "",
      country: "",
      city: "",
      email: "",
      phonenumber: "",
      password: "",
    });
  
    const [formData, setFormData] = useState({
      //userinfo//
      userIdFounderOROwner: {userId}, 
      username: "",
      city: "",
      phonenumber: "",
      imageurl: null,
      //iteminfo//
      itemId:'',

    });
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setFormData((prevData) => ({
        ...prevData,
        image: file,
      }));
    };


    useEffect(()=>{
      if(userData){
        setFormData({
          username: userData.username || '',
          email: userData.email || '',
          phonenumber: userData.phonenumber || '',
          city: userData.city || '',
          password: userData.password || '',
        })
      }
      }, [userData])
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
  const handleUpdateInfo = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      // Append the updated user data
      formData.append("userId", userData.id_user);
      formData.append("username", editedUsername || userData.username);
      formData.append("city", editedCity || userData.city);
      formData.append("phonenumber", editedPhoneNumber || userData.phonenumber);

      // Append the updated image if available

      // Make a request to update the user data
      const response = await axios.post(
        `http://localhost:3000/contactform`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "multipart/form-data", // Set content type to multipart/form-data
          },
        }
      );

      // Handle the response from the server
      console.log("Update successful", response.data);

      // Optionally, you can update the state with the new data
      setUserData({
        ...userData,
        username: editedUsername || userData.username,
        city: editedCity || userData.city,
        phonenumber: editedPhoneNumber || userData.phonenumber,
      });

      // Clear the edited image state
      // setEditedImage(null);
    } catch (error) {
      console.error("Error updating profile", error);
      // Handle errors here
    }
  };

  // Post-Send contact data
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // End point
  //   axios
  //     .post("http://localhost:3000/users", formData)
  //     .then((response) => {
  //       // Navigate to profile page or feedpage
  //       // navigate("/");
  //       // alert successful submission
  //       // window.location.href = '/card/:id';
  //       setFormData({
  //         username: "",
  //         city: "",
  //         phonenumber: "",
  //       });
  //       openModal();
  //     })
  //     .catch((error) => {
  //       setError("Something went wrong");
  //     });
  // };
  //////////////NEWWW//////////
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object and append form fields
    // for (const key in formData) {
    //   // Skip appending imageurl to FormData here
    //   if (key !== "imageurl") {
    //     formDataToSend.append(key, formData[key]);
    //   }
    // }
    try {
      const formDataToSend = new FormData();
      // formDataToSend.append("userId", formData.id_user);
      formDataToSend.append("username", formData.username);
      formDataToSend.append("city",  formData.city);
      formDataToSend.append("phonenumber", formData.phonenumber);
      ///IMAGE////
      formDataToSend.append("image", formData.image);
    // try {
    //   // Append imageurl separately if it exists
    //   // if (formData.imageurl) {
    //     const formDataToSend = {
    //       username: formData.username,
    //       phonenumber: formData.phonenumber,
    //       city: formData.city,
    //       imageurl:formData.image,
    //     };
        // formDataToSend.append(
        //   "image",
        //   formData.image,
        // );
      //   formDataToSend.append("userId", userData.id_user);
      // formDataToSend.append("username", editedUsername || userData.username);
      // formDataToSend.append("city", editedCity || userData.city);
      // formDataToSend.append("phonenumber", editedPhoneNumber || userData.phonenumber);
      // }

      // End point
      const response = await axios.post(
        "http://localhost:3000/upload_id2",
        formDataToSend
      );

      // Navigate or handle success as needed
      setPaymentIsOpen(true);
      console.log("Form data sent successfully:", formDataToSend);
      // navigate("/");
    } catch (error) {
      setError("Something went wrong");
    }
  };

  // Handle input change
  
  const modalStyle = {
    overlay: {
      backgroundColor: "#ffffff10", // Set the overlay background color with transparency
      zIndex: 5, // Set the z-index for the overlay
    },
  };
  return (
    <>
      <Modal
        isOpen={isOpen}
        style={modalStyle}
        onRequestClose={onRequestClose}
        className="m-auto flex flex-col align-center mt-40 justify-center gap-8 p-20 bg-[#373737] rounded-[1rem] w-[44rem] h-[30rem] "
      >
        <button onClick={onRequestClose} className="flex justify-end">
          <Cancel />
        </button>
        <div className="self-center">
          <AlertRed /> {userData.username}
        </div>
        <div className="text-[1rem] font-light text-[#fff] text-wrap text-center">
          {" "}
          Confirm my Contact Details{" "}
          <span className="block text-[#ffffff95]"></span>{" "}
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 self-center col-span-3 text-[0.85rem] mb-1 justify-self-center place-items-center text-[#CDCDCD85]"
        >
          <label htmlFor=""></label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={inputBorderStyle}
          >
            {/* Caroline */}
          </input>
          <label
            htmlFor=""
            className="flex items-center gap-4 text-[#ffffff95] hover:text-[#ffffff95]"
          >
            <Location />

            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              style={inputBorderStyle}
              className="flex gap-4 items-center text-[#ffffff95] hover:text-[#ffffff95]  "
            >
              {/*  Amman */}
            </input>
          </label>
          <label
            htmlFor="phonenumber"
            className="flex items-center gap-4 text-[#ffffff95] hover:text-[#ffffff95]"
          >
            <Phone />
            <input
              type="text"
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleChange}
              style={inputBorderStyle}
              className="border-2 border-gray-300 rounded px-2 py-1"
            />
          </label>
          <label htmlFor="">insert you id pic </label>
          <input
            type="file"
            // id="profileImageInput"
            // accept="image/*"
            // className=""
            // value={formData.imageurl}
            onChange={handleFileChange}
          />{" "}
          {/* {" "}
             +962 70 0000 0000 <Copy />{" "} */}
          <button
            type="submit"
            className="mt-8 self-center text-center w-52 px-3 pb-2 text-[#fff] bg-transparent border border-1 border-[#fff] font-light focus:outline-none hover:bg-[#ffffff] hover:text-[#373737]  rounded-lg text-[1rem] px-5 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            // onClick={openDeliveryAlert}
            onClick={openPayment}
          >
            Submit Contact Form
          </button>
          <DeliveryAlertFound
            isOpen={deliveryAlertIsOpen}
            onRequestClose={closeModal}
          />
        </form>
        {paymentIsOpen && 
        (<Pay
        isOpen={paymentIsOpen}
        onRequestClose={closeModal} />)
}
      

        {/* Have a nice day ! */}
      </Modal>
    </>
  );
};
