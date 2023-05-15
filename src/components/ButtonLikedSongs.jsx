import React from 'react'
import { FaHeart } from 'react-icons/fa'

export const ButtonLikedSongs = () => {
  return (
    <div className='border'>
         <div className="icons w-4 h-4 xl:w-60 xl:h-60 flex items-center justify-center bg-gradient-to-br from-[#463288] to-violet-400  shadow-2xl"><FaHeart size={10}/></div>
    </div>
  )
}
