import {createSlice} from '@reduxjs/toolkit'

export const Themeslice = createSlice({
    name:'theme',
    initialState:{
        value:{color:'red'}
    },
    reducers:{
        changecolor:(state,action)=>{
            state.value = action.payload
        }
    }
})

export const {changecolor} = Themeslice.actions;
export default Themeslice.reducer;