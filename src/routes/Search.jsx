
import React from 'react'
import { fadeDown, } from "../assets/objConstants";
import { useGetMultiSearchQuery } from "../app/apiServices";
import { motion,AnimatePresence } from "framer-motion"
import { Card } from "../components/Card";
import {useSelector } from "react-redux";
import { Loader } from '../components/Loader';
import { useParams } from 'react-router';
export const Search = () => {
    const{isPlaying , activeSong,} = useSelector((state) =>state.player)
    const {searchparams } = useParams();
    const {
      data: dataSearch,
      isLoading,
      isError,
      error,
    } = useGetMultiSearchQuery(searchparams);
    const songsSearch = dataSearch?.tracks?.hits.map((song) => song.track);

    if (isLoading) {
      return(
        <div className="w-screen">
          <Loader title={`Searching ${searchparams}...`} />;
        </div>
      ) 
      
    }
    if (isError) {
      return error.message;
    }
    console.log(songsSearch);
   
 
    return (
        <div className="search mx-auto xl:m-0">
        <div className="md:min-w-[calc(95vw_-_16rem)] lg:min-w-[calc(95vw_-_14rem_-_500px)]  pb-12  flex flex-col gap-5 justify-between items-center text-white md:flex-row">
          <h2 className="text-2xl font-bold xl:ml-[70px] ">Search all files </h2>
          </div>
           {/* abajo hago el map y le paso las pro a la card */}
        <AnimatePresence>
        <motion.div
        
        variants={fadeDown}
        initial='hidden'
        animate='visible'
        exit='exit'
        transition={{duration:0.5}}
        className="around__cards   flex flex-col gap-8 md:flex-row md:flex-wrap md:gap-4 lg:h-[calc(100vh_-_18rem)] lg:overflow-y-auto  lg:flex-row lg:flex-wrap xl:px-4 xl:gap-x-5 xl:gap-y-8">
         {songsSearch?.map((song,index) => (
            <Card
              key={song.key}
              img={song?.images?.coverart}
              titleSong={song.title}
              author={song.subtitle}
              song={song}
              data={songsSearch}
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
