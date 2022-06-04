import {configureStore} from '@reduxjs/toolkit'
import isMobile from './mainSlice'
import isLoggedIn from './mainSlice'
import tweetData from './mainSlice'


export default configureStore({
    reducer: {
        isMobile: isMobile,
        isLoggedIn: isLoggedIn,
        tweetData: tweetData
    }
})