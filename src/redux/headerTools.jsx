import { createSlice } from "@reduxjs/toolkit";

const headerSilce=createSlice({
    name:'headerTools',
    initialState:{
        list1:false,
        list2:false,
        boxAdminLeft:false  
    },
    reducers:{
        list1:(state,action)=>{
            state.list1=!state.list1
            state.list2=false
        },
        list2:(state,action)=>{
            state.list1=false
            state.list2=!state.list2
        },
        boxAdminLeft:(state)=>{
            state.boxAdminLeft=!state.boxAdminLeft
        }
    }
})
export const{list1,list2,boxAdminLeft}=headerSilce.actions
export default headerSilce.reducer