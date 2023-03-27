import React from 'react'
import img from'../images/loader.svg'
export const Loader = ({title}) => {
  return (
     <div className='w-full flex justify-start items-center  '>
      <img className='w-40 h-40' src={img} alt='loader'/>
      <h2 className='font-bold text-2xl text-white mt-2'>{title || 'Loading'}</h2>
      </div>
  )
}
