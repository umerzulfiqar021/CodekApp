import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface counter {
    value: number,
    number:number
}
const initialState:counter = {
    value: 0,
    number:10,
}
export const counterSlice= createSlice({
    name: 'counter',
     initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        incrementByAmount: (state,action:PayloadAction<number>) => {
            state.number += Number(action.payload)
        },
        resetValue: (state) => {
            state.number = 0;
        }
    }


})
export const  {increment,incrementByAmount,resetValue} = counterSlice.actions
export default counterSlice.reducer