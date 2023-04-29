import { React, useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { Logo } from "./Logo";
import { Navbar } from "./Navbar";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ButtonHandleSL } from "./login-register/ButtonLoginRegister";

//import { ButtonHandleSL } from "./login-register/ButtonHandleSL";
export const Header = () => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const handleOnChange = () => {
    if (search) {
      navigate(`/search/${search}`);
    }
  };

  useEffect(() => {
    handleOnChange();
  }, [search]);//xl:py-4 xl:px-16 
  return (
    <div className="py-6 flex w-full items-center justify-between md:p-0  "> 
      <div className="search-container flex  gap-x-2 items-center ">
        <FiSearch className="text-slate-50/60 text-2xl" />
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent outline-none text-cyan-50"
          type="text"
          value={search}
          placeholder="Search"
        />
      </div>
      <ButtonHandleSL/>
      <div onClick={toggleMenu} className="cursor-pointer md:hidden">
        {menu ? (
          <IoCloseSharp className="menu-close text-cyan-50 h-5 w-5" />
        ) : (
          <GiHamburgerMenu className="menu-hamburger text-cyan-50 h-5 w-5" />
        )}
      </div>

      {
        <AnimatePresence>
          <motion.div
            key={menu ? menu : "empty"}
            initial={{ x: -3000 }}
            animate={{ x: menu ? 0 : -3000 }}
            exit={{ x: -3000, transition: { duration: 0.5 } }}
            className="flex flex-col px-8 z-50 absolute h-screen  bottom-0 top-0  -left-5 right-1/3 animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg border border-white/10 md:hidden"
          >
            <div className="flex justify-center">
              <Logo />
            </div>
            <Navbar setMenu={setMenu} />
          </motion.div>
        </AnimatePresence>
      }
    </div>
  );
};
