import { configureStore } from "@reduxjs/toolkit";
import  Info  from "./CreateSlice";
import { Themeslice } from "./Theme";
//import { themeReducer } from './Theme'


const store = configureStore({
    reducer:{
        theme:Themeslice,
        user:Info,
        
    }
})

export default store