import React, { useEffect, useState } from "react";
import axios from "axios";
import { Cancel, MinusRed } from "../assets/icons/IconsSVGConst";

import Modal from "react-modal";
import { FailedToUpload } from "./responseModals/FailedToUpload";
import useUserData from "../hooks/useContext/UseUserData";
import { ConfirmContactLost } from "./uiPrimitives/ConfirmContactLost";

Modal.setAppElement(document.getElementById("root"));

export const PublishLost = ({ isOpen, onRequestClose }) => {
  const { userData } = useUserData();

  const [failedToUploadIsOpen, setFailedToUploadIsOpen] = useState(false);
  const [confirmContactIsOpen, setConfirmContactIsOpen] = useState(false);

  const openConfirmContact = () => {
    setConfirmContactIsOpen(true);
  };
  const openFailedToUpload = () => {
    setFailedToUploadIsOpen(true);
  };

  const closeModal = () => {
    setFailedToUploadIsOpen(false);
    setConfirmContactIsOpen(false);
  };

  const modalStyle = {
    overlay: {
      backgroundColor: "#ffffff50",
      zIndex: 1000,
    },
  };

  const inputBorderStyle = {
    background: "transparent",
    border: "none",
    borderBottom: "1px solid #CDCDCD84",
    placeholder: "#CDCDCD84",
    color: "white",
  };

  const [error, setError] = useState("");
  const [categories, setCategoriesData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/lost")
      .then((response) => {
        setCategoriesData(response.data);
      })
      .catch((error) => {
        setError("Can not get data", error);
      });
  }, []);

  // const [userId] = userData.id_user

  const [formData, setFormData] = useState({
    type: "lost",
    id_user: "${userData.id_use}", ///////////SEND user id///////////
    title: "",
    description: "",
    category: "",
    country: "",
    city: "",
    date_lost: "",
    imageurl: null,
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({ ...prevData, imageurl: file }));
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    try {
      const form = new FormData();
      form.append("title", formData.title);
      form.append("category", formData.category);
      form.append("country", formData.country);
      form.append("city", formData.city);
      form.append("date_lost", formData.date_lost);
      form.append("description", formData.description);
      form.append("image", formData.imageurl);

      const response = await axios.post(
        "http://localhost:3000/test-uploaded",
        form
      );

      if (response.status === 200) {
        onRequestClose();
        setConfirmContactIsOpen(true);
        console.log("Form submitted successfully!");
        console.log("ssss", formData);
      } else {
        console.error("Failed to submit form.");
        setFailedToUploadIsOpen(true);
      }
    } catch (error) {
      console.error("Error:", error);
      setFailedToUploadIsOpen(true);
    }
  };
  const [descError, setDescError] = useState("");

  const handleTextChange = (e) => {
    const inputValue = e.target.value;

    // Limit the input to 100 characters
    const limitedText = inputValue.slice(0, 50);

    // Update the state
    setFormData({
      ...formData,
      description: limitedText,
    });

    // Check if the input exceeds the character limit
    if (inputValue.length > 100) {
      setError("Exceeded the character limit (100 characters)");
    } else {
      setError("");
    }
  };

  return (
    <>
      {failedToUploadIsOpen && (
        <FailedToUpload
          isOpen={openFailedToUpload}
          onRequestClose={closeModal}
        />
      )}
      {confirmContactIsOpen && (
        <ConfirmContactLost
          isOpen={openConfirmContact}
          onRequestClose={closeModal}
        />
      )}

      <Modal
        className="  p-12 bg-[#373737] rounded-[1rem] w-[50rem] h-[42rem] absolute  bottom-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:scale-100 sm:scale-75 md:scale-75 scale-[0.45]"
        isOpen={isOpen}
        style={modalStyle}
        onRequestClose={onRequestClose}
      >
        <form
          onSubmit={handleUpload}
          className="flex flex-col align-start justify-start gap-4 "
        >
          <div className="flex flex-row justify-between	">
            <label className="w-32  flex flex-row align-center inline-block gap-x-2 px-[1rem] pb-2 text-[#E83434] bg-none border border-2 border-[#E83434] text-[0.7rem] font-semibold rounded-[0.65rem] text-xs px-5 py-2  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
              <MinusRed color="#E83434" />
              I’VE LOST
            </label>
            <button onClick={onRequestClose} className=" flex justify-end">
              <Cancel size={12} color="#CDCDCD" />
            </button>
          </div>
          <label className="self-start text-[0.85rem] mb-[0.01rem] justify-self-center place-items-center text-[#CDCDCD]">
            Please fill the following information regarding the belonging you
            Lost{" "}
          </label>

          <label></label>
          <input
            type="text"
            name="title"
            style={inputBorderStyle}
            value={formData.title}
            onChange={handleInputChange}
            placeholder="What did you find !!"
            className="placeholder-[#CDCDCD95] text-[0.9rem] focus:outline-none  focus:ring-1 focus:ring-[#ffffff85] font-light"
            required
          />

          <label className="self-start text-[0.85rem] mb-1 justify-self-center place-items-center text-[#CDCDCD55]">
            Under what category does it fall !
          </label>

          <select
            name="category"
            id=""
            className="w-36  p-1 text-[0.9rem] rounded-md focus:outline-none  focus:ring-1 focus:ring-[#ffffff85]  bg-transparent text-[#CDCDCD50]"
            onChange={handleInputChange}
            // required
          >
            <option value="" disabled selected className="bg-[#373737] ">
              All categories
            </option>
            {categories.map((item) => (
              <option
                key={item.id}
                value={item.category}
                className="bg-[#373737]"
              >
                {item.category}
              </option>
            ))}
          </select>

          <label className="self-start text-[0.9rem] mb-[0.01rem] justify-self-center place-items-center text-[#CDCDCD95]">
            Where and when did you lost it !
          </label>
          <label htmlFor="" className="flex flex-row gap-4">
            <select
              name="country"
              id=""
              className="w-28  p-1 text-[0.9rem] rounded-md focus:outline-none  focus:ring-1 focus:ring-[#ffffff85]  bg-transparent text-[#CDCDCD50]"
              onChange={handleInputChange}
              required
            >
              <option value="" disabled selected className="bg-[#373737] ">
                Country
              </option>
              <option value="Jordan" className="bg-[#373737]">
                Jordan
              </option>
            </select>
            <select
              name="city"
              id=""
              className="w-24  p-1 text-[0.9rem] rounded-md focus:outline-none  focus:ring-1 focus:ring-[#ffffff85]  bg-transparent text-[#CDCDCD50]"
              onChange={handleInputChange}
              required
            >
              <option value="" disabled selected className="bg-[#373737] ">
                City
              </option>
              <option value="Amman" className="bg-[#373737]">
                Amman
              </option>
              <option value="Zarqaa" className="bg-[#373737]">
                Zarqaa
              </option>
            </select>
            <input
              type="date"
              name="date_lost"
              value={formData.date_lost}
              onChange={handleInputChange}
              className="w-36  p-1 text-[0.9rem] rounded-md focus:outline-none  focus:ring-1 focus:ring-[#ffffff85]  bg-transparent text-[#CDCDCD50]"
              required
            />
          </label>

          <label className="self-start text-[0.9rem] mb-[0.01rem] justify-self-center place-items-center text-[#CDCDCD95]">
            Attach images of the item you lost
          </label>
          <input
            type="file"
            onChange={handleFileChange}
            className="relative m-0 text-[0.8rem] block w-full min-w-0 flex-auto rounded rounded-md border border-solid border-[#ffffff85] bg-clip-padding px-3 py-[0.02rem] text-base font-normal text-[#CDCDCD50] transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-[#CDCDCD75] file:px-3 file:py-[0.32rem] file:text-[#373737] file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-[#fff] focus:text-[#CDCDCD95] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
            // value={formData.image}
          />

          {/* max number of letters */}
          <label
            htmlFor=""
            className="self-start text-[0.9rem] mb-[0.01rem] justify-self-center place-items-center text-[#CDCDCD95]"
          >
            Write notes/ description to others
          </label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleTextChange}
            className="h-[7rem] rounded-[0.65rem] bg-[#CDCDCD95] text-[#373737] focus:outline-none  focus:ring-1 focus:ring-[#ffffff85]"
          />
          {descError && (
            <p className="text-red-500 text-sm mt-1">{descError}</p>
          )}

          <button
            type="submit"
            className="self-end text-center w-28 px-3 pb-2 text-[0.85rem]  text-[#fff] bg-transparent border border-1 border-[#fff] font-light focus:outline-none hover:bg-[#ffffff] hover:text-[#373737]  rounded-lg text-[0.9rem] px-5 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Publish
          </button>
        </form>
      </Modal>
    </>
  );
};
