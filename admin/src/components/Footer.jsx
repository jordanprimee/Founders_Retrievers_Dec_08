import React from "react";
import { Link } from 'react-router-dom'


export const Footer = () => {
  return (
    <>
      <hr className="my-1 mt-12 border-[#86868675] border-dashed  " />

      <span className="p-4 justify-self-start block text-sm text-[#000] sm:text-center dark:text-gray-400">
        © 2023{" "}
        <Link to="/" className="hover:underline">
          Founders Retrievers™
        </Link>
      </span>
    </>
  );
};
