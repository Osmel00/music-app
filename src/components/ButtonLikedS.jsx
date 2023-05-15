import React from "react";
import { FaHeart } from "react-icons/fa";

export const ButtonLikedS = () => {
  return (
    <div className="flex items-center  space-x-3  hover:bg-[#4c426e]/30  rounded-lg py-4 md:w-56 px-2 cursor-pointer" >
      <div className="icons text-white w-8 h-8 p-2 rounded-sm flex items-center justify-start bg-gradient-to-br from-[#463288] to-violet-400  shadow-2xl">
        <FaHeart size={24} />
      </div>
       <p className="text-slate-400 font-semibold">Liked Songs</p>
    </div>
  );
};
