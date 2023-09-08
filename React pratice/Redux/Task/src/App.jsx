import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,reset } from './counterSlice'



function App() {
  const dispatch = useDispatch()
  const count = useSelector(state => state.counter)
  
  return (
    <>
     <h1>Welcome to redux</h1>
     <p>count is : {count}</p>
     <button onClick={()=>dispatch(increment())}>Increment</button>
     <button onClick={()=>dispatch(decrement())}>decrement</button>
     <button onClick={()=>dispatch(reset())}>reset</button>
    </>
  )
}

export default App
