import React from 'react'

function mytype() {
  function cart(){
    console.log("hello")
  }
  return (
    <button onClick={()=>cart()}></button>
  )
}

export default mytype