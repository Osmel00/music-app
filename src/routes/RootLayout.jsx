import{useState,useEffect} from "react";
import { Header } from "../components/Header";
import axios from "axios";
import MusicPlayer from "../MusicPlayer/index"


const options = {
  method: 'GET',
  url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
  params: {q: 'eminem'},
  headers: {
    'X-RapidAPI-Key': '27a48454b3msh05bc78d8a580003p18e2f5jsn5bf3664fa91f',
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
  }
};


export const RootLayout = () => {
  const [data1, setData] = useState([]);
  useEffect(() => {
    axios.request(options).then(function (response) {
      console.log(response.data.data);
      setData(response.data.data);
	     
    }).catch(function (error) {
      console.error(error);
    });
},[])
 
console.log(data1);

  return (
    <div className="main-container h-screen   bg-gradient-to-br from-black to-[#121286]">
      <Header />
      <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
    </div>
  );
};
//bg-gradient-to-r from-violet-900 to-indigo-600 me gusta ESTE
//bg-gradient-to-r from-blue-800 to-indigo-900