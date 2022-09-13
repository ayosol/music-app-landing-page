import React from 'react'
import CenterMenu from './CenterMenu'


function Header() {
  const btnStyle = "m-[10px] border-[2px] rounded-[10px] border-[#232A4E] px-[25px] py-[10px] text-[#fff] hover:bg-[#232A4E] hover:text-[#fff] cursor-pointer"

  return (
   <div className="header bg-[#081730] flex items-center justify-between px-[5rem] pt-[2.4rem] text-[0.8rem]">
    {/* Website logo */}
    <img src={require("../assets/MuzicLogo.png")} alt=""  className='logo w-[42px] h-[42px]'/>
    
    {/* Side Menu */}
    <CenterMenu />

    {/* Buttons */}
    <div className="buttons flex">
      <button className={btnStyle}>Log in</button> 
      <button className={btnStyle}>Sign up</button>
    </div>
   </div>
  )
}

export default Header