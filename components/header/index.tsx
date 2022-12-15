import React from 'react'
import NavLinks from '../nav'

const Header = () => {
  return (
    <header className='flex relative justify-between items-center px-10 md:px-16 lg:px-28 z-auto w-[100vw] pt-1' >
        <div className="logo text-2xl lg:text-4xl text-[#1770F4] font-extrabold">Health Joe</div>
        <NavLinks />
        <button className="btn px-3 py-[0.20rem] lg:px-5 lg:py-1 bg-[#1770F4] text-white z-20 rounded-md shadow-lg shadow-[#176ff47e]">Sign In</button>
      </header>
  )
}

export default Header