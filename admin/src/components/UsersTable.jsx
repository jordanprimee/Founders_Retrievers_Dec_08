import React, { useEffect, useState } from "react";
import axios from "axios";
import SingUpForm from "./SignUpForm";

export const UsersTable = () => {
  // PAGINATION //
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limitData, setLimitData] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchUserData = async () => {
    try {
      const usersResponse = await axios.get(
        `http://localhost:3000/filter/users2?page=${currentPage}&limit&search=${searchQuery}`
      );
      setUserData(usersResponse.data.users);
      const calculatedTotalPages = Math.ceil(
        usersResponse.data.total / usersResponse.data.limit
      );
      setTotalPages(calculatedTotalPages);
      setLimitData(usersResponse.data.limit);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [currentPage, searchQuery]);

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1); // Reset page when performing a new search
    fetchUserData();
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const displayPages = 3; // Adjust the number of pages to display

  const startPage = Math.max(1, currentPage - Math.floor(displayPages / 2));
  const endPage = Math.min(totalPages, startPage + displayPages - 1);

  const pageRange = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => index + startPage
  );

  return (
    <>
      {/* SEARCH  */}
      {modalIsOpen && (
        <SingUpForm isOpen={openModal} onRequestClose={closeModal} />
      )}
      <div className="mx-8">
      <div className="text-3xl text-[#373737] font-semibold text-start pb-4  sm:pt-0 pt-0 lg:scale-100 md:scale-100 sm:scale-95 scale-95">
          All Users{" "}
        </div>
      {/* SEARCH END */}
      <div className="flex flex-row justify-between mb-4 w-auto sm:mx-0.5 lg:mx-0.8 ">
        <form onSubmit={handleSearchSubmit} class="pt-2 relative self-end	">
          <input
            class="place-items-end w-11/12 placeholder-[#868686] border border-[#868686] bg-[#86868610] h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="submit" class="absolute right-0 top-0 mt-5 mr-6">
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
        </form>
        <button
          onClick={openModal}
          class="text-center mt-2 p-2 h-fit whitespace-nowrap  text-[#494949] bg-transparent border border-1 border-[#494949]  focus:outline-none hover:bg-[#494949] hover:text-[#FFFFFF] text-sm font-semibold rounded-md "
        >
          {" "}
          Add User
        </button>
      </div>
      <div class="flex flex-col w-full  ">
        <div class="overflow-x-scroll min-w-full w-full sm:mx-0.5 lg:mx-0.5 ">
          <div class="py-2 inline-block min-w-full ">
            <div class="overflow-hidden  rounded-[1rem]">
              <table class="min-w-full ">
                <thead class="bg-white border-b  ">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      No.
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      User Name
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Handle
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(userData) &&
                    userData.map((item, index) => (
                      <tr
                        key={index}
                        className={
                          index % 2 === 0
                            ? "bg-white border-b"
                            : "bg-gray-100 border-b"
                        }
                      >
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.user_id}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {item.username}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {item.email}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <button
                            // onClick={(e) => handleDeleteUser(item.user_id)}
                            class="px-3 pb-2 text-[#E83434] bg-transparent border border-2 border-[#E83434]  focus:outline-none hover:bg-[#E83434] hover:text-[#FFFFFF] text-xs font-semibold rounded-[0.65rem] text-xs px-5 py-2 "
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* PAGINATION */}
      <div className="flex justify-center lg:scale-100 md:scale-90 sm:scale-75 scale-75">
        <nav aria-label="Page navigation example">
          <ul className="flex list-style-none">
            <li
              className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
              onClick={() => paginate(currentPage - 1)}
            >
              <a
                className={`page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded ${
                  currentPage === 1 ? "text-gray-500" : "text-gray-800"
                } hover:bg-[#373737] hover:text-[#fff] focus:shadow-none`}
                href="#"
                tabIndex="-1"
              >
                Previous
              </a>
            </li>

            {pageRange.map((page) => (
              <li key={page} className="page-item">
                <a
                  className={`page-link relative block py-1.5 px-3 rounded border-0 outline-none transition-all duration-300 ${
                    currentPage === page
                      ? "bg-[#37373775] text-[#fff]"
                      : "text-gray-800"
                  } focus:shadow-none`}
                  href="#"
                  onClick={() => paginate(page)}
                >
                  {page}
                </a>
              </li>
            ))}

            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
              onClick={() => paginate(currentPage + 1)}
            >
              <a
                className={`page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded ${
                  currentPage === totalPages ? "text-gray-500" : "text-gray-800"
                } hover:bg-[#373737] hover:text-[#fff] focus:shadow-none`}
                href="#"
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
      </div>
    </>
  );
};
