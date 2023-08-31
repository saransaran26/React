import React from 'react'
import { useReducer } from 'react'

const initialstate = {totalToy:0,toySold:0}

const maintoyinfo = (state,action) => {
  switch(action.type){
    case 'BUY_TOY':
      return {...state, totalToy:state.totalToy+1}
    case 'SOLD_TOY':
      return {...state, totalToy:state.totalToy-1,toySold:state.toySold+1}
    default:
      return state
}
}

function Robot() {
  const[storestate,dispatch] = useReducer(maintoyinfo,initialstate)

  const handlebuytoy = () =>{
    dispatch({type:'BUY_TOY'})
  }
  const handlesoldtoy = () =>{
    dispatch({type:'SOLD_TOY'})
  }
  return (
    <div>
      <h2>Total Toy : {storestate.totalToy}</h2>
      <h2>Sold Toy : {storestate.toySold}</h2>
      <button onClick={handlebuytoy}>BUY TOY</button>
      <button onClick={handlesoldtoy}>SOLD TOY</button>
    </div>
  )
}

export default Robot