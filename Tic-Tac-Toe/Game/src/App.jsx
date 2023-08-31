import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const initialValue = {
  board:Array(9).fill(null),
  currentplayer:'x',
  winner:null
}
const Handlevalue = (state,action)=>{
  switch(action.type){
    case 'MAKE_MOVE':
      if(state.board[action.index]){
        return state
      }

      const updatestate = [...state.board]
      updatestate[action.index] = state.currentplayer
      return {
        ...state,
        board:updatestate,
        currentplayer:state.currentplayer === 'x'?'o':'x'
      }

    case 'RESET_GAME':
      return initialValue
    default:
      return state
  }
}

function App() {
  const [count, setCount] = useState(0)
  const[state,dispatch] = useReducer(Handlevalue,initialValue)

  const winnerCombination = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ]

  const winnerCheck = () => {
    for(let combination of winnerCombination){
      const[a,b,c] = combination
      if(state.board[a] && state.board[a] === state.board[b] && state.board[a] === state.board[c]){
        return state.board[a]
      }
    }
    return null
    
    
  }

  const winner = winnerCheck();

  return (
    <div className='main'>
      <h2>Tic-Tac_toe</h2>
      <div className='fullbox center'>
      {state.board.map((cell,index)=>(
        <button onClick={()=>dispatch({type:'MAKE_MOVE',index})}
        className='box'
        disabled = {winner}
        >{cell}</button>
      ))}
      </div>
      {winner && (
        <div className='winnerbox'>
          <h5 className='text-center mt-5'>Winner is : {winner}</h5>
          <button className='btn btn-primary' onClick={()=>dispatch({type:'RESET_GAME'})}>Play Again</button>
        </div>
      )}
      {/* {winner==='hello' && (
        <div className='winnerbox'>
        <h5 className='text-center mt-5'>Match Drawn</h5>
        <button className='btn btn-primary' onClick={()=>dispatch({type:'RESET_GAME'})}>Play Again</button>
      </div>
      )} */}
    </div>

    
  )
}

export default App
