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
  Alert,
  Profile,
} from "../../assets/icons/IconsSVGConst";
import Modal from "react-modal";
import { useModal } from "../../hooks/useContext/ModalContext";
import { useCookies } from 'react-cookie';
import { useParams } from "react-router-dom";
import Pay from "../PaymentTwo/Pay"



import { DeliveryAlertFound } from "../uiPrimitives/DeliveryAlertFound";
import { FailedToUpload } from "../responseModals/FailedToUpload";
import { DeliveryAlertLost } from "./DeliveryAlertLost";
Modal.setAppElement(document.getElementById("root"));

export const ConfirmContactLost = ({ isOpen, onRequestClose }) => {
 
  const [deliveryAlertIsOpen, setDeliveryAlertIsOpen] =
    useState(false);
  const [failedToUploadIsOpen, setFailedToUploadIsOpen] = useState(false);

  const openDeliveryAlert = () => {
    setDeliveryAlertIsOpen(true);
  };
  const openFailedToUpload = () => {
    setFailedToUploadIsOpen(true);
  };
  const closeModal = () => {
    setDeliveryAlertIsOpen(false);
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
      // setPaymentIsOpen(true);
      console.log("Form data sent successfully:", formDataToSend);
      // navigate("/");
      if (response.status === 200) {
        setDeliveryAlertIsOpen(true);
        // onRequestClose();

        console.log("Form submitted successfully!");
      } else {
        console.error("Failed to submit form.");
        setFailedToUploadIsOpen(true);
      }
      console.log("Form data sent successfully:", formDataToSend);
    } catch (error) {
      setError("Something went wrong");
      setFailedToUploadIsOpen(true);
    }
  };

  // Handle input change
  
  const modalStyle = {
    overlay: {
      backgroundColor: "#ffffff10", // Set the overlay background color with transparency
      zIndex: 6002, // Set the z-index for the overlay
    },
  };
  return (
    <>
     {deliveryAlertIsOpen && (
        <DeliveryAlertLost
          isOpen={openDeliveryAlert}
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
        className="m-auto flex flex-col align-center mt-40 justify-center  gap-8 p-20 bg-[#373737] rounded-[1rem] w-[44rem] h-[35rem] absolute  bottom-1/2 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:scale-100 sm:scale-75 md:scale-75 scale-[0.45]"
      >
        <button onClick={onRequestClose} className="flex justify-end pt-16">
          <Cancel size={12} color="#CDCDCD" />
        </button>
        <div className="self-center">
          <Alert size={38} color="#E83434" />
        </div>
        <div className="text-[1.3rem] font-light text-[#fff] text-wrap text-center">
          {" "}
          Confirm my Contact Details{" "}
        </div>

        <form
          onSubmit={handleSubmit}
          className="self-center	 flex flex-col gap-4 justify-center col-span-3 text-[0.85rem] mb-1   text-[#CDCDCD85]"
        >
          <label
            htmlFor="username"
            className="flex items-center gap-2 justify-center"
          >
            <Profile size={19} color="#fff" />
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              style={inputBorderStyle}
              className="focus:outline-none  focus:rounded-md p-1 focus:ring-1 focus:ring-[#ffffff85] ml-2 text-[#CDCDCD85] font-light"
            >
              {/* Caroline */}
            </input>
          </label>
          <label
            htmlFor="city"
            className="flex items-center gap-2 justify-center"
          >
            <Location size={18} color="#fff" strokeWidth="0.5" />

            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              style={inputBorderStyle}
              className="focus:outline-none  focus:rounded-md p-1 focus:ring-1 focus:ring-[#ffffff85] ml-2 text-[#CDCDCD85] font-light"
            />
          </label>
          <label
            htmlFor="phonenumber"
            className="flex items-center gap-2 justify-center"
          >
            <Phone size={18} color="#fff" />
            <input
              type="text"
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleChange}
              style={inputBorderStyle}
              className="focus:outline-none  focus:rounded-md p-1 focus:ring-1 focus:ring-[#ffffff85] ml-2 text-[#CDCDCD85] font-light"
              placeholder="07 0000 0000"
            />
          </label>
          <label
            htmlFor="file"
            className="mt-8 justify-self-center	 text-[#ffffff] text-[1rem] font-light"
          >
            Insert your id pic{" "}
          </label>
          <input
            className=" justify-self-center relative m-0 text-[0.86rem] block w-60 min-w-0 flex-auto  rounded-md border border-solid border-[#ffffff85] bg-clip-padding px-3 py-[0.02rem] text-base font-normal text-[#CDCDCD50] transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-[#CDCDCD75] file:px-3 file:py-[0.32rem] file:text-[#373737] file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-[#fff] focus:text-[#CDCDCD95] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
            type="file"
            // id="profileImageInput"
            // accept="image/*"
            // className=""
            // value={formData.imageurl}
            onChange={handleFileChange}
            required
          />{" "}
          <button
            type="submit"
            className="mt-8 mb-16 self-center text-center w-fit px-3 pb-2 text-[#fff] bg-transparent border border-1 border-[#fff] font-light focus:outline-none hover:bg-[#ffffff] hover:text-[#373737]  rounded-lg text-[1rem] px-5 py-2  "
          >
            Confirm
          </button>
        </form>

        {/* Have a nice day ! */}
      </Modal>
    </>
  );
};
