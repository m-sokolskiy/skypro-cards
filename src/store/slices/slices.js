import { createSlice } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    level: null,
    status: null,
    currentTime: 0,
  },
  reducers: {
    setLevel: (state, action) => {
      state.level = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setCurrentTime: (state) => {
      state.currentTime += 1;
    },
    resetTime: (state) => {
      state.currentTime = 0;
    },
  },
});

const gameReducer = gameSlice.reducer;

export const { setLevel, setStatus, setCurrentTime } = gameSlice.actions;
export default gameReducer;
