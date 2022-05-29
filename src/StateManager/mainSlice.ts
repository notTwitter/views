import { createSlice } from "@reduxjs/toolkit";

//Types
type T_SideMenu = boolean 

//The slice
export const mainSlice = createSlice({
    name: 'mainSlice',
    initialState:{
        smallerSideMenu: null
    },
    reducers:{
        setSmallerSideMenu: (state, action) => {
            const newState = action.payload
            state.smallerSideMenu = newState
        }
    }
})

//Exports
export const {setSmallerSideMenu} = mainSlice.actions
export default mainSlice.reducer