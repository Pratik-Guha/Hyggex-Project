import React from "react";
import { GoHome } from "react-icons/go";
import { FaGreaterThan } from "react-icons/fa6";
const Home = () => {
  return (
    <div className="w-[587px] h-8">
      <div className="flex mt-10 ml-24 justify-center items-center gap-[6px] text-center">
        <GoHome className="w-[30px] h-[30px] text-[#696671]" />
        <FaGreaterThan className="w-[24px] h-[24px] mt-1 ml-2 text-[#06286E]" />
        <p className="w-[125px] h-[22px] text-[16px] font-medium leading-5 Inter mt-1 text-[#696671]">
          Flashcard
        </p>
        <FaGreaterThan className="w-[24px] h-[24px] mt-1 ml-2 text-[#06286E]" />
        <p className="w-[122px] h-[22px] text-[16px] font-medium leading-5 Inter mt-1 text-[#696671]">
          Mathematics
        </p>
        <FaGreaterThan className="w-[24px] h-[24px] mt-1 ml-2 text-[#06286E]" />
        <p className="w-[225px] h-[22px]  text-[16px] font-semibold leading-5 Inter mt-1 text-[#06286E]">
          Relation and Function
        </p>
      </div>
    </div>
  );
};

export default Home;
