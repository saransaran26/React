import React from 'react'
import Grandchild from './Grandchild'

function Child(props) {
    

    const clickme = () => {
        const data = "Hello everyone present here"
        props.ondataclick(data)
    }
  return (
    <>
    <div>Child</div>
    <button onClick={clickme}>hello</button>
    <Grandchild names={props.named}></Grandchild>
    </>
  )
}

export default Child