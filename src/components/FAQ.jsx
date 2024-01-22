import React from "react";
import { IoIosArrowDown } from "react-icons/io";
const FAQ = () => {
  return (
    <div>
      <div className="w-[97px] h-[35px] mt-40 relative left-24">
        <h1 className="Inter font-bold text-4xl text-[#223865]">FAQ</h1>
      </div>
      <div className="flex flex-col mt-14 relative left-24">
        <div className="border-2 border-blue-400 w-[848px] h-[58px] rounded-xl mb-8 flex justify-between  items-center">
            <div className="w-[410px] h-[12px] relative left-4">
                <p className="Inter font-semibold text-[16px] leading-4">Can education flashcards be used for all age groups?</p>
            </div>
            <IoIosArrowDown className="w-[24px] h-[24px] text-[#28262C] relative right-4 cursor-pointer"/>
        </div>
        <div className="border-2 border-blue-400 w-[848px] h-[58px] rounded-xl mb-8 flex justify-between  items-center">
        <div className="w-[410px] h-[12px] relative left-4">
                <p className="Inter font-semibold text-[16px] leading-4">How do education flashcards work?</p>
            </div>
            <IoIosArrowDown className="w-[24px] h-[24px] text-[#28262C] relative right-4 cursor-pointer"/>
        </div>
        <div className="border-2 border-blue-400 w-[848px] h-[58px] rounded-xl mb-8 flex justify-between  items-center">
        <div className="w-[410px] h-[12px] relative left-4">
                <p className="Inter font-semibold text-[16px] leading-4">Can education flashcards be used for test preparation?</p>
            </div>
            <IoIosArrowDown className="w-[24px] h-[24px] text-[#28262C] relative right-4 cursor-pointer"/>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
