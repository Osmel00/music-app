import React from "react";

export const Card = ({ img, titleSong, author }) => {
  return (
    <div className=" shadow-2xl py-4 px-4  lg:m-0 bg-gradient-to-br from-white/5 to-[#033649]/10 backdrop-blur-xl rounded-xl ">
     
        <div className="w-52 xl:w-64" >
          <div className="mx-auto overflow-hidden rounded-lg bg-gray-200 ">
            <img
              src={img}
              alt="cover"
              className="w-52 h-52 xl:w-64 xl:h-64 object-cover"/>
          </div>
          <h3 className="mt-4 text-lg text-white/90 font-bold max-w-[192px] ">{titleSong}</h3>
          <p className="mt-1 text-sm font-medium text-gray-300 md:w-52">{author}</p>
        </div>
      
    </div>
  );
};
