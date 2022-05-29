import { createSlice } from "@reduxjs/toolkit";

//Types
type T_SideMenu = boolean 

//The slice
export const mainSlice = createSlice({
    name: 'mainSlice',
    initialState:{
        isMobile: null
    },
    reducers:{
        setIsMobile: (state, action) => {
            const newState = action.payload
            state.isMobile = newState
        }
    }
})

//Exports
export const {setIsMobile} = mainSlice.actions
export default mainSlice.reducer