import React, { useState, useEffect } from "react";
import Controls from "./Controls";
import Player from "./Player";
import Seekbar from "./Seekbar";
import Track from "./Track";
import VolumeBar from "./VolumeBar";
import { useSelector, useDispatch } from "react-redux";
import { playPause, nextSong, prevSong } from "../app/features/playerSlice";
import { AddSongHearts } from "./AddSongHearts";
import { FetchSong } from "../assets/useFetchSong";
const MusicPlayer = ({ hidden }) => {
  const { isPlaying, activeSong, currentSongs, isActive, currentIndex } =
    useSelector((state) => state.player);
  const { profile } = useSelector((state) => state.authUser);
  const dispatch = useDispatch();
  const [duration, setDuration] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [appTime, setAppTime] = useState(0);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    setIsLiked(false);
  }, [activeSong]);
  const handlePlayPause = () => {
    if (currentSongs.length) {
      if (isPlaying) {
        dispatch(playPause(false));
      } else {
        dispatch(playPause(true));
      }
    }
  };

  const handleNextSong = () => {
    //dispatch(playPause(false));

    if (!shuffle) {
      dispatch(nextSong((currentIndex + 1) % currentSongs.length));
    } else {
      dispatch(nextSong(Math.floor(Math.random() * currentSongs.length)));
    }
  };
  const handlePrevSong = () => {
    if (currentIndex === 0) {
      dispatch(prevSong(currentSongs.length - 1));
    } else if (shuffle) {
      dispatch(prevSong(Math.floor(Math.random() * currentSongs.length)));
    } else {
      dispatch(prevSong(currentIndex - 1));
    }
  };
  //*estoy aqui
  const handleSongHeart = () => {
    const urlLiked = "https://api-rest-node-express.up.railway.app/api/v1/auth/songs";
    const urlDisLiked = "https://api-rest-node-express.up.railway.app/api/v1/auth/removeSongsLiked";
    if (!isLiked) {
      FetchSong({ userId: profile.user.id, activeSong }, urlLiked);
    } else {
      FetchSong({ id: profile.user.id, songKey: activeSong.key }, urlDisLiked);
    }
    setIsLiked(!isLiked);
    console.log(activeSong, profile);
    
  };
  return (
    <div className="relative sm:px-2 lg:px-8 w-full flex items-center justify-between">
      <div className="flex items-center w-56 md:w-96 md:gap-3 lg:w-80">
        <Track
          isPlaying={isPlaying}
          activeSong={activeSong}
          isActive={isActive}
        />

        {hidden && (
          <AddSongHearts handleSongHeart={handleSongHeart} isLiked={isLiked} />
        )}
      </div>

      <div className="flex-1 flex flex-col items-center justify-center ">
        <Controls
          isPlaying={isPlaying}
          handlePlayPause={handlePlayPause}
          currentSongs={currentSongs}
          repeat={repeat}
          setRepeat={setRepeat}
          shuffle={shuffle}
          setShuffle={setShuffle}
          handleNextSong={handleNextSong}
          handlePrevSong={handlePrevSong}
        />
        <Seekbar
          value={appTime}
          min="0"
          max={duration}
          onInput={(event) => setSeekTime(event.target.value)}
          setSeekTime={setSeekTime}
        />
        <Player
          activeSong={activeSong}
          isPlaying={isPlaying}
          onLoadedData={(event) => setDuration(event.target.duration)} //take the total duration of the song
          onTimeUpdate={(event) => setAppTime(event.target.currentTime)} //take the current time of the song
          seekTime={seekTime}
          volume={volume}
          repeat={repeat}
        />
      </div>
      <VolumeBar
        value={volume}
        min="0"
        max="1"
        onChange={(event) => setVolume(event.target.value)}
        setVolume={setVolume}
      />
    </div>
  );
};

export default MusicPlayer;
