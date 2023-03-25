import React from 'react'
import { useParams } from 'react-router'
import { HeaderDetails } from '../components/DetailsComponents/HeaderDetails'
import { useGetArtistsByIdQuery } from '../app/apiServices'
import { fadeDown } from "../assets/objConstants";
import { motion, AnimatePresence } from "framer-motion";
import { ArtistTopSong } from '../components/DetailsComponents/ArtistTopSong';
export const ArtistsDetails = () => {
  const {  idartists } = useParams();
  //const { activeSong, isPlaying } = useSelector((state) => state.player);
  const {
    data:artistData ,
    isLoading,
    isError,
    error,
  } = useGetArtistsByIdQuery(idartists);
  if (isLoading)  {
    return "Loading...."
  }
  if (isError) {
    return error.message;
  }
  console.log(artistData.data[0]);
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
      <HeaderDetails idartists={idartists} artistData={artistData.data[0]} />
      <div className="related song">
      <h2 className="text-white  font-bold md:text-xl lg:text-3xl my-4 lg:my-7">
              Related Songs
            </h2>
        <div>
          //aqui va el componente 'TOP-SONGS'
          {artistData.data[0].views['top-songs']?.data?.map((topSong,index) =>{
            return <div>
               <ArtistTopSong data={topSong} code={index+1} />
            </div>
          })}
        </div>
      </div>
      </motion.div>
      </AnimatePresence>
    </div>
  )
}


//{name: 'apple', type: 'uri', uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/A…607597b8/mzaf_13301685476210208486.plus.aac.p.m4a'}