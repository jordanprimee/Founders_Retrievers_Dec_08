import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";
import {
  FoundCard,
  LostCard,
  RetrievedCard,
} from "../components/uiPrimitives/Cards";
import Pagination from "../components/profile/Pagination";
import { UseUser } from "../hooks/useContext/UserContext";
import { useModal } from "../../src/hooks/useContext/ModalContext";

Modal.setAppElement(document.getElementById("root"));

export const FeedPage = ({ isOpen, onRequestClose }) => {
  window.scrollTo({ top: 0, behavior: "smooth" });

  const [dataFromFirstAPI, setDataFromFirstAPI] = useState([]);
  const [dataFromSecondAPI, setDataFromSecondAPI] = useState([]);
  const [dataFromThirdAPI, setDataFromThirdAPI] = useState([]);
  const [dataFromFourthAPI, setDataFromFourthAPI] = useState([]);
  const [combinedData, setCombinedData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isUserSignedIn, setIsUserSignedIn] = useState(true);

  const { user } = UseUser();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const lostsResponse = await axios.get(`http://localhost:3000/lost`);
        setDataFromFirstAPI(lostsResponse.data);
        console.log("lost", dataFromFirstAPI);
        const foundsResponse = await axios.get(`http://localhost:3000/found`);
        setDataFromSecondAPI(foundsResponse.data);
        console.log("found", dataFromSecondAPI);
        const retrievedResponse = await axios.get(
          `http://localhost:3000/retreve`
        );
        setDataFromThirdAPI(retrievedResponse.data);
        console.log("retrieve1", dataFromThirdAPI);
        const retrievedResponseTwo = await axios.get(
          `http://localhost:3000/retreve2`
        );
        setDataFromFourthAPI(retrievedResponseTwo.data);
        console.log("retrieve2", dataFromFourthAPI);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const combined = [];

    for (
      let i = 0;
      i <
      Math.max(
        dataFromFirstAPI.length,
        dataFromSecondAPI.length,
        dataFromThirdAPI.length,
        dataFromFourthAPI.length
      );
      i++
    ) {
      if (dataFromFirstAPI[i]) {
        combined.push({ type: "lost", data: dataFromFirstAPI[i] });
      }

      if (dataFromSecondAPI[i]) {
        combined.push({ type: "found", data: dataFromSecondAPI[i] });
      }
      if (dataFromThirdAPI[i]) {
        combined.push({ type: "retrieve", data: dataFromThirdAPI[i] });
      }
      if (dataFromFourthAPI[i]) {
        combined.push({ type: "retrieve", data: dataFromFourthAPI[i] });
      }
    }

    setCombinedData(combined);
    setFilteredData(combined);
  }, [
    dataFromFirstAPI,
    dataFromSecondAPI,
    dataFromThirdAPI,
    dataFromFourthAPI,
  ]);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCity, setSelectedCity] = useState("All");
  const [selectedDay, setSelectedDay] = useState("All");
  const [selectedListItem, setSelectedListItem] = useState("All");


  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    // Filtering logic based on the selected category
    const filteredData = combinedData.filter(
      (item) => item.data.category === category
    );
    setFilteredData(filteredData);
  };

  const handleCityChange = (city) => {
    setSelectedCity(city);
    // Filtering logic based on the selected city
    const filteredData = combinedData.filter((item) => item.data.city === city);
    setFilteredData(filteredData);
  };

  const handleDayChange = (day) => {
    setSelectedDay(day);
    // Filtering logic based on the selected day
    const filteredData = combinedData.filter(
      (item) =>
        item.data.date_lost === day || item.data.date_found === day
    );
    setFilteredData(filteredData);
  };

  const filterData = (category, city, day) => {
    let tempFilteredData = combinedData;

    if (category !== "All") {
      tempFilteredData = tempFilteredData.filter(
        (item) => item.data.category === category
      );
    }

    if (city !== "All") {
      tempFilteredData = tempFilteredData.filter(
        (item) => item.data.city === city
      );
    }

    if (day !== "All") {
      tempFilteredData = tempFilteredData.filter(
        (item) => item.data.day === day
      );
    }

    setFilteredData(tempFilteredData);
  };

  const handleFilterClick = (type) => {
    let filteredData = combinedData;

    switch (type) {
      case "lost":
        filteredData = combinedData.filter((item) => item.type === "lost");
        break;
      case "found":
        filteredData = combinedData.filter((item) => item.type === "found");
        break;
      case "retrieve":
        filteredData = combinedData.filter((item) => item.type === "retrieve");
        break;
      default:
        // "All" or other cases
        break;
    }

    setFilteredData(filteredData);
    setSelectedCategory("All"); // Reset selected category
    setSelectedCity("All"); // Reset selected city
    setSelectedDay("All"); // Reset selected day
    setSelectedListItem(type);
  };

  const uniqueCategories = [
    ...new Set(combinedData.map((item) => item.data.category)),
  ];

  const uniqueCities = [...new Set(combinedData.map((item) => item.data.city))];

  const uniqueDay = [
    ...new Set(
      combinedData.map((item) => item.data.date_lost || item.data.date_found)
    ),
  ];

  const ITEMS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

    if (pageNumber < 1) {
      pageNumber = 1;
    } else if (pageNumber > totalPages) {
      pageNumber = totalPages;
    }

    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center justify-items-center 	">
        <div className="mt-24 flex flex-row items-end  justify-between  w-[44rem] max-w-[44rem] ">
          <ul className="flex flex-row gap-4">
            <li>
              <select
                id="category"
                onChange={(e) => handleCategoryChange(e.target.value)}
                value={selectedCategory}
                className="bg-transparent"
              >
                <option value="All">ALL CATEGORIES</option>
                {uniqueCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </li>
            <li>
              <select
                id="city"
                onChange={(e) => handleCityChange(e.target.value)}
                value={selectedCity}
                className="bg-transparent"
              >
                <option value="All">CITY</option>
                {uniqueCities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </li>
          </ul>
          <ul className="flex flex-row gap-4">
            {/* ... */}
            <li
              className={`${
                selectedListItem === "lost" ? "text-[#E83434]" : "text-[#373737]"
              } hover:text-[#E83434] cursor-pointer`}
              onClick={() => handleFilterClick("lost")}
            >
              LOSTS
            </li>
            <li
              className={`${
                selectedListItem === "found" ? "text-[#FBE62E]" : "text-[#373737]"
              } hover:text-[#FBE62E] cursor-pointer`}
              onClick={() => handleFilterClick("found")}
            >
              FOUNDS
            </li>
            <li
              className={`${
                selectedListItem === "retrieve" ? "text-[#18E074]" : "text-[#373737]"
              } hover:text-[#18E074] cursor-pointer`}
              onClick={() => handleFilterClick("retrieve")}
            >
              LINKED
            </li>
            <li
              className={`${
                selectedListItem === "All" ? "text-[#E83434]" : "text-[#373737]"
              } hover:text-[#E83434] cursor-pointer`}
              onClick={() => handleFilterClick("All")}
            >
              ALL
            </li>
            {/* ... */}
          </ul>
        </div>
        <hr className=" w-[44rem] mt-4 border-[#868686] border-dashed  sm:mx-auto dark:border-gray-700 " />
        <div className="flex flex-row justify-items-center justify-between  w-[44rem] max-w-[44rem]">
          {/* SEARCH  */}

          <div class="pt-2 relative ">
            <input
              class=" placeholder-[#868686] border border-[#868686] bg-[#86868610] h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
            />
            <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
              <svg
                class="text-gray-600 h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsxlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                style={{ enableBackground: "new 0 0 56.966 56.966" }}
                xmlspace="preserve"
                width="512px"
                height="512px"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>
          </div>
          <select
            id="day"
            onChange={(e) => handleDayChange(e.target.value)}
            value={selectedDay}
            className="bg-transparent"
          >
            <option value="All" className="text-end">
              DATE
            </option>
            {uniqueDay.map((day) => (
              <option key={day} value={day} className="overflow-hidden w-22">
                {day}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        {/* DISPLAYED DATA */}
        <div className="flex flex-row flex-wrap justify-center items-center gap-12 mb-28">
          <div className="flex flex-row flex-wrap justify-center items-center gap-12 mr-44 ml-44 mb-28 mt-12">
            {currentItems.map((item) => {
              switch (item.type) {
                case "lost":
                  return (
                    <LostCard
                      key={item.data.id}
                      title={item.data.title}
                      city={item.data.city}
                      day={item.data.day}
                    />
                  );
                case "found":
                  return (
                    <FoundCard
                      key={item.data.id}
                      title={item.data.title}
                      city={item.data.city}
                      day={item.data.day}
                    />
                  );
                case "retrieve":
                  return (
                    <RetrievedCard
                      key={item.data.id}
                      username={item.data.title}
                      description={item.data.description}
                    />
                  );
                default:
                  return null;
              }
            })}
          </div>
        </div>

        {/* PAGINATION  */}

        <Pagination
          currentPage={currentPage}
          filteredData={filteredData}
          ITEMS_PER_PAGE={ITEMS_PER_PAGE}
          paginate={paginate}
        />
      </div>
    </>
  );
};
