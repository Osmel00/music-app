import React from 'react'

export const TopArtist = ({img}) => {
  return (
    <div className='flex flex-col'>
        <div className='flex'><p>Top Artist</p> <p>See more</p></div>
        <div className='flex'><img src={img}/></div>
    </div>
  )
}
