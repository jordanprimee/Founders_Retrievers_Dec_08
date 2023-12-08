import React, { useEffect, useState } from "react";
import axios from "axios";

export const PartnersTable = () => {
  const [partnersData, setPartnersData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/partners")
      .then((response) => {
        setPartnersData(response.data);
        console.log("data", partnersData);
        console.log("datadetails", partnersData.partnersname);
      })
      .catch((error) => {
        console.error("Error fetching partners data ", error);
      });
  }, []);

  const handleDeletePartners = (partners_id) => {
    // Make a request to delete the Partners
    axios
      .delete(`http://localhost:3000/partners/${partners_id}`)
      .then(() => {
        console.log('Server response after deletion:', response);

    
        setPartnersData((prevPartnersData) =>
          prevPartnersData.filter((partners) => partners.partners_id !== partners_id)
        );
      })
      .catch((error) => {
        console.error("Error deleting partner ", error);
      });
  };
  

  return (
    <>
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
                      Partners Name
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
                      Partner Since 
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
                  {Array.isArray(partnersData) &&
                    partnersData.map((item, index) => (
                      <tr
                        key={index}
                        className={
                          index % 2 === 0
                            ? "bg-white border-b"
                            : "bg-gray-100 border-b"
                        }
                      >
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.partners_id}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {item.partnersname}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {item.email}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {item.partner_since}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={(e) => handleDeletePartners(item.partners_id)}
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
    </>
  );
};
