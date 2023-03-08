/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useEffect } from 'react';

const Player = ({ activeSong, isPlaying, volume, seekTime, onEnded, onTimeUpdate, onLoadedData, repeat }) => {
  const ref = useRef(null);
  // eslint-disable-next-line no-unused-expressions
  if (ref.current) {
   if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }
  
 

  return (
    <audio
      src={activeSong?.hub?.actions[1]?.uri}
      ref={ref}
      // loop={repeat}
      // onEnded={onEnded}
      // onTimeUpdate={onTimeUpdate}
      // onLoadedData={onLoadedData}
    />
  );
};

export default Player;