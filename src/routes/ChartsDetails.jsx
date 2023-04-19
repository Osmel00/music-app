import React from "react";
import { HeaderDetails } from "../components/DetailsComponents/HeaderDetails";
import { useParams } from "react-router";
import { fadeDown } from "../assets/objConstants";
import { motion, AnimatePresence } from "framer-motion";
import {
  useGetChartsByIdQuery,
  useGetChartsRelatedByIdQuery,
} from "../app/apiServices";
import { useSelector } from "react-redux";
import { Charts } from "../components/Charts";
import { Loader } from "../components/Loader";
export const ChartsDetails = () => {
  const { idsong, idartists } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const {
    data: songData,
    isLoading,
    isError,
    error,
  } = useGetChartsByIdQuery(idsong);
  const { data: songRelatedData } = useGetChartsRelatedByIdQuery(idsong);
  if (isLoading) {
    if (isLoading) {
      return (
        (
          <div className="w-screen">
            <Loader title={"Loading songs"} />
          </div>
        ) || "Loading...."
      );
    }
  }
  if (isError) {
    return error.message;
  }
  // console.log(idsong);
  console.log(songRelatedData);
  //  console.log(songData);
  // console.log(idartists);
  return (
    <div className=" pt-8 px-4 md:min-w-[calc(95vw_-_14rem)] lg:min-w-[calc(95vw_-_14rem_-_500px)] lg:h-[calc(100vh_-_11rem)] lg:overflow-y-auto">
      <AnimatePresence>
        <motion.div
          variants={fadeDown}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.5 }}
        >
          <HeaderDetails songData={songData} />

          <div className="lyrics">
            <h2 className="text-white  font-bold md:text-xl lg:text-3xl my-4 lg:my-7">
              Lyrics
            </h2>
            <div>
              {songData?.sections[1].type === "LYRICS" ? (
                songData.sections[1].text.map((textOnLine, index) => {
                  return (
                    <div>
                      {" "}
                      <p
                        key={`${textOnLine.key}-${index}`}
                        className="text-sm font-bold text-gray-600"
                      >
                        {textOnLine}
                      </p>
                    </div>
                  );
                })
              ) : (
                <p className="text-sm font-medium text-gray-300">
                  Sorry! , no lyrics found...
                </p>
              )}
            </div>
          </div>
          <div className="related song">
            <h2 className="text-white  font-bold md:text-xl lg:text-3xl my-4 lg:my-7">
              Related Songs
            </h2>
            <div>
              
              {songRelatedData?.map((item, index) => {
              return (
                 <div key={item.key} className="xl:w-3/4" >
                  <Charts
                   
                    code={index + 1 + "."}
                    index={index}
                    titleSong={item.title}
                    author={item.subtitle}
                    img={item.images?.coverart}
                    song={item}
                    id={item.key}
                    activeSong={activeSong}
                    isPlaying={isPlaying}
                    data={songRelatedData}
                  />
               </div>
               );
              })}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
