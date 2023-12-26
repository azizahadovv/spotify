import { configureStore } from '@reduxjs/toolkit'
import GetApiData from './GetApiData'


export default configureStore({
    reducer: GetApiData, 
    devTools: process.env.NODE_ENV !== 'production'
})