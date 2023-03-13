import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreListId: "",
  search:"",
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      state.activeSong = action.payload.song;
      if (action.payload?.data) {
        //state.currentSongs = [action.payload.data[action.payload?.index]] ;
        state.currentSongs = action.payload.data;
      }
      state.currentIndex = action.payload.index;
      state.isActive = true;

      //clear console.log
      console.log(action.payload);
      console.log(state.currentSongs);
      console.log(state.activeSong);
      console.log(state.currentIndex);
    },

    nextSong: (state, action) => {
      state.activeSong = state.currentSongs[action.payload];
      state.currentIndex = action.payload;
      state.isActive = true;
    },

    prevSong: (state, action) => {
      state.activeSong = state.currentSongs[action.payload];
      state.currentIndex = action.payload;
      state.isActive = true;
    },
    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },
    setSearch:(state, action) => {
       state.search = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setActiveSong, playPause, nextSong, prevSong,setSearch } =
  playerSlice.actions;

export default playerSlice.reducer;
