import React from "react";
import { Link } from "react-router-dom";
export const HeaderDetails = ({ songData, idartists, artistData }) => {
  return (
    <div className="header w-full flex items-center gap-x-5 ">
      <div className="container-img">
        <img
          alt="profile cover"
          src={
            idartists
              ? artistData?.attributes?.artwork?.url
                  .replace("{w}", "500")
                  .replace("{h}", "500")
              : songData?.images?.coverart
          }
          className=" w-28 h-28 md:w-48 md:h-48 rounded-full object-cover border-2 shadow-xl shadow-black"
        />
      </div>

      <div className="container-info  text-gray-400  w-32 truncate md:w-1/2">
        <p className="text-white  font-bold md:text-xl">
          {idartists ? artistData?.attributes?.name : songData?.title}
        </p>
        <p className="">
          {!idartists && (
            <Link to={`/artistsdetails/${songData?.artists[0]?.adamid}`}>
              <p className="text-base text-gray-400 mt-2">
                {songData?.subtitle}
              </p>
            </Link>
          )}
        </p>

        <p className="">
          {idartists
            ? artistData?.attributes?.genreNames[0]
            : songData?.genres?.primary}
        </p>
      </div>
    </div>
  );
};
