import React from 'react'
import { Children } from 'react'
import { useState } from 'react'
import Child from './Child'

function Parent() {
    const[value,setValue] = useState("")
    const name=['saran','tamil','chakravarthy','chakra']

    const handlevalue = (data) => {
       setValue(data)
    }
  return (
    <div>
       <h2>Parent Component</h2>
       <h4>values are : {value}</h4>
       {/* <button onClick={handlevalue}>Click here</button>  */}
       <Child ondataclick={handlevalue} named={name}></Child>
    </div>
  )
}

export default Parent