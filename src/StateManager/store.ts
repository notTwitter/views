import {configureStore} from '@reduxjs/toolkit'
import smallerSideMenu from './mainSlice'


export default configureStore({
    reducer: {
        smallerSideMenu: smallerSideMenu
    }
})