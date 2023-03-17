import React from 'react'
import { useParams } from 'react-router'
import { HeaderDetails } from '../components/DetailsComponents/HeaderDetails'
import { useGetArtistsByIdQuery } from '../app/apiServices'

export const ArtistsDetails = () => {
  const {  idartists } = useParams();
  //const { activeSong, isPlaying } = useSelector((state) => state.player);
  const {
    data:artistData ,
    isLoading,
    isError,
    error,
  } = useGetArtistsByIdQuery(idartists);
  if (isLoading)  {
    return "Loading...."
  }
  if (isError) {
    return error.message;
  }
  console.log(artistData);
  return (
    <div>
      <HeaderDetails idartists={idartists}/>
    </div>
  )
}
