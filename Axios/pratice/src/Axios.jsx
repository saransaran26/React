import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Axios() {
    const [value,setValue] = useState([])


    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/")
        .then((response)=>{
            console.log(response.data)
            setValue(response.data)
        })
    })

  return (
    <div>
        <h1>Hello</h1>
        {value.map((item)=>(
            <p>{item.title}</p>
        ))}
    </div>
  )
}

export default Axios