import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentSongs: [],
    currentIndex: 0,
    isActive: false,
    isPlaying: false,
    activeSong: {},
    genreListId: '',
  };

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setActiveSong: (state,action) => {
      state.activeSong = action.payload.song;
      if(action.payload?.data){
        state.currentSongs = [action.payload.data[action.payload?.index]] ;
      }else{
        state.currentSongs = action.payload.data;
      }
      state.currentIndex = action.payload.index;
      state.isActive = true;
      
      //clear console.log
      console.log(action.payload);
      console.log(state.currentSongs);
      console.log(state.currentIndex);
    },
    playPause: (state,action) => {
      state.isPlaying = action.payload;
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { setActiveSong, playPause, } = playerSlice.actions

export default playerSlice.reducer