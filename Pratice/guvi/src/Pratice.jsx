import React, { useReducer } from 'react'

const initialstate = {totaltoy:0,soldtoy:0}

const handleData = (state,action) => {
    switch(action.type){
        case 'BUY_TOY':
            return {...state , totaltoy:state.totaltoy+1}
        case 'BUY_TOY':
            return {...state , totaltoy:state.totaltoy-1,soldtoy:state.soldtoy+1} 
        default:
            return state
    }
}


function Pratice() {
    const[storestate,dispatch] = useReducer(handleData,initialstate)
    const handleBuy = () => {
        dispatch({type:'BUY_TOY'})
    }
    const handlesold = () => {
        dispatch({type:'SOLD_TOY'})
    }
  return (
    <div>
        <h1>useReducer Example</h1>
        <p>TotalToy : {storestate.totaltoy}</p>
        <p>soldToy : {storestate.soldtoy}</p>
        <button onClick={handleBuy}>BUY TOY</button>
        <button onClick={handlesold}>SOLD TOY</button>
    </div>
  )
}

export default Pratice