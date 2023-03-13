import React from "react";
import { FaPlay } from "react-icons/fa";
export const Charts = ({ img, titleSong, author, index }) => {
  return (
    <div className="top-charts-container py-2 text-white  mb-2  hover:bg-[#4c426e]/50 rounded-lg cursor-pointer  ">
      <div className="wrapper flex justify-between items-center px-4">
        <div className="flex items-center gap-2 w-[240px] md:w-72 ">
          <p>{index}</p>
          <img
            className="object-cover h-16 w-16 rounded-lg shadow-2xl shadow-indigo-500/30 "
            src={img}
            alt="img"
          />

          <div className="flex flex-col flex-wrap ">
            <h3 className="text-base font-bold capitalize">{titleSong}</h3>
            <p className="text-white/60 text-xs capitalize">{author}</p>
          </div>
        </div>

        <div className=" flex justify-center items-center w-[35px] h-[35px] rounded-full bg-white/70 text-[#2a2a80] cursor-pointer ">
          <FaPlay />
        </div>
      </div>
    </div>
  );
};
