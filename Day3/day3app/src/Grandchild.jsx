import React from 'react'

function Grandchild(props) {
  return (
    <div>
        <h1>GrandChild</h1>
        <h4>names are : {props.names}</h4>
    </div>
  )
}

export default Grandchild