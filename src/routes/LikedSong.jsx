import React from "react";
import { Lsongs } from "../components/Lsongs";
import { AvatarLogin } from "../components/login-register/AvatarLogin";
import { useGetTopChartsQuery } from "../app/apiServices";
import { useSelector } from "react-redux";

export const LikedSong = () => {
  const { data: topChart, isLoading, isError, error } = useGetTopChartsQuery();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const topChart6 = topChart?.slice(0, 6);
  return (
    <div className=" px-3 py-6  likedSong-container bg-gradient-to-r from-black to-[#030d4f] min-h-screen">
      <div className="header-container  flex items-center">
        <AvatarLogin />
        <p className="text-white font-bold text-2xl"> Your Library</p>
      </div>
      <p className="text-white font-bold text-xl pt-10">Liked Songs</p>
      {topChart6
        ?.filter((element, index) => {
          return element.hub.actions !== undefined;
        })
        .map((item, index) => {
          return (
            <div key={item.key}>
              {" "}
              <Lsongs
                code={index + 1 + "."}
                index={index}
                titleSong={item.title}
                author={item.subtitle}
                img={item.images?.coverart}
                song={item}
                id={item.key}
                activeSong={activeSong}
                isPlaying={isPlaying}
                data={topChart6}
              />
            </div>
          );
        })}
    </div>
  );
};
