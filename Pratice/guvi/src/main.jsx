import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// import React, { useReducer } from 'react'

// const initialstate = {totaltoy:0,toysold:0}

// function toyStoreReducer(state,action){
//     switch(action.type){
//         case 'BUY_TOY':
//             return {...state ,totaltoy:state.totaltoy+1}
//         case 'SOLD_TOY':
//             return {...state ,totaltoy:state.totaltoy-1,toysold:state.toysold+1}
//         default:
//             return state
//     }
// }


// function Pratice() {

//     const[storeState,dispatch] = useReducer(toyStoreReducer,initialstate)

//     function handleBuyToy(){
//         dispatch({type:'BUY_TOY'})
//     }

//     function handleSoldToy(){
//         dispatch({type:'SOLD_TOY'})
//     }
//   return (
//     <div>
//         <h1>useReducer Example</h1>
//         <p>totalToy : {storeState.totaltoy}</p>
//         <p>Toys Sold : {storeState.toysold}</p>
//         <button onClick={handleBuyToy}>BUY TOY</button>
//         <button onClick={handleSoldToy}>SOLD TOY</button>
//     </div>
//   )
// }

// export default Pratice
