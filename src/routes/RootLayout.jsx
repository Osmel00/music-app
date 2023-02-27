import { useState, useEffect } from "react";
import { Header } from "../components/Header";
import MusicPlayer from "../MusicPlayer/index";
import { Charts } from "../components/Charts";

import { useGetTopChartsQuery } from "../app/apiServices";
import { Artist } from "../components/Artist";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
export const RootLayout = () => {
  const { data: topChart, isLoading, isError, error } = useGetTopChartsQuery();

  if (isLoading) return "Loading....";
  if (isError) {
    return error.message;
  }
  const topChart5 = topChart.slice(0, 5);

  console.log(topChart);

  return (
    <div className="main-container h-screen   bg-gradient-to-br from-black to-[#121286] min-w-[375px] px-5">
      <Header />
      <div className="flex justify-between items-center text-white">
        <h2 className="text-2xl font-bold pb-2">Top Charts</h2>
        <p className="text-white/60 ">See more</p>
      </div>

      {topChart5?.map((item, index) => {
        return (
          <div key={item.key}>
            <Charts
              index={index + 1 + "."}
              titleSong={item.title}
              author={item.subtitle}
              img={item.images?.coverart}
            />
          </div>
        );
      })}
      <div className="flex justify-between items-center text-white">
        <h2 className="text-2xl font-bold pb-2">Top Artists</h2>
        <p className="text-white/60 ">See more</p>
      </div>
      <Swiper
      slidesPerView="auto"
      spaceBetween={15}
      freeMode
      centeredSlides
      centeredSlidesBounds
      modules={[FreeMode]}
      className="mt-4"
    >
      {topChart5?.map((item, index) => {
         return <SwiperSlide  key={item.key} className="shadow-lg rounded-full animate-slideright"
          style={{ width: '25%', height: 'auto' }}>
          
          <div>
            <Artist
              img={item.images?.background}
            />
          </div>
        </SwiperSlide>
      }
      )}
       </Swiper>
      
      <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
        <MusicPlayer />
      </div>
    </div>
  );
};

