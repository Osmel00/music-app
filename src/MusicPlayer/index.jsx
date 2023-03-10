import React, { useState, useEffect } from 'react';
import Controls from './Controls';
import Player from './Player';
import Seekbar from './Seekbar';
import Track from './Track';
import VolumeBar from './VolumeBar';
import {useSelector,useDispatch } from "react-redux";
import {playPause } from "../app/features/playerSlice";

const MusicPlayer = () => {
  const{isPlaying , activeSong,currentSongs,currentIndex } = useSelector((state) =>state.player)  
  const dispatch = useDispatch();
  // useEffect(() => {
  //   if (currentSongs.length){
      
  //     dispatch(playPause(true))
  //     console.log('esta entrando');
  //   } 
  // }, [currentIndex]);
  
  
    return (
      <div className="relative sm:px-12 px-8 w-full flex items-center justify-between">
        <Track />
        <div className="flex-1 flex flex-col items-center justify-center">
          <Controls
          
          />
          <Seekbar
          
          />
          <Player
            activeSong={activeSong}
            isPlaying={isPlaying}
          />
        </div>
        <VolumeBar min="0" max="1"  />
      </div>
    );
  };
  
  export default MusicPlayer;