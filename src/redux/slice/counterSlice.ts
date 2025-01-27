import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface counter {
    value: number,
    number:number,
    name: string,
    age:number,
    rollNo: number
}
const initialState:counter = {
    value: 0,
    number:10,
    name: 'umer',
    age: 22,
    rollNo: 21,


}
export const counterSlice= createSlice({
    name: 'counter',
     initialState,
    reducers: {
        increment: (state) => {
            state.number += 1
        },
        //this will only accept number type paramenter
        incrementByAmount: (state,action:PayloadAction<number>) => {
            state.number += Number(action.payload)
        },
        resetValue: (state) => {
            state.number = 0;
        },
        decrementNumber: (state) =>{
                state.number--
        },
        Changename: (state,action:PayloadAction<string>) => {
            state.name = action.payload

        }
    }


})
export const  {increment,incrementByAmount,resetValue,decrementNumber,Changename} = counterSlice.actions
export default counterSlice.reducer