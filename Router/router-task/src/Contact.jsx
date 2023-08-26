import React from 'react'

function Contact() {
    function calling(){
        alert("You do not call now")
    }
  return (
    <div>
        <h1>Contact</h1>
        <h6>9384454748</h6>
        <button onClick={calling}>Call</button>
    </div>
  )
}

export default Contact