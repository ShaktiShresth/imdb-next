"use client";

import { useEffect } from "react";
import { FaHandPointRight } from "react-icons/fa";

const Error = ({ error, reset }) => {
  //eslint-disable-next-line
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="mt-10 text-center">
      <h1 className="text-red-300">
        Something went wrong! Please try again later.
      </h1>
      <button
        className="hover:text-amber-600 mt-4 flex mx-auto gap-2"
        onClick={() => reset()}
      >
        <FaHandPointRight className="text-xl" /> Try Again
      </button>
    </div>
  );
};

export default Error;
