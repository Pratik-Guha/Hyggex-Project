import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between '>
        <div className='relative top-[20px] left-[74px] '>
           <img className=' h-[42px]' src="https://wjve36.n3cdn1.secureserver.net/wp-content/uploads/2023/12/Hy.png?time=1705848045" alt="" />
        </div>
        <div className='flex justify-center items-center mt-7 relative w-[525px] h-[48px]'>
            <ul className='flex justify-center items-center  gap-10 px-4 '>
                <li><a className=' text-[18px] leading-5 Inter font-normal' href="home">Home</a></li>
                <li><a className=' text-[18px] leading-5 Inter font-normal' href="flashcard">Flashcard</a></li>
                <li><a className=' text-[18px] leading-5 Inter font-normal' href="contact">Contact</a></li>
                {/* <li><a href="faq">FAQ</a></li>
                <li><a href="">Login</a></li> */}
            </ul>
            <div className='flex justify-center items-center gap-10 px-4 '>
                <a href="faq" className='text-[18px] leading-5 Inter font-normal'>FAQ</a>
                <button className='text-[18px] leading-5 Inter font-normal px-[7px] py-[9px] gap-1 rounded-full loginbtn w-[98px] text-white text-center h-[48px]'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Header