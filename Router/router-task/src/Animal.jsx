import React from 'react'
import { useParams } from 'react-router-dom'

function Animal() {
    const {name} = useParams()
    const animalinfo = {
        dog:"dogs are friently and loyal",
        cat:"cats are independent",
        Rabbit:"rabbit are cute"
    }
    const info = animalinfo[name] || "Animal not found"
    console.log(info);
  return (
    <div>
        <h1>{name}</h1>
        <h3>{info}</h3>
    </div>
  )
}

export default Animal