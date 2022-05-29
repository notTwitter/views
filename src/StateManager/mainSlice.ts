import { createSlice } from "@reduxjs/toolkit";

//Types
interface InterfaceState {
    isMobile: boolean | null
}

//The slice
export const mainSlice = createSlice({
    name: 'mainSlice',
    initialState:{
        isMobile: null
    } as InterfaceState,
    reducers:{
        setIsMobile: (state, action) => {
            /* Reducer actions:
            *  If the reducer payload is empty, it will toggle the state. 
            *  Else, it will set a definitive value.
            */
            if(action.payload!=true || action.payload!=false){
                state.isMobile
                    ? state.isMobile = true
                    : state.isMobile = false
            }
            else{
                /*This means the there is a definitive state*/
                const newState: boolean = action.payload
                state.isMobile = newState
            }
        }
    }
})

//Exports
export const {setIsMobile} = mainSlice.actions
export default mainSlice.reducer