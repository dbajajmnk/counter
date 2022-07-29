import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count:0
}

const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        incrementCounter:(state)=>{
                state.count++;
        },
        decrementCounter:(state)=>{
            state.count--;
        },
        incrementByNumber:(state,payload)=>
        {
            console.log(payload);
            state.count+=payload.payload
        }
    }
})
export const{incrementCounter,decrementCounter,incrementByNumber} = counterSlice.actions
export default counterSlice.reducer