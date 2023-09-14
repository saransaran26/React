import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login,logout } from './CreateSlice'
import {useSelector} from 'react-redux'

function Login() {
    const dispatch = useDispatch()
    const[name,setName] = useState('')
    const[age,setAge] = useState('')
    const[email,setEmail] = useState('')
    const user = useSelector(state => state.user.value)
  return (
     <>
     {!user.name&& (
        <div>
            <input type="text" value={name} placeholder='Enter Name' onChange={e=>setName(e.target.value)} />
     <input type="text" value={age} placeholder='Enter age' onChange={e=>setAge(e.target.value)} />
     <input type="text" value={email} placeholder='Enter email' onChange={e=>setEmail(e.target.value)} />
        </div>
     )}
     
    {!user.name ? <button onClick={()=>dispatch(login({name,age,email}))}>Login IN</button> :

    <button onClick={()=>dispatch(logout({
        name:'',
        age:0,
        email:''
    }))}>Login Out</button>}
    </>
  )
}

export default Login