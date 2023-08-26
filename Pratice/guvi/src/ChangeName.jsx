import React, { useContext } from 'react'
import { CricketContext } from './CricketContext'

function ChangeName() {
  const {setAge} = useContext(CricketContext)
  const changeAge = (newAge) => {
      setAge(newAge)
  }
  return (
    <button onClick={()=>changeAge('22')}>Click To Change</button>
  )
}

export default ChangeName