import React from 'react'
import { useContext } from 'react'
import { NameContext } from './CricketContext'

function ChangeName() {
  const{setNames} = useContext(NameContext)
  const handlehere = (data) =>{
    setNames(data)
  }
  return (
    <div>
      <button onClick={()=>handlehere("tamil")}>click to change Name</button>
    </div>
  )
}

export default ChangeName