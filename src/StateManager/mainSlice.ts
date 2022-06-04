import { CaseReducer, CaseReducerWithPrepare, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Type_TweetDataArray } from "../Pages/Home/TweeList/TweetList";

//Types
export interface InterfaceReduxState {
    isMobile: boolean | null,
    isLoggedIn: boolean | null
    tweetData: Type_TweetDataArray | null
}

//The slice
export const mainSlice = createSlice({
    name: 'mainSlice',
    initialState:{
        isMobile: null,
        isLoggedIn: null,
        tweetData: null
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
        },
        setIsLoggedIn: (state, action:{payload: boolean | null, type: string}) =>{
            const newState = action.payload
            state.isLoggedIn = newState
        },
        setTweetData: (state, action:{payload: Type_TweetDataArray |null, type: string})=>{
            const newTweetData = action.payload
            state.tweetData = newTweetData
        }
    }
})

//Exports
export const {setIsMobile, setIsLoggedIn, setTweetData} = mainSlice.actions
export default mainSlice.reducer