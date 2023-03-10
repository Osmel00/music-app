import React, { useState, useEffect } from 'react';
import Controls from './Controls';
import Player from './Player';
import Seekbar from './Seekbar';
import Track from './Track';
import VolumeBar from './VolumeBar';
import {useSelector,useDispatch } from "react-redux";
import {playPause,nextSong,prevSong } from "../app/features/playerSlice";

const MusicPlayer = () => {
  const{isPlaying , activeSong,currentSongs,isActive, currentIndex} = useSelector((state) =>state.player)  
  const dispatch = useDispatch();
  const [duration, setDuration] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [appTime, setAppTime] = useState(0);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  // useEffect(() => {
  //   if (currentSongs.length){
      
  //     dispatch(playPause(true))
  //     console.log('esta entrando');
  //   } 
  // }, [currentIndex]);
  const handlePlayPause = () =>{
    if (currentSongs.length){
      if (isPlaying){
        dispatch(playPause(false));  
      }else{
       dispatch(playPause(true));
      }
    }   
    
  }

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
  
    return (
      <div className="relative sm:px-2 lg:px-8 w-full flex items-center justify-between">
        <Track 
         isPlaying={isPlaying}
         activeSong={activeSong}
         isActive={isActive}
        />
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
           handlePrevSong ={handlePrevSong}
          />
          <Seekbar
          value={appTime}
          min='0'
          max={duration}
          onInput={(event) => setSeekTime(event.target.value)}
          setSeekTime={setSeekTime}
          />
          <Player
            activeSong={activeSong}
            isPlaying={isPlaying}
            onLoadedData={(event) => setDuration(event.target.duration)}
            onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
            seekTime={seekTime}
            volume = {volume}
            repeat={repeat}
          />
        </div>
        <VolumeBar value={volume} min="0" max="1"  onChange={(event) => setVolume(event.target.value)} setVolume={setVolume} />
         
      </div>
    );
  };
  
  export default MusicPlayer;