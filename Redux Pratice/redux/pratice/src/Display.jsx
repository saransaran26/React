import React from 'react'
import {useSelector} from 'react-redux'

function Display() {
    const user = useSelector(state => state.user.value)
    const theme = useSelector(state => state.theme)
    if(!user.name){
        return
    }
  return (
    <>
    <div style={{'color':theme}}>
        <h2>Users Information</h2>
        <p>Name : {user.name}</p>
        <p>Age : {user.age}</p>
        <p>Email : {user.email}</p>
    </div>
    
    </>
  )
}

export default Display