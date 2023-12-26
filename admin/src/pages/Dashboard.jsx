import React from "react";
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

export const Dashboard = () => {
  return (
    <>
      <div className="mt-2 p-16 bg-[#868686] w-[20rem] h-[10rem] rounded-r-[1.25rem] flex flex-col gap-4">
        <img src={WhiteLogo} alt="" />
      </div>

      <div className="flex flex-row gap-6">
        <div className="  ">
          <SideBar />{" "}
        </div>
        <div className="justify-center w-2/3 flex flex-col">
          <Stats />
          {/* SEARCH  */}
          {/* <div class="pt-2 relative self-end	mr-8">
            <input
              class="place-items-end w-[20rem] placeholder-[#868686] border border-[#868686] bg-[#86868610] h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
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
          </div>{" "} */}
          {/* <Table /> */}
          <div className="text-2xl font-semibold text-start pb-4 lg:pt-12 md:pt-12 sm:pt-0 pt-0 pl-8  lg:scale-100 md:scale-100 sm:scale-95 scale-95">
            Users{" "}
          </div>
          <div className="ml-9 mr-5 lg:scale-100 md:scale-100 sm:scale-95 scale-95">
            <UsersTable />
          </div>
          <div className="text-2xl font-semibold text-start pb-4 pt-12 pl-8  lg:scale-100 md:scale-100 sm:scale-95 scale-95">
            Reach Out{" "}
          </div>
          <div className="ml-9 mr-5 lg:scale-100 md:scale-100 sm:scale-95 scale-95">
            <ReachOutTable />
          </div>

          <div className="text-2xl font-semibold text-start pb-4 pt-12 pl-8  lg:scale-100 md:scale-100 sm:scale-95 scale-95">
            Lost Belongings{" "}
          </div>
          <div className="ml-9 mr-5 lg:scale-100 md:scale-100 sm:scale-95 scale-95">
            <LostsTable />{" "}
          </div>

          <div className="text-2xl font-semibold text-start pb-4 pt-12 pl-8  lg:scale-100 md:scale-100 sm:scale-95 scale-95">
            Found Belongings{" "}
          </div>
          <div className="ml-9 mr-5 lg:scale-100 md:scale-100 sm:scale-95 scale-95">
            <FoundsTable />
          </div>
          <div className="text-2xl font-semibold text-start pb-4 pt-12 pl-8  lg:scale-100 md:scale-100 sm:scale-95 scale-95">
            Retrieved Belongings{" "}
          </div>
          <div className="ml-9 mr-5 lg:scale-100 md:scale-100 sm:scale-95 scale-95">
            <RetrievedTable />
          </div>
          <div className="text-2xl font-semibold text-start pb-4 pt-12 pl-8  lg:scale-100 md:scale-100 sm:scale-95 scale-95">
            Our Partners{" "}
          </div>
          <div className="ml-9 mr-5 lg:scale-100 md:scale-100 sm:scale-95 scale-95">
            <PartnersTable />
          </div>
          <div className="text-2xl font-semibold text-start pb-4 pt-12 pl-8  lg:scale-100 md:scale-100 sm:scale-95 scale-95">
            Delivery Forms{" "}
          </div>
          <div className="ml-9 mr-5 lg:scale-100 md:scale-100 sm:scale-95 scale-95">
            <DeliveryMission />
          </div>
        </div>
      </div>
    </>
  );
};
