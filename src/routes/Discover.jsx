import React from 'react'
import { Card } from '../components/Card'
//import { GenderSongs } from '../components/GenderSongs'
import { products } from '../assets/objConstants'
export const Discover = () => {
  return (
    <div className='discover mx-auto xl:m-0'>
     
       
       {/* abajo hago el map y le paso las pro a la card */}
         <div className='discover__cards  flex flex-col gap-8 md:flex-row md:flex-wrap md:gap-6  lg:flex-row lg:flex-wrap xl:px-12'>
          {products.map((product) => (
            <Card key={product.id} img={product.imageSrc}  titleSong={product.name} author={product.price}/>
          ))}
          
          </div>
        
    </div>
  )
}
