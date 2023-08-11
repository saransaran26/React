import React, { useEffect, useState } from 'react'

function Pratice() {
    const[data,setdata] = useState(0)
    const[loading,setloading] = useState(true)
    const[error,seterror] = useState(null)
    const url = "https://jsonplaceholder.typicode.com/users"
    useEffect(()=>{
        fetch(url)
            .then((data)=>{
                return data.json()
            })
            .then((response)=>{
                setdata(response)
                setloading(false)
            })
            .catch((error)=>{
                seterror(error)
                setloading(false)
            })
    },[])
    if(loading){
        return <div>Loading</div>
    }
    if(error){
        return <div>error : {error.message}</div>
    }
  return (
    <div>
    <h1>Pratice</h1>
    {/* <p key={item.id}>{item.map(()=>{
        return item.username
    })}</p> */}
    <ul>
        <li key={response.id}>{response.map(()=>{
            return response.username
        })}</li>
    </ul>
    </div>
  )
}

export default Pratice