import {React,useState,useEffect} from "react";
import { Card } from "../components/Card";
import { genres } from "../assets/objConstants";
import { useGetChartsByGerneQuery } from "../app/apiServices";
import { motion,AnimatePresence } from "framer-motion"
import { products } from "../assets/objConstants";
import { Loader } from "../components/Loader";

export const Discover = () => {
  const[genreDisc,setGenreDisc] = useState('POP');
  const fadeDown = {
    hidden:{opacity:0,y:100},
    visible:{opacity:1,y:0},
  }
  
  const {
    data: discoverData,
    isLoading,
    isError,
    error,
  } = useGetChartsByGerneQuery(genreDisc);
  if (isLoading)  {
    return "Loading...."
  }
  if (isError) {
    return error.message;
  }

  return (
    <div className="discover mx-auto xl:m-0">
      <div className="pb-12  flex flex-col gap-5 justify-between items-center text-white md:flex-row">
        <h2 className="text-2xl font-bold xl:ml-[70px] ">Discover</h2>
        <select onChange={(e)=>setGenreDisc(e.target.value) } className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5 xl:mr-[70px]">
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
      transition={{duration:1}}
      className="discover__cards  flex flex-col gap-8 md:flex-row md:flex-wrap md:gap-4   lg:flex-row lg:flex-wrap xl:px-4 xl:gap-5">
        {discoverData.map((chart) => (
          <Card
            key={chart.key}
            img={chart?.images?.coverart}
            titleSong={chart.title}
            author={chart.subtitle}
          />
        ))}
      </motion.div>
      </AnimatePresence>
    </div>
  );
};
