import React from "react";
import {
  MdOutlineLightbulb,
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { AiOutlineSound } from "react-icons/ai";
import { TbReload } from "react-icons/tb";
import { BiFullscreen } from "react-icons/bi";
import 'boxicons';
const Flashcard = () => {
  return (
    <div>
      <div className="w-[676px] h-[39px] mt-14 -ml-3">
        <h1 className=" text-blue-900 Montserrat font-bold text-2xl text-center">
          Relations and Functions ( Mathematics )
        </h1>
      </div>
      <div className="mt-10 text-center w-[546px] m-auto">
        <div className="flex justify-between items-center gap-10 text-xl">
          <a
            href=""
            className="Inter font-bold text-[#06286E] py-2 underline-offset-[12px] underline"
          >
            <p className="my-4">Study</p>
          </a>
          {/* <div className='w-[546px] h-[1px] bg-[#06286E] mt-10 relative -left-3'></div> */}
          <a href="" className="Inter font-medium text-[#696671]">
            Quiz
          </a>
          <a href="" className="Inter font-medium text-[#696671]">
            Test
          </a>
          <a href="" className="Inter font-medium text-[#696671]">
            Game
          </a>
          <a href="" className="Inter font-medium text-[#696671]">
            Others
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center mx-auto w-[712px] h-[393px] rounded-[42.51px] flashcard mt-8  relative">
        <div className="flex justify-between items-center absolute top-2 right-8 left-4">
          <MdOutlineLightbulb className=" w-[32px] h-[32px] text-white mt-6 ml-6 " />
          <box-icon name='volume-full' color="#ffffff" style={{ width: '32px', height: '32px' , marginTop: '8px', marginLeft: '8px'}}  />
          {/* <box-icon name='volume-full'></box-icon> */}
        </div>
        <div className="flex justify-center items-center w-[323px] h-[46px]">
          <p className="text-[38px] text-[#FFFFFF] Lato font-bold leading-10 text-center tracking-tight">
            9 + 6 + 7x - 2x - 3
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-16 font-bold mb-8 h-20">
        <div className="font-bold text-2xl">
          <TbReload className="w-[32px] h-[32px] text-[#06286E] mt-10 ml-10" />
        </div>
        <div className="relative">
          <div className="w-10 h-10 iconcolor rounded-full absolute top-0 left-0 mt-10 ml-10"></div>
          <MdOutlineArrowBackIos className="w-[32px] h-[32px]   text-[#FFFFFF] mt-11 ml-11 z-10 relative" />
        </div>
        <div className="flex justify-center items-center mt-4 relative top-3">
          <p className="Inter font-bold text-2xl text-center">01/10</p>
        </div>
        <div className="relative right-6">
          <div className="w-10 h-10 iconcolor rounded-full absolute top-0 left-0 mt-10 ml-10"></div>
          <MdOutlineArrowForwardIos className="w-[32px] h-[32px] text-[#FFFFFF] mt-11 ml-11  z-10 relative" />
        </div>
        <div>
          <BiFullscreen className="w-[32px] h-[32px] text-[#06286E] mt-10 ml-10 font-bold" />
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
