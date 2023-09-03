import React, { useEffect, useState } from 'react'

function Pratice() {
    const[data,setdata] = useState(0)
    const[loading,setloading] = useState(true)
    const[error,seterror] = useState(null)
    const url = "https://jsonplaceholder.typicode.com/users"
    useEffect(()=>{
        fetch(url)
            .then((data)=>{
                console.log("data",data);
                return data.json()
            })
            .then((response)=>{
                console.log("response",response);
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
    {/* <ul>
        <li key={data.id}>{data.map((item,index)=>{
            return item.username + " "
        })}</li>
    </ul> */}
    <ul>
        {data.map((item,index)=>{
            return <li>names are: {item.title}</li>
        })}
    </ul>
    </div>
  )
}

export default Pratice