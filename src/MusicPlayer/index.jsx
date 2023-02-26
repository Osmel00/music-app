import React, { useState, useEffect } from 'react';
import Controls from './Controls';
import Player from './Player';
import Seekbar from './Seekbar';
import Track from './Track';
import VolumeBar from './VolumeBar';

const MusicPlayer = () => {
    
  
    
  
   
  
    return (
      <div className="relative sm:px-12 px-8 w-full flex items-center justify-between">
        <Track />
        <div className="flex-1 flex flex-col items-center justify-center">
          <Controls
          
          />
          <Seekbar
          
          />
          <Player
           
          />
        </div>
        <VolumeBar min="0" max="1"  />
      </div>
    );
  };
  
  export default MusicPlayer;