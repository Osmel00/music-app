import React from 'react'
import { fadeDown, } from "../assets/objConstants";
import { useGetTopChartsQuery } from "../app/apiServices";
import { motion,AnimatePresence } from "framer-motion"
import { Card } from "../components/Card";
import {useSelector } from "react-redux";
import { Loader } from '../components/Loader';

export const TopArtist = () => {
  const{isPlaying , activeSong,} = useSelector((state) =>state.player)
 
  const {
    data: topArtist,
    isLoading,
    isError,
    error,
  } = useGetTopChartsQuery();
  if (isLoading) {
    return(
      <div className="w-screen">
        <Loader title={"Loading top artists"} />;
      </div>
    ) 
    
  }
  if (isError) {
    return error.message;
  }
  console.log(topArtist);
  return (
    <div className="artists mx-auto xl:m-0">
    <div className="md:min-w-[calc(95vw_-_16rem)] lg:min-w-[calc(95vw_-_14rem_-_500px)]  pb-12  flex flex-col gap-5 justify-between items-center text-white md:flex-row">
      <h2 className="text-2xl font-bold xl:ml-[70px] ">Top Artists </h2>
      </div>
       {/* abajo hago el map y le paso las pro a la card */}
    <AnimatePresence>
    <motion.div
    
    variants={fadeDown}
    initial='hidden'
    animate='visible'
    exit='exit'
    transition={{duration:0.5}}
    className="artists__cards   flex flex-col gap-8 md:flex-row md:flex-wrap md:gap-4 lg:h-[calc(100vh_-_18rem)] lg:overflow-y-auto  lg:flex-row lg:flex-wrap xl:px-4 xl:gap-x-5 xl:gap-y-8">
     {topArtist.map((song,index) => (
        <Card
          key={song.key}
          img={song?.images?.coverart}
         // titleSong={song.title}
          author={song.subtitle}
          song={song}
          data={topArtist}
          id={song.key}
          activeSong={activeSong}
          isPlaying={isPlaying}
          index={index}
        />
      ))}
    </motion.div>
    </AnimatePresence>
  </div>
  )
}
