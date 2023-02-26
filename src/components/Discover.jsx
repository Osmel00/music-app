import React from 'react'
import { Card } from './Card'
import { GenderSongs } from './GenderSongs'

export const Discover = () => {
  return (
    <div>
       <div className='flex'>
         {/* Discover aqui va una variable */}
        <GenderSongs />
       </div>
       
       {/* abajo hago el map y le paso las pro a la card */}
      <div className='flex flex-wrap'>
            <Card/>
        </div>
        
    </div>
  )
}
