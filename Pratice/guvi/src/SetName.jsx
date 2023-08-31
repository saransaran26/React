import React from 'react'
import { useContext } from 'react'
import { NameContext } from './CricketContext'

function SetName() {
  const {names}= useContext(NameContext)
  return (
    <div>
      <h2>Name is : {names}</h2>
    </div>
  )
}

export default SetName