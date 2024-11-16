import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        num: 0
    },
    reducers: {
        increment: (state, action) => {
            state.num = state.num + action.payload
        },
        decrement: (state, action) => {
            state.num = state.num - action.payload
        }
    }
})

export const { increment, decrement } = counterSlice.actions
export const { reducer: counterReducer } = counterSlice