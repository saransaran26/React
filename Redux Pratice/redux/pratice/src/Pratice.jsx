import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Userslist from './Userslist'

function Pratice() {
  const [names,setname] = useState({
    name:'',
    age:'22',
    email:''
  })
    const handleusers = () => {
        // <Link to='/user'></Link>
        console.log("Clicked");
    }
  return (
    <>
    <div className='inputs'>
        <input type="text" placeholder='Enter the Name'/>
        <input type="text" placeholder='Enter the Age'/>
        <input type="email" placeholder='Enter the Email'/>
    </div>
    <div className='buttons'>
    <button type="sumbit" onClick={handleusers}>Add User</button>
    <Link to='/user' className='links' names={names}>View Users</Link>
    </div>
    {console.log(names.age)}
    
    </>
  )
}

export default Pratice