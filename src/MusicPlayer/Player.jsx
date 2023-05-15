
import React, { useRef, useState, useEffect } from "react";
import {useSelector,useDispatch } from "react-redux";
import {playPause } from "../app/features/playerSlice";
const Player = ({
  activeSong,
  isPlaying,
  volume,
  seekTime,
  onTimeUpdate,
  onLoadedData,
  repeat,
}) => {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const [onEnded, setOnEnded] = useState(false);
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
  },[activeSong,isPlaying,onEnded]);
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
      onEnded={() => setOnEnded(!onEnded)}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    />
  );
};

export default Player;
