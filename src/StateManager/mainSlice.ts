import { CaseReducer, CaseReducerWithPrepare, createSlice, PayloadAction } from "@reduxjs/toolkit";

//Types
export interface InterfaceReduxState {
    isMobile: boolean | null
}

//The slice
export const mainSlice = createSlice({
    name: 'mainSlice',
    initialState:{
        isMobile: null
    } as InterfaceReduxState,
    reducers:{
        setIsMobile: (state, action:{payload: boolean|null, type: string }) => {
            /* Reducer actions:
            *  If the reducer payload is empty, it will toggle the state. 
            *  Else, it will set a definitive value.
            * 
            * "This could all be shortened to state.isMobile = action.payload ?? !state.isMobile where ?? means "use the left value if it isnt null or undefined, otherwise use the right value""
            *   -Some guy on discord
            */
            state.isMobile = action.payload ?? !state.isMobile
        } 
    }
})

//Exports
export const {setIsMobile} = mainSlice.actions
export default mainSlice.reducer