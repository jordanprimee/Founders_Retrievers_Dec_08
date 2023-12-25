import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
/////////////JWT///////////////
import { UseUser } from "../../hooks/useContext/UserContext";
import { useCookies } from "react-cookie";

import Modal from "react-modal";
import { Cancel, Happy } from "../../assets/icons/IconsSVGConst";
Modal.setAppElement(document.getElementById("root"));

export const SuccessfullySignedIn = ({ isOpen, onRequestClose }) => {
  const modalStyle = {
    overlay: {
      backgroundColor: "#ffffff05", // Set the overlay background color with transparency
      zIndex: 5, // Set the z-index for the overlay
    },
  };

  const [userData, setUserData] = useState({
    user_id: "",
    username: "",
    country: "",
    city: "",
    email: "",
    phonenumber: "",
    password: "",
  });

  const { user } = UseUser();
  const [cookies] = useCookies(["userToken"]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (user) {
          const token = cookies.userToken || null;
          axios.defaults.headers.common["authorization"] = `${token}`;
          const response = await axios.get(`http://localhost:3000/profile`);
          // console.log(response.data)
          setUserData(response.data[0]);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, [user, cookies]);

  return (
    <>
      <Modal
        className="flex flex-col align-center justify-center gap-4 p-8 bg-[#373737] rounded-[1rem] w-[34rem] h-[24rem] absolute  bottom-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:scale-100 sm:scale-75 md:scale-75 scale-[0.45]"
        isOpen={isOpen}
        style={modalStyle}
        onRequestClose={onRequestClose}
        contentLabel="Not signed in Modal"
      >
        <button onClick={onRequestClose} className="flex justify-end">
          <Cancel size={12} color="#CDCDCD" />
        </button>
        <div className="self-center">
          <Happy color="#18E074" />
        </div>
        <div className="text-[1.5rem] font-light text-[#ffffff95] text-wrap text-center">
          Welcome back{" "}
          <span className="text-[1.75rem] font-semibold text-[#fff] text-wrap text-center">
            {userData.username}
          </span>{" "}
          !!
        </div>
        <div className="text-start flex flex-col justify-center items-center text-[1rem] font-light text-[#ffffff95] text-wrap">
          <span className="mt-4 mb-4">where to today !! </span>
          <div className="flex flex-col mb-4">
            {/* <div className="pl-24 self-start border-r border-dotted border-[#ffffff85] h-24"></div> */}
            <ul className="flex flex-row">
              <Link to="/">
                <li className="text-sm text-[#FBE62E] border-l-[0.08rem] border-[#FBE62E] pl-2 p-2">
                  HOME PAGE
                </li>
              </Link>
              <Link to="/feedpage">
                <li className="text-sm hover:text-[#FBE62E] hover:border-l-[0.08rem] border-[#FBE62E] pl-2 p-2">
                  FEED PAGE
                </li>
              </Link>
              <Link to="/profilepage">
                <li className="text-sm hover:text-[#FBE62E] hover:border-l-[0.08rem] border-[#FBE62E] pl-2 p-2">
                  MY PROFILE
                </li>
              </Link>
            </ul>
          </div>
        </div>

        {/* <button onClick={onRequestClose} className="self-center" >
             <Link to='/profilepage ' 
            className="mt-8 self-center text-center w-52 px-3 pb-2 text-[#fff] bg-transparent border border-1 border-[#fff] font-light focus:outline-none hover:bg-[#ffffff] hover:text-[#373737]  rounded-lg text-[1rem] px-5 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Go to my profile
          
          </Link></button>

          <div className="text-center self-center col-span-3 text-[0.75rem] mb-1 justify-self-center place-items-center text-[#CDCDCD55]">
          or Go to {" "}
          <button onClick={onRequestClose} className="self-center"><Link
            to="/signin"
            onClick={onRequestClose}
            className="hover:text-[#ffffff95]  underline decoration-solid"
          >
           Feed Page
          </Link> instead !</button>
        </div> */}
      </Modal>
    </>
  );
};
