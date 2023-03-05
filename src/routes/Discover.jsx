import React from 'react'
import { Card } from '../components/Card'
//import { GenderSongs } from '../components/GenderSongs'
import { useGetTopChartsQuery } from "../app/apiServices";
import { products } from '../assets/objConstants'

export const Discover = () => {
  const { data: topChart, isLoading, isError, error } = useGetTopChartsQuery();
  if (isLoading) return "Loading....";
  if (isError) {
    return error.message;
  }
  //const topChart5 = topChart.slice(0, 5);
  return (
    <div className='discover mx-auto xl:m-0'>
     
       
       {/* abajo hago el map y le paso las pro a la card */}
         <div className='discover__cards  flex flex-col gap-8 md:flex-row md:flex-wrap md:gap-6  lg:flex-row lg:flex-wrap xl:px-12'>
          {topChart.map((chart) => (
            <Card key={chart.key} img={chart.images?.coverart}  titleSong={chart.title} author={chart.subtitle}/>
          ))}
          
          </div>
        
    </div>
  )
}
