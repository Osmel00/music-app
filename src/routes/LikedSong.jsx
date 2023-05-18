import React,{useEffect,useState} from "react";
import { Lsongs } from "../components/Lsongs";
import { AvatarLogin } from "../components/login-register/AvatarLogin";
import { useSelector,useDispatch } from "react-redux";
import MusicPlayer from ".././MusicPlayer/index";
import { Logo } from "../components/Logo";
import { Navbar } from "../components/Navbar";
import { Header } from "../components/Header";
import {FaHeart} from "react-icons/fa";
import { useGetLikedSongsQuery } from "../app/apiAuthUser";
import { useGetGoogleUsersQuery, useGetUsersQuery } from "../app/apiAuthUser"; 
import { setCredentials, setIsLogin } from "../app/features/authUserSlice";

export const LikedSong = () => {
  const dispatch = useDispatch();
  const [onHeard, setOnHeard] = useState(true);
  const { data: socialData , isLoading, isError, error,isSuccess:isSuccessSocial,} = useGetGoogleUsersQuery();
  const { data: userData,isSuccess:isSuccessUser, } = useGetUsersQuery();
  const {profile,isLogin } = useSelector((state) => state.authUser);
  const { data,refetch } = useGetLikedSongsQuery(profile?.user?.id);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const dataSong = data?.data;
  //const newData = refetch().then((res) => res.data);
 //console.log("data :",dataSong);
  const updateUserState = () => {
    if (userData && !userData.Error) {
      dispatch(setCredentials(userData));
      dispatch(setIsLogin({ isLogin: true }));
    } else if (socialData && !socialData.Error) {
      dispatch(setCredentials(socialData));
      dispatch(setIsLogin({ isLogin: true }));
    }
  };
  //console.log(dataSong);
  useEffect(()=>{
    refetch();
   
   },[])
  if (isLoading) {
    return (
      (
        <div className="w-screen bg-gradient-to-r from-black to-[#030d4f] ">
          {" "}
        </div>
      ) || "Loading...."
    );
  }
  if(isSuccessSocial || isSuccessUser){
    updateUserState();
    
   
  }

  if (isError) {
    return error.message;
  }
  console.log(onHeard)
  console.log("login :",isLogin , "profile :",profile)
  return (
    <div className="main-container relative  min-h-screen px-3 md:p-0 likedSong-container bg-gradient-to-r from-black to-[#030d4f]  md:grid   md:grid-cols-[max-content_1fr] md:grid-rows-[max-content_1fr] ">
      <div className="header-container md:hidden">
        <Header isLikedSongs={true}/>
      </div>

      <div className="sidebar hidden md:block w-[300px] row-start-1 row-end-3 bg-[#13141a]/70">
        <Logo />
        <Navbar />
      </div>

      <div className="avatar-container px-4 md:relative md:px-6  md:h-auto   md:bg-gradient-to-b from-[#463288] to-[#010623] ">
        <div className="avatar flex items-center gap-7 md:absolute md:top-5 md:right-5 ">
           <p className=" md:hidden text-white font-bold text-2xl"> Your Library</p>
           <div className="hidden md:block"><AvatarLogin /> </div>
          
        </div>
        <div className="header-container hidden md:flex gap-x-3 xl:gap-8 md:py-10 h-auto text-white">
              <div className="icons w-48 h-48 xl:w-60 xl:h-60 flex items-center justify-center bg-gradient-to-br from-[#463288] to-violet-400  shadow-2xl"><FaHeart size={75}/></div>
              <div className="font-bold self-end h-auto">
                <p className="text-sm lg:text-base">Playlist</p>
                <h1 className="text-3xl lg:text-6xl xl:text-8xl pt-3">Liked Songs</h1>
                <p className="text-sm lg:text-base pt-10">Osmel Faure</p> {/** aqui cantidad de canciones y el nombre del usuario */}
                
              </div>
           </div>
        
      </div>
      <div className="likedSong-container overflow-y-auto h-[75vh] md:h-[60vh] xl:h-[57vh]">
      <p className="text-white font-bold text-xl pt-10">Liked Songs</p>
      {dataSong?.map((item, index) => {
        
        
        return (
          <div key={item.key + index}>
            {" "}
            <Lsongs
              code={index + 1 + "."}
              index={index}
              titleSong={item.title}
              author={item.subtitle}
              img={item.images?.coverart}
              song={item}
              id={item.key}
              activeSong={activeSong}
              isPlaying={isPlaying}
              data={dataSong}
              setOnHeard={setOnHeard}
              
            />
          </div>
        );
      })}
      </div>
      {activeSong?.title && (
        <div className="flex  absolute h-28 bottom-0 left-0 right-0 animate-slideup bg-gradient-to-br from-white/10 to-[#031634] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer hidden={false} />
        </div>
      )}
    </div>
  );
};
