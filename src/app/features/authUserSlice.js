import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: {},
  isLogin: false,
};

export const authUserSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      if (action.payload) {
        state.profile = action.payload;
      } else {
        state.profile = {};
      }
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload.isLogin;
    },
  },
});

export const { setCredentials, setIsLogin } = authUserSlice.actions;
export default authUserSlice.reducer;
