import React from "react";

export const Card = ({ img, titleSong, author }) => {
  return (
    <div className=" shadow-2xl py-6 px-4  lg:m-0 bg-gradient-to-br from-white/5 to-[#033649]/10 backdrop-blur-xl rounded-xl ">
     
        <div>
          <div className=" overflow-hidden rounded-lg bg-gray-200 ">
            <img
              src={img}
              alt="cover"
              className="w-48 h-48 xl:w-56 xl:h-56 object-cover"/>
          </div>
          <h3 className="mt-4 text-lg text-white/90 font-bold max-w-[192px] ">{titleSong}</h3>
          <p className="mt-1 text-sm font-medium text-gray-300">{author}</p>
        </div>
      
    </div>
  );
};
