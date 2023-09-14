import React from 'react'

function Userslist({props}) {
  return (
    <div>
        <h1>Userslist</h1>
        <h5>Hello users</h5>
        <p>name : {props.name}</p>
        <p>age : {props.age}</p>
        {console.log(props)}
    </div>
  )
}

export default Userslist