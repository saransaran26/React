import React from 'react'
import { useContext } from 'react'
import { CricketContext} from './CricketContext'

function ChangeName() {
  const {setcount} = useContext(CricketContext)
  const{count} = useContext(CricketContext)
  const handleInc = (val) => {
    setcount(val)
  }
  return (
    <div>
      <button onClick={()=>handleInc(count+1)}>Increment</button>
    </div>
  )
}

export default ChangeName