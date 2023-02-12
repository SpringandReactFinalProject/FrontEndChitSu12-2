import { configureStore } from "@reduxjs/toolkit";
import contractReducer from '../components/contract/contractSlice'

export const store = configureStore({
    reducer:{
        contracts:contractReducer
       
    }
})