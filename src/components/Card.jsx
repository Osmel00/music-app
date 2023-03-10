import { useState, React } from "react";
import { FaPlay } from "react-icons/fa";
import { IoPauseSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { setActiveSong, playPause } from "../app/features/playerSlice";
import { motion, AnimatePresence } from "framer-motion";

export const Card = ({
  img,
  index,
  titleSong,
  author,
  song,
  activeSong,
  isPlaying,
  data,
  id: key,
}) => {
  const dispatch = useDispatch();
  const [showMessage, setShowMessage] = useState(false);
  const handlePlay = () => {
    dispatch(setActiveSong({ song, key, data, index }));
    dispatch(playPause(true));
  };
  const handlePause = () => {
    dispatch(playPause(false));
  };

  return (
    <div
      onMouseEnter={() => {
        setShowMessage(true);
      }}
      onMouseLeave={() => {
        setShowMessage(false);
      }}
      className="  shadow-2xl py-4 px-4 lg:m-0 backdrop-blur-lg rounded-xl  relative h-72 xl:h-80"
    >
      <div className="w-52 xl:w-64">
        <div className="mx-auto overflow-hidden rounded-lg bg-gray-200 ">
          <img
            src={img}
            alt="cover"
            className="w-52 h-52 xl:w-64 xl:h-64 object-cover shadow-2xl"
          />
        </div>
        <h3 className="mt-4 text-lg text-white/90 font-bold max-w-[192px] xl:max-w-[280px] truncate">
          {titleSong}
        </h3>
        <p className="mt-1 text-sm font-medium text-gray-300 md:w-52 truncate">
          {author}
        </p>
      </div>
      <div className="overlayer opacity-0 absolute top-0 left-0 right-0 bottom-0 transition-all bg-black/40 hover:opacity-100 hover:cursor-pointer"></div>
      <AnimatePresence>
        {(showMessage || (isPlaying && activeSong.key === key)) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.25 }}
            exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
            className=" z-10 absolute right-10 bottom-24 flex justify-center items-center p-4 w-[50px] h-[50px] rounded-full bg-[#5663b9]  text-xl cursor-pointer"
          >
            {isPlaying && activeSong.key === key ? (
              <IoPauseSharp size={280} onClick={handlePause} />
            ) : (
              <FaPlay size={280} onClick={handlePlay} />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
