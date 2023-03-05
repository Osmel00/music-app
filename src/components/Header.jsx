import { React, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { Logo } from "./Logo";
import { Navbar } from "./Navbar";

export const Header = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className=" m-w-[90%] py-6 flex items-center justify-between xl:py-4 xl:px-16">
      <div className="search-container flex  gap-x-2 items-center ">
        <FiSearch className="text-slate-50/60 text-2xl" />
        <input
          className="bg-transparent outline-none text-cyan-50"
          type="text"
          placeholder="Search"
        />
      </div>
      <div onClick={toggleMenu} className='cursor-pointer md:hidden' >
        {menu ? (
          <IoCloseSharp className="menu-close text-cyan-50 h-5 w-5" />
        ) : (
          <GiHamburgerMenu className="menu-hamburger text-cyan-50 h-5 w-5" />
        )}
      </div>
      {menu && (
        <div className="flex flex-col px-8 z-50 absolute bottom-0 top-0  left-0 right-1/3 animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg border border-white/10 md:hidden">
          <div className="flex justify-center">
            <Logo />
          </div>
          <Navbar />
        </div>
      )}
    </div>
  );
};
