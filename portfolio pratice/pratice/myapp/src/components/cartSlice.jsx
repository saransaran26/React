import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name:"cart",
    initialState:{
        list:[]
    },
    reducers:{
        additem:(state,action)=>{
            state.list = action.payload
        }
    }
})

export const { additem } = cartSlice.actions

export default cartSlice.reducer