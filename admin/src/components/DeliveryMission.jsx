import React, { useEffect, useState } from "react";
import axios from "axios";

export const DeliveryMission = () => {
  const [deliveryForms, setDeliveryForms] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((response) => {
        setDeliveryForms(response.data);
        console.log("data", deliveryForms);
        console.log("datadetails", deliveryForms.username);
      })
      .catch((error) => {
        console.error("Error fetching users data ", error);
      });
  }, []);
  

  return (
    <>
      <div className="flex flex-col w-auto">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden  rounded-[1rem]">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      No.
                    </th>
                    <th
                      scope="col"
                      className="flex flex-col text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      <span>Receptant Name</span>
                      <span>no</span>
                      <span>email</span>
                                         
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Item Details
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Share
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Retrieved
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(deliveryForms) &&
                    deliveryForms.map((item, index) => (
                      <tr
                        key={index}
                        classNameName={
                          index % 2 === 0
                            ? "bg-white border-b"
                            : "bg-gray-100 border-b"
                        }
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.user_id}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {item.username}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {item.email}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {/* <button
                          onClick={(e) => handleDeleteUser(item.user_id)}
                          className="px-3 pb-2 text-[#E83434] bg-transparent border border-2 border-[#E83434]  focus:outline-none hover:bg-[#E83434] hover:text-[#FFFFFF] text-xs font-semibold rounded-[0.65rem] text-xs px-5 py-2 "
                        >
                          Delete
                        </button> */}
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
