import {configureStore} from '@reduxjs/toolkit'
import profileReducer from './features/profileSlice.js'


export const store=configureStore({
    reducer:{
        profile:profileReducer,
    }
})