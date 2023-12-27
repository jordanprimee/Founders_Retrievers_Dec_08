import React, {useState} from "react";
import { Table } from "../components/Table";
import { SideBar } from "../components/SideBar";
import { Stats } from "../components/Stats";
import { UsersTable } from "../components/UsersTable";
import { ReachOutTable } from "../components/ReachOutTable";
import { LostsTable } from "../components/LostsTable";
import { PartnersTable } from "../components/PartnersTable";
import { FoundsTable } from "../components/FoundsTable";
import { RetrievedTable } from "../components/RetrievedTable";
import { DeliveryMission } from "../components/DeliveryMission";
import WhiteLogo from "../assets/WhiteLogo.png";
import { UseUser } from "../hooks/UserContext";


// ... (imports and other code)

export const Dashboard = () => {
  const { logout } = UseUser();
  const [selectedItem, setSelectedItem] = useState("overview");

  const handleListItemClick = (item) => {
    setSelectedItem(item);
  };

  const renderTable = () => {
    switch (selectedItem) {
      case "overview":
        return <div><Stats />  <UsersTable /></div>;
      case "users":
        return <UsersTable />;
      case "inquiriesTable":
        return <ReachOutTable />;
      case "losts":
        return <LostsTable />;
      case "founds":
        return <FoundsTable />;
      case "retrieved":
        return <RetrievedTable />;
      case "partners":
        return <PartnersTable />;
      case "deliveryForms":
        return <DeliveryMission />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex flex-row gap-6">
        <div className=" mt-16 lg:p-16 md:p-16 sm:p-8 p-1 bg-[#373737] lg:w-[20rem] md:w[10rem] sm:w-[3rem] w-[3rem]  h-screen rounded-r-[1.25rem] flex flex-col gap-4">
          <ul className="sticky text-lg flex flex-col text-[#fff] lg:flex md:hidden sm:hidden hidden">
          {" "}
          Tables
          <hr className=" w-[12rem] border-[#868686] border-dashed  sm:mx-auto dark:border-gray-700 " />
            <li
              onClick={() => handleListItemClick("overview")}
              className={`ml-4 mt-4 text-[#fff] font-light text-[0.9rem] hover:border-l hover:border-[#fbe62e]  hover:pl-2 hover:text-[#fbe62e] flex gap-16 items-center ${
                selectedItem === "overview" ? "border-dotted border-l pl-2 text-[#fbe62e]  border-[#fbe62e] " : ""
              }`}
            >
              Over View
            </li>
            <li
              onClick={() => handleListItemClick("users")}
              className={`ml-4 mt-4 text-[#fff] font-light text-[0.9rem] hover:border-l hover:border-[#fbe62e]  hover:pl-2 hover:text-[#fbe62e] flex gap-16 items-center ${
                selectedItem === "users" ? "border-dotted border-l pl-2 text-[#fbe62e]  border-[#fbe62e] " : ""
              }`}
            >
              Users
            </li>
            <li
              onClick={() => handleListItemClick("partners")}
              className={`ml-4 mt-4 text-[#fff] font-light text-[0.9rem] hover:border-l hover:border-[#fbe62e]  hover:pl-2 hover:text-[#fbe62e] flex gap-16 items-center ${
                selectedItem === "partners" ? "border-dotted border-l pl-2 text-[#fbe62e]  border-[#fbe62e] " : ""
              }`}
            >
              Partners
            </li>
            <li
              onClick={() => handleListItemClick("losts")}
              className={`ml-4 mt-4 text-[#fff] font-light text-[0.9rem] hover:border-l hover:border-[#fbe62e]  hover:pl-2 hover:text-[#fbe62e] flex gap-16 items-center ${
                selectedItem === "losts" ? "border-dotted border-l pl-2 text-[#fbe62e]  border-[#fbe62e] " : ""
              }`}
            >
              All Losts
            </li>
            <li
              onClick={() => handleListItemClick("founds")}
              className={`ml-4 mt-4 text-[#fff] font-light text-[0.9rem] hover:border-l hover:border-[#fbe62e]  hover:pl-2 hover:text-[#fbe62e] flex gap-16 items-center ${
                selectedItem === "founds" ? "border-dotted border-l pl-2 text-[#fbe62e]  border-[#fbe62e] " : ""
              }`}
            >
              All Founds
            </li>
            <li
              onClick={() => handleListItemClick("retrieved")}
              className={`ml-4 mt-4 text-[#fff] font-light text-[0.9rem] hover:border-l hover:border-[#fbe62e]  hover:pl-2 hover:text-[#fbe62e] flex gap-16 items-center ${
                selectedItem === "retrieved" ? "border-dotted border-l pl-2 text-[#fbe62e]  border-[#fbe62e] " : ""
              }`}
            >
              All Retrieved
            </li>
            <li
              onClick={() => handleListItemClick("deliveryForms")}
              className={`ml-4 mt-4 text-[#fff] font-light text-[0.9rem] hover:border-l hover:border-[#fbe62e]  hover:pl-2 hover:text-[#fbe62e] flex gap-16 items-center ${
                selectedItem === "deliveryForms" ? "border-dotted border-l pl-2 text-[#fbe62e]  border-[#fbe62e] " : ""
              }`}
            >
              Delivery Mission
            </li>
            <li
              onClick={() => handleListItemClick("inquiriesTable")}
              className={`ml-4 mt-4 text-[#fff] font-light text-[0.9rem] hover:border-l hover:border-[#fbe62e]  hover:pl-2 hover:text-[#fbe62e] flex gap-16 items-center ${
                selectedItem === "inquiriesTable" ? "border-dotted border-l pl-2 text-[#fbe62e]  border-[#fbe62e] " : ""
              }`}
            >
              Inquiries Table
            </li>
          </ul>
          <button
            onClick={logout}
            className="lg:flex xl:flex w-fit hover:text-[#373737] md:hidden sm:hidden hidden mt-10 px-3 pb-2 text-[#fff] bg-transparent border border-1 border-[#fff]  focus:outline-none hover:bg-[#fff]  text-xs font-semibold rounded-[0.65rem] text-xs px-5 py-2  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 whitespace-nowrap"
          >
            LOG OUT
          </button>
        </div>

        <div className="justify-center w-2/3 flex flex-col">
          {renderTable()}
        </div>
      </div>
    </>
  );
};

