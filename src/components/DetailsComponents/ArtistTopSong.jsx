import React from 'react'

export const ArtistTopSong = ({data,code}) => {
  return (
    <div className="topSong-artist py-2 text-white  mb-2  hover:bg-[#4c426e]/50 rounded-lg cursor-pointer  ">
    <div className="wrapper flex justify-between items-center px-4">
      <div className="flex items-center gap-2 w-[240px] md:w-72 ">
        <p>{code}</p>
        <img
          className="object-cover h-16 w-16 rounded-lg shadow-2xl shadow-indigo-500/30 "
          src={data.attributes?.artwork?.url}
          alt="img"
        />

        <div className="flex flex-col flex-wrap ">
          <h3 className="text-base font-bold capitalize hover:text-blue-400 max-w-[192px] xl:max-w-max truncate">{data?.attributes?.name}</h3>
         <p className="text-white/60 text-xs capitalize  hover:text-blue-400"> { data?.attributes?.albumName}</p>
        </div>
      </div>

      
    </div>
  </div>
  )
}
