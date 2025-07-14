import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
    name: "game",
    initialState: {
        level: (null),
    },
    reducers: {
        setLevel: (state, action) => {
            state.level = action.payload;
        },
    },
});

const gameReducer = gameSlice.reducer

export const { setLevel } = gameSlice.actions;
export default gameReducer;