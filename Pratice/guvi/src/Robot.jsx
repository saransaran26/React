import React, { useRef, useState } from 'react'

function Robot() {
  const[count,setCount] = useState(0)
  const countuseRef = useRef(0)

  const handleNumber = () => {
    setCount(count+1)
    countuseRef.current = countuseRef.current + 1
    console.log(countuseRef.current);
  }
  return (
    <>
    <h1>Counting Number : {count}</h1>
    <button onClick={handleNumber}>Click to Increment</button>
    </>
  )
}

export default Robot