import React, { useEffect, useState } from "react";
import axios from "axios";

export const ReachOutTable = () => {
  // const [caseStory, setCaseStory] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/getAllComments")
  //     .then((response) => {
  //       setCaseStory(response.data);
  //       console.log("contact", response.data);
  //       console.log("contacdetails", caseStory.comments);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching users data ", error);
  //     });
  // }, []);

   // PAGINATION //
   const [caseStory, setCaseStory] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [totalPages, setTotalPages] = useState(1);
   const [limitData, setLimitData] = useState(1);
   const [searchQuery, setSearchQuery] = useState("");
 
   
     const fetchContactData = async () => {
       try {
         const contactResponse = await axios.get(
           `http://localhost:3000/filter/users2?page=${currentPage}&limit&search=${searchQuery}`
         );
         setCaseStory(contactResponse.data.users);
         const calculatedTotalPages = Math.ceil(contactResponse.data.total / contactResponse.data.limit);
         setTotalPages(calculatedTotalPages);
         setLimitData(contactResponse.data.limit);
         console.log(contactResponse.data);
       } catch (error) {
         console.error("Error fetching data:", error);
       }
     };
     useEffect(() => {
     fetchContactData();
   }, [currentPage, searchQuery]);
   
   
   const paginate = (pageNumber) => {
     setCurrentPage(pageNumber);
   };
 
   const handleSearchChange = (e) => {
     setSearchQuery(e.target.value);
   };
   const handleSearchSubmit = (e) => {
     e.preventDefault();
     setCurrentPage(1); // Reset page when performing a new search
     fetchContactData();
   };
 
  

  return (
    <>
    {/* SEARCH  */}
    <div>
        <form onSubmit={handleSearchSubmit} class="pt-2 relative self-end	mr-8">
          <input
            class="place-items-end w-[20rem] placeholder-[#868686] border border-[#868686] bg-[#86868610] h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
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
        </form>
      </div>
      {/* SEARCH END */}
      <div class="flex flex-col w-auto">
        <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden  rounded-[1rem]">
              <table class="min-w-full">
                <thead class="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
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
                      Message
                    </th>
                    {/* <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Handle
                    </th> */}
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(caseStory) &&
                    caseStory.map((item, index) => (
                  // {Array.isArray(caseStory.comments) &&
                  //   caseStory.comments.map((item, index) => (
                      <tr
                        key={index}
                        className={
                          index % 2 === 0
                            ? "bg-white border-b"
                            : "bg-gray-100 border-b"
                        }
                      >
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.id_user}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {item.full_name}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {item.email}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {item.message}
                        </td>
                        {/* <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={(e) => handleDeleteUser(item.user_id)}
                          class="px-3 pb-2 text-[#E83434] bg-transparent border border-2 border-[#E83434]  focus:outline-none hover:bg-[#E83434] hover:text-[#FFFFFF] text-xs font-semibold rounded-[0.65rem] text-xs px-5 py-2 "
                        >
                          Delete
                        </button>
                        </td> */}
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
       {/* PAGINATION */}
       <div class="flex justify-center">
        <nav aria-label="Page navigation example">
          <ul className="flex list-style-none">
            <li
              className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
              onClick={() => paginate(currentPage - 1)}
            >
              <a
                className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-500 pointer-events-none focus:shadow-none"
                href="#"
                tabIndex="-1"
              >
                Previous
              </a>
            </li>

            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index} className="page-item">
                <a
                  className={`page-link relative block py-1.5 px-3 rounded border-0 outline-none transition-all duration-300 text-gray-800 focus:shadow-none ${
                    currentPage === index + 1 ? "bg-gray-200" : ""
                  }`}
                  href="#"
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </a>
              </li>
            ))}

            <li className="page-item" onClick={() => paginate(currentPage + 1)}>
              <a
                className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                href="#"
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
