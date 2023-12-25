import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FoundCard, LostCard, RetrievedCard } from "../profile/CardsProfile";
import { UseUser } from "../../hooks/useContext/UserContext";
import Pagination from "./Pagination";

export const FilterData = () => {

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       if (user) {
  //         // Use the user token to make an authenticated request to fetch user data
  //         const foundsResponse = await axios.get(
  //           `http://localhost:3000/found`,
  //           {
  //             headers: {
  //               Authorization: `Bearer ${user.token}`,
  //             },
  //           }
  //         );

  //         const allPosts = foundsResponse.data;
  //         console.log(foundsResponse.data);

  // ////////////////////////        // Filter posts based on the user's ID/////////////////////////////////////////////////////
  //         const userPosts = allPosts.filter(
  //           (data) => data.id_user === user.id_user
  //         );

  //         // Update state with the user's posts
  //         setDataFromSecondAPI(userPosts);
  //         console.log(userPosts);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   };
  ///////////////////////////////////////////////////////////////////////////////////////////////////

  //   fetchUserData();
  // }, [user]);

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

  const ITEMS_PER_PAGE = 2;
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
      {/* My Posts  */}
      <div className="flex flex-col ">
        <div className="mt-16">
          <div className="text-[#000] font-light text-[0.9rem] flex gap-16 items-center">
            My Publishes{" "}
          </div>
          <hr className=" w-[44rem] border-[#868686] border-dashed  sm:mx-auto dark:border-gray-700 " />
          <div className="flex flex-row justify-center items-center gap-12 mb-28 mt-12">
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

      {/* Filter  */}

      <div className="mt-12 p-16 bg-[#86868673] w-[20rem] h-[50rem] rounded-l-[1.25rem] flex flex-col gap-4">
        <ul className="flex flex-col">
          {" "}
          Lists
          <hr className=" w-[12rem] border-[#868686] border-dashed  sm:mx-auto dark:border-gray-700 " />
            {/* ... */}
            <li
              className={`${
                selectedListItem === "All" ? "text-[#ffffff]" : "text-[#373737]"
              } hover:text-[#fff] cursor-pointer ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center border-dotted border-white`}
              onClick={() => handleFilterClick("All")}
            >
              My all Publishes
            </li>
            <li
              className={`${
                selectedListItem === "lost" ? "text-[#fff]" : "text-[#373737]"
              } hover:text-[#fff] cursor-pointer ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center border-dotted border-white`}

              onClick={() => handleFilterClick("lost")}
            >
              My losts
            </li>
            <li
              className={`${
                selectedListItem === "found" ? "text-[#fff]" : "text-[#373737]"
              } hover:text-[#fff] cursor-pointer ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center border-dotted border-white`}
              onClick={() => handleFilterClick("found")}
            >
              My founds
            </li>
            <li
              className={`${
                selectedListItem === "retrieve" ? "text-[#fff]" : "text-[#373737]"
              } hover:text-[#fff] cursor-pointer ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center border-dotted border-white`}
              onClick={() => handleFilterClick("retrieve")}
            >
              I linked
            </li>
           
            {/* ... */}
          {/* <li className="ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center">
            Donate
          </li> */}
          {/* <li className='text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center'>All posts from website</li> */}
          {/* <li className='ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center'>All posts from website</li> */}
        </ul>
        <ul className="flex flex-col mt-4">
          {" "}
          Filter by
          <hr className=" w-[12rem] border-[#868686] border-dashed  sm:mx-auto dark:border-gray-700 " />
          <li className="ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center border-dotted border-white">
            <select
              id="category"
              onChange={(e) => handleCategoryChange(e.target.value)}
              value={selectedCategory}
              className="bg-transparent"
            >
              <option value="All">All Categories</option>
              {uniqueCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </li>
          <li className="ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center">
            <select
              id="city"
              onChange={(e) => handleCityChange(e.target.value)}
              value={selectedCity}
              className="bg-transparent"
            >
              <option value="All">City</option>
              {uniqueCities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </li>
          <li className="ml-4 mt-4 text-[#000] font-light text-[0.9rem] hover:underline flex gap-16 items-center">
            <select
              id="day"
              onChange={(e) => handleDayChange(e.target.value)}
              value={selectedDay}
              className="bg-transparent"
            >
              <option value="All">Day</option>
              {uniqueDay.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </li>
        </ul>
      </div>
    </>
  );
};
