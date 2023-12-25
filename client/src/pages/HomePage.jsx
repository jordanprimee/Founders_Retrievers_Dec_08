import React from "react";
import { HomeHero } from "../components/HomeHero";
import { CardHomeFound } from "../components/uiPrimitives/CardHomeFound";
import { CardHomeLost } from "../components/uiPrimitives/CardHomeLost";
import { Link } from "react-router-dom";
import HowItWorksStatic from "../assets/clips/HowItWorksStatic.png";
import { BeTheLink } from "../components/BeTheLink";
import { CaseStory } from "../components/CaseStory";
import { CardRetrievedHome } from "../components/CardRetrievedHome";
import { PublishLost } from "../components/PublishLost";
import { PublishFound } from "../components/PublishFound";
import { DeliveryAlertFound } from "../components/uiPrimitives/DeliveryAlertFound";
import TrySwiper from "../service/TrySwiper";
import { AutoplaySwiper } from "../components/swipers/MainSwiper";
import NewsTicker from "../components/swipers/TryNewsTicker";
import { MainCardFound } from "../components/MainCardFound";
import { ConfirmContact } from "../components/uiPrimitives/ConfirmContactLost";
import { UseUser } from "../hooks/useContext/UserContext";
import Payment from "../components/PaymentTwo/Payment";
import DropInAnimation from "../components/heroAnimation/SecTry";

export const HomePage = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  const { user } = UseUser();

  return (
    <>
      <HomeHero />
      <hr className="my-6 border-[#868686] border-dashed  sm:mx-auto dark:border-gray-700 lg:my-8" />

      <div className="flex flex-col lg:gap-12 md:gap-4 sm:gap-4 gap-2 ">
        <div className="text-center text-2xl font-semibold lg:scale-100 scale-75  sm:scale-90">
          Recently Lost and Found{" "}
        </div>
          <AutoplaySwiper />
        {user ? (
          <div className="text-center text-[0.85rem] lg:scale-100 scale-75  sm:scale-90" >
            <Link
              to="/feedpage"
              className="text-[#E83434] hover:text-[#E8343485] justify-self-center place-items-center font-light underline decoration-solid "
            >
              Explore more
            </Link>{" "}
            belongings. You can be the{" "}
            <span className="text-[#18e074]">Link </span>!{" "}
          </div>
        ) : (
          <div className="text-center text-[0.85rem] lg:scale-100 scale-75  sm:scale-90">
            <Link
              to="/signup"
              className="text-[#E83434] hover:text-[#E8343485] justify-self-center place-items-center font-light underline decoration-solid "
            >
              Sign Up/ In now.
            </Link>{" "}
            Be the Link !
          </div>
        )}
      </div>

      <hr className="my-6 border-[#868686] border-dashed  sm:mx-auto dark:border-gray-700 lg:my-8" />

      <div className="p-8 grid auto-rows-auto	 justify-items-center gap-8	">
        <div className="place-items-center text-2xl font-semibold">
          How it works ?{" "}
        </div>
        <img src={HowItWorksStatic} alt="" className="p-12 w-[80rem]" />
        <div className="text-[0.85rem]">
          Learn{" "}
          <Link
            to="/aboutus"
            className="text-[#E83434] hover:text-[#E8343485] justify-self-center place-items-center font-light underline decoration-solid "
          >
            more
          </Link>
        </div>
      </div>

      <BeTheLink />

      <hr className="my-6 border-[#868686] border-dashed  sm:mx-auto dark:border-gray-700 lg:my-8" />

      <div className="">
        <div className="place-items-center text-2xl font-semibold text-center pb-12 pt-12">
          Recently Linked{" "}
        </div>
        <CardRetrievedHome />
        {user ? (
          <div className="text-[0.85rem] pb-12 pt-12 text-center">
            <Link
              to="/feedpage"
              className="text-[#E83434] hover:text-[#E8343485] justify-self-center place-items-center font-light underline decoration-solid "
            >
              Explore more
            </Link>{" "}
            belongings. You can be the{" "}
            <span className="text-[#18e074]">Link </span>!{" "}
          </div>
        ) : (
          <div className="text-[0.85rem] pb-12 pt-12 text-center">
            <Link
              to="/signup"
              className="text-[#E83434] hover:text-[#E8343485] justify-self-center place-items-center font-light underline decoration-solid "
            >
              Sign Up/ In now.
            </Link>{" "}
            Be the Link !
          </div>
        )}{" "}
      </div>

      <div className="text-2xl font-semibold text-center pb-16 pt-12">
        {" "}
        Case Story
      </div>
      {/* <CaseStory /> */}
      <Link to="/contactus">
        <div className="pb-12  text-center">
          <span className=" font-semibold text-[#18e074] hover:text-[#18e07485]">
            <span className="underline">S</span>hare
          </span>{" "}
          your story with us !
        </div>
      </Link>
      {/* <div className="ml-24">
        <PublishLost />
        <br />
        <PublishFound />
        <br />
        <DeliveryAlertFound />
      </div> */}

    </>
  );
};
