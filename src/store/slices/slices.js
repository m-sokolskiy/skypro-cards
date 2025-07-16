import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
    name: "game",
    initialState: {
        level: (null),
        status: (null),
    },
    reducers: {
        setLevel: (state, action) => {
            state.level = action.payload;
        },
        setStatus: (state, action) => {
            state.status = action.payload;
        },
    },
});

const gameReducer = gameSlice.reducer

export const { setLevel, setStatus } = gameSlice.actions;
export default gameReducer;