import React, { useEffect, useState } from "react";
import axios from "axios";

export const ReachOutTable = () => {
  const [caseStory, setCaseStory] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/getAllComments")
      .then((response) => {
        setCaseStory(response.data);
        console.log("contact", response.data);
        console.log("contacdetails", caseStory.comments);
      })
      .catch((error) => {
        console.error("Error fetching users data ", error);
      });
  }, []);

  

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
                  {Array.isArray(caseStory.comments) &&
                    caseStory.comments.map((item, index) => (
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
    </>
  );
};
