import React from 'react'
import { fadeDown, } from "../assets/objConstants";
import { useGetChartsByCountryQuery } from "../app/apiServices";
import { motion,AnimatePresence } from "framer-motion"
import { Card } from "../components/Card";
import {useSelector } from "react-redux";
export const AroundYou = () => {
  const{isPlaying , activeSong,search} = useSelector((state) =>state.player)
 
  const {
    data: countryData,
    isLoading,
    isError,
    error,
  } = useGetChartsByCountryQuery('DE');
  if (isLoading)  {
    return "Loading...."
  }
  if (isError) {
    return error.message;
  }
  console.log(countryData);

 
  return (
    <div className="around mx-auto xl:m-0">
      <div className="md:min-w-[calc(95vw_-_14rem)] lg:min-w-[calc(95vw_-_14rem_-_500px)]  pb-12  flex flex-col gap-5 justify-between items-center text-white md:flex-row ">
        <h2 className="text-2xl font-bold xl:ml-[70px] ">Around You </h2>
        </div>
         {/* abajo hago el map y le paso las pro a la card */}
      <AnimatePresence>
      <motion.div
      
      variants={fadeDown}
      initial='hidden'
      animate='visible'
      exit='exit'
      transition={{duration:0.5}}
      className="around__cards lg:h-screen lg:overflow-y-auto flex flex-col gap-8 md:flex-row md:flex-wrap md:gap-4   lg:flex-row lg:flex-wrap xl:px-4 xl:gap-x-5 xl:gap-y-8">
       {countryData.filter(country=>{
          return country.title.toLowerCase().includes(search)
        }).map((song,index) => (
          <Card
            key={song.key}
            img={song?.images?.coverart}
            titleSong={song.title}
            author={song.subtitle}
            song={song}
            data={countryData}
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
