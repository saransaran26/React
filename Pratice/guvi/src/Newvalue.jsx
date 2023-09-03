
import React from 'react'
import { useContext } from 'react'
import { CricketContext} from './CricketContext'

function Newvalue() {
  const{count} = useContext(CricketContext)
  return (
    <div>
      <h3>count : {count}</h3>
    </div>
  )
}

export default Newvalue