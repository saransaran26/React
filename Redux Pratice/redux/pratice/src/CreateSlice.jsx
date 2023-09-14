import {createSlice} from '@reduxjs/toolkit'

export const Info = createSlice({
    name:"user",
    initialState :{
        value:{
            name:'',
            age:0,
            email:''
        }
    },
    // initialState:10,
    reducers:{
        login:(state,action) => {
            state.value = action.payload
        },
        logout:(state)=> {
            state.value  = {
                name:'',
            age:0,
            email:''
            }
        }
    }
})

export const { login,logout } = Info.actions
export default Info.reducer