import React from "react";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

export const AddSongHearts = ({ isLiked, handleSongHeart }) => {
  return (
    <>
      {isLiked ? (
        <FaHeart onClick={handleSongHeart} size={30} color="#1CDF63" />
      ) : (
        <FiHeart onClick={handleSongHeart} size={30} color="white" />
      )}
    </>
  );
};
