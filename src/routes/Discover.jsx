import {React,useState,useEffect} from "react";
import { Card } from "../components/Card";
import { genres,fadeDown, } from "../assets/objConstants";
import { useGetChartsByGerneQuery } from "../app/apiServices";
import { motion,AnimatePresence } from "framer-motion"
import { products } from "../assets/objConstants";
import { Loader } from "../components/Loader";
import {useSelector } from "react-redux";

export const Discover = () => {
 const{isPlaying , activeSong, } = useSelector((state) =>state.player)
  const[genreDisc,setGenreDisc] = useState('POP');
  const fadeDown = {
    hidden:{opacity:0,y:100},
    visible:{opacity:1,y:0},
    exit:{opacity:0,y:100},
  }
  
  const {
    data: discoverData,
    isLoading,
    isError,
    error,
  } = useGetChartsByGerneQuery(genreDisc);
  if (isLoading) {
    return(
      <div className="w-screen">
        <Loader title={"Loading discover"} />;
      </div>
    ) 
    
  }
  if (isError) {
    return error.message;
  }

  const findGenre = (genre) =>{
    let found;
    genres.forEach(item =>{
      if(item.value===genre){
        found = item.title;
        return;
      }
    })
    return found;
  }
 
  return (
    <div className="discover mx-auto xl:m-0 mb-52">
      <div className="md:min-w-[calc(95vw_-_16rem)] lg:min-w-[calc(95vw_-_14rem_-_500px)]  pb-12  flex flex-col gap-5 justify-between items-center text-white md:flex-row ">
        <h2 className="text-2xl font-bold xl:ml-[70px]  ">{`Discover ${findGenre(genreDisc)}`} </h2>
        <select onChange={(e)=>setGenreDisc(e.target.value) } className=" bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5 xl:mr-[70px]">
          {genres.map((item) => {
            return (
              <option key={item.value} value={item.value}>
                {item.title}
              </option>
            );
          })}
        </select>
      </div>

      {/* abajo hago el map y le paso las pro a la card */}
      <AnimatePresence>
      <motion.div
      key={genreDisc? genreDisc:'empty'}
      variants={fadeDown}
      initial='hidden'
      animate='visible'
      exit='exit'
      transition={{duration:0.5}}
      className="discover__cards   flex flex-col gap-8 md:flex-row md:flex-wrap md:gap-4 lg:h-[calc(100vh_-_18rem)] lg:overflow-y-auto  lg:flex-row lg:flex-wrap xl:px-4 xl:gap-x-5 xl:gap-y-8">
        {discoverData.map((song,index) => (
          <Card
            key={song.key}
            img={song?.images?.coverart}
            titleSong={song.title}
            author={song.subtitle}
            song={song}
            data={discoverData}
            id={song.key}
            activeSong={activeSong}
            isPlaying={isPlaying}
            index={index}
          />
        ))}
      </motion.div>
      </AnimatePresence>
    </div>
  );
};
