import { createSlice } from "@reduxjs/toolkit"

const defaultState={
    name:""  ,
    myDecisions:[]                                       
}

const firstSlice=createSlice({
    name:"firstSlice",
    initialState:defaultState,
    reducers:{
        setName:(state)=>{
            console.log("setname called",state)
            state.name="adhi"
        },
        loadMyDecisions:(state,{payload})=>{
            state.myDecisions=payload
        }
    }
})

export default firstSlice.reducer;
export const {setName,loadMyDecisions}=firstSlice.actions