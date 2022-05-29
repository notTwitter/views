import {configureStore} from '@reduxjs/toolkit'
import isMobile from './mainSlice'


export default configureStore({
    reducer: {
        isMobile: isMobile
    }
})