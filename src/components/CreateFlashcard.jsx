import React from 'react'
import { FaPlus } from "react-icons/fa6";
const CreateFlashcard = () => {
  return (
      <div className='flex justify-between mt-14'>
        <div className='relative top-[20px] left-[74px] flex justify-center items-center leading-3'>
            <div className='w-[80px] h-[80px] bg-white shadow-2xl shadow-blue-400 mix-blend-overlay rounded-full absolute top-0 left-0'></div>
            <img className='bg-white rounded-full w-[80px] h-[80px] relative z-10' src="https://i.tracxn.com/logo/company/Screenshot_2023-10-18_111416_9a56689a-e7db-41ba-986c-98dd1886a8ee.png?height=120&width=120" alt="" />
            <div className='flex flex-col'>
        <p className='text-[12px] leading-3 Inter font-bold text-[#696671] relative left-[54px]'>Published by</p>
        <h1 className='text-[28px] w-[115.14px] h-[34.54px] leading-tight Inter font-semibold text-[#06286E] relative left-[52px]'>Hygge<span className='font-bold text-4xl'>X</span></h1>

            </div>
        </div>
        <div className=''>
            <div className='relative flex justify-center items-center mt-4 right-8 '>
                <div className='w-9 h-9 iconcolor rounded-full absolute  top-0 left-0 '></div>
                <FaPlus className='w-[28px] h-[28px]  text-white mt-1 ml-10 z-10 relative right-9'/>
                <div className='flex justify-center items-center relative right-5'>
                    <p className='text-[25px] leading-5 Inter font-semibold text-[#06286E]'>Create Flashcard</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateFlashcard