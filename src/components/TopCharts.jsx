import React from "react";
import { FaPlay } from "react-icons/fa";
export const TopCharts = ({ img, titleSong, author }) => {
  return (
    <div>
      <div>
        <p>Top Charts</p>
        <p>See more</p>
      </div>
      <div>
        <img src={img} alt="img song" />
        <div>
          <p>{titleSong}</p>
          <p>{author}</p>
        </div>
      </div>
      <div>
        <div className="w-[40px] h-[40px] border">
          <FaPlay />
        </div>
      </div>
    </div>
  );
};
