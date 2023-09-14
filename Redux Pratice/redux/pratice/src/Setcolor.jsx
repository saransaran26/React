import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changecolor } from './Theme'

function Setcolor() {
    const [col,setcol] = useState('red')
    const dispatch = useDispatch()
  return (
    <div>
        <input type='color' value={col} onChange={e=>setcol(e.target.value)}></input>
        <button onClick={()=>dispatch(changecolor(col))}>Change Color</button>
    </div>
  )
}

export default Setcolor