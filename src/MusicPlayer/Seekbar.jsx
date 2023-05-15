import React from 'react';

const Seekbar = ({ value, min, max, onInput, setSeekTime, appTime }) => {
  // converts the time to format 0:00
  const getTime = (time) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`;
 
 //console.log(value)
  return (
    <div className="hidden sm:flex flex-row items-center">
      
      <p className="text-white w-9">{value === 0 ? '0:00' : getTime(value)}</p>
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onInput={onInput}
        className="md:block w-12  md:w-56 xl:w-96 h-1 mx-1 xl:mx-6 rounded-lg"
      />
       
     
      <p className="text-white">{max === 0 ? '0:00' : getTime(max)}</p>
      
    </div>
  );
};

export default Seekbar;