import React, { useState, useEffect } from 'react';
import Controls from './Controls';
import Player from './Player';
import Seekbar from './Seekbar';
import Track from './Track';
import VolumeBar from './VolumeBar';
import {useSelector,useDispatch } from "react-redux";
import {playPause } from "../app/features/playerSlice";

const MusicPlayer = () => {
  const{isPlaying , activeSong,currentSongs,isActive, currentIndex } = useSelector((state) =>state.player)  
  const dispatch = useDispatch();
  const [duration, setDuration] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);
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
  
    return (
      <div className="relative sm:px-12 px-8 w-full flex items-center justify-between">
        <Track 
         isPlaying={isPlaying}
         activeSong={activeSong}
         isActive={isActive}
        />
        <div className="flex-1 flex flex-col items-center justify-center">
          <Controls
           isPlaying={isPlaying}
           handlePlayPause={handlePlayPause}
           currentSongs={currentSongs}
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
          />
        </div>
        <VolumeBar min="0" max="1"  />
      </div>
    );
  };
  
  export default MusicPlayer;