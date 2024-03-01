import {createSlice} from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState:{
        showSidebar:true,
    },
    reducers:{
        toggleSidebar:(state)=>{
            state.showSidebar = !state.showSidebar;
        },
        closeSidebar:(state)=>{
            state.showSidebar = false;
        },
    }
})

export const {toggleSidebar,closeSidebar} = appSlice.actions;

export default appSlice.reducer;