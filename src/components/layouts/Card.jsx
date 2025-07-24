import React from "react";
import { HiArrowRight } from "react-icons/hi";

const Card = ({ title, des, icon }) => {
  return (
      <div className="min-h-fit px-0  md:px-12 mx-auto py-8 sm:h-5/6 md:w-5/6 lg:w-full rounded-lg shadow-ShadowOne flex flex-col items-center justify-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-r hover:from-black hover:to-[#1e2024] transition-all duration-300 ">
        <div className="flex h-fit w-full flex-col items-center justify-center ">
          <div className="text-5xl text-designColor mb-4 sm:marker sm:mt-10  mt-5 text-center ">{icon}</div>
          <h2 className="text-2xl font-bold text-gray-300 mb-4">{title}</h2>
          <p className="text-base text-gray-400 text-center">{des}</p>
          <span className="text-2xl text-designColor mt-4">
            <HiArrowRight />
          </span>
        </div>
      </div>
 
  );
};

export default Card;
