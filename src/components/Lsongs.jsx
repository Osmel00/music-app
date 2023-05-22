import { FaPlay } from "react-icons/fa";
import { IoPauseSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { setActiveSong, playPause } from "../app/features/playerSlice";
import { Link } from "react-router-dom";
import { AddSongHearts } from "../MusicPlayer/AddSongHearts";
import { FetchSong } from "../assets/useFetchSong";

export const Lsongs = ({
  img,
  titleSong,
  author,
  code,
  index,
  activeSong,
  data,
  song,
  isPlaying,
  id: key,
  setOnHeard,
  onHeard,
  profile,
  refetch,
}) => {
  const dispatch = useDispatch();
  const handlePlay = () => {
    dispatch(setActiveSong({ song, key, data, index }));
    dispatch(playPause(true));
  };
  const handlePause = () => {
    dispatch(playPause(false));
  };

  const handleSongHeart = async () => {
    const urlDisLiked = "https://api-rest-node-express.up.railway.app/api/v1/auth/removeSongsLiked";
    const data = { id: profile.user.id, songKey: key };
    const fetch = await FetchSong(data,urlDisLiked);
    if (fetch){setOnHeard(!onHeard)}
    
    
  };
  return (
    <div className="main-container-movil mt-6  ">
      <div className="songs-container-item flex justify-between items-center hover:bg-[#4c426e]/50 rounded-lg cursor-pointer p-3 ">
        <div className="songs-img-title-container text-white wrapper flex items-center gap-4 ">
          <p>{code}</p>
          <img
            className="object-cover h-16 w-16 rounded-lg shadow-2xl shadow-indigo-500/30 "
            src={img}
            alt="img"
          />
          <div className="flex flex-col flex-wrap ">
            <Link to={`/songsdetails/${key}`}>
              {" "}
              <h3 className="text-base font-bold capitalize hover:text-blue-400 w-32  md:w-72 lg:w-96 truncate ">
                {titleSong}
              </h3>
            </Link>
            <Link
              to={
                song.artists
                  ? `/artistsdetails/${song?.artists[0]?.adamid}`
                  : null
              }
            >
              {" "}
              <p className="text-white/60 text-xs capitalize  hover:text-blue-400">
                {author}
              </p>
            </Link>
          </div>
        </div>

        <div className="conteiner-play-pause-ilike flex gap-6 ">
          <AddSongHearts handleSongHeart={handleSongHeart} isLiked={true} />

          <div className="flex justify-center items-center w-[35px] h-[35px] rounded-full bg-white/70 text-[#2a2a80] cursor-pointer ">
            {isPlaying && activeSong.key === key ? (
              <IoPauseSharp onClick={handlePause} />
            ) : (
              <FaPlay onClick={handlePlay} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
