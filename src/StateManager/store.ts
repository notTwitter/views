import {configureStore} from '@reduxjs/toolkit'
import isMobile from './mainSlice'
import isLoggedIn from './mainSlice'


export default configureStore({
    reducer: {
        isMobile: isMobile,
        isLoggedIn: isLoggedIn
    }
})