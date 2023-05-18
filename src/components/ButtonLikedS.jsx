import React from "react";
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router";

export const ButtonLikedS = () => {
  const navigate = useNavigate()
  const { profile, isLogin } = useSelector((state) => state.authUser);
  const { enqueueSnackbar } = useSnackbar();
  const sendMessage = () => {
    if (!profile.user && !isLogin) {
      const message =
        "Log in to see all the songs've liked in one easy playlist";
       return enqueueSnackbar(message, {
        variant: "info", //variant="success",error,info,warning,
      });
    }
    navigate('/collection/tracks');
    
   
  };
  return (
    <div
      onClick={sendMessage}
      className=" flex items-center  space-x-3  hover:bg-[#4c426e]/30  rounded-lg py-4 md:w-56 px-2 cursor-pointer"
    >
      <div className="icons text-white w-8 h-8 p-2 rounded-sm flex items-center justify-start bg-gradient-to-br from-[#463288] to-violet-400  shadow-2xl">
        <FaHeart size={24} />
      </div>
      <p className="text-slate-400 font-semibold">Liked Songs</p>
    </div>
  );
};
