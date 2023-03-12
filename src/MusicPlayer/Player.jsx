/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useState, useEffect } from "react";
import {useSelector,useDispatch } from "react-redux";
import {playPause } from "../app/features/playerSlice";
const Player = ({
  activeSong,
  isPlaying,
  volume,
  seekTime,
  onEnded,
  onTimeUpdate,
  onLoadedData,
  repeat,
}) => {
  const ref = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (ref.current) {
      if (isPlaying) {
       if(ref.current.ended){
        console.log('termino la cancion')
        ref.current.currentTime = 0;
        dispatch(playPause(false)); 
        return;
      } 
        ref.current.play();
      } else {
        ref.current.pause();
      }
    }
  });
  useEffect(() => {
    ref.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    ref.current.currentTime = seekTime;
  }, [seekTime]);

  return (
    <audio
      src={activeSong?.hub?.actions[1]?.uri}
      ref={ref}
       loop={repeat}
      // onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    />
  );
};

export default Player;
