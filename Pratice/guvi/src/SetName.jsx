import React, { useEffect, useState } from 'react'

function SetName() {
  const[data,setData] = useState([])
  const[loading,setLoading] = useState(true)
  const[error,setError] = useState(null)

  // const url = ("https://restcountries.com/v2/all")
  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(()=>{
    

    fetch(url)
    .then((response)=>{
      return response.json()

    })
    .then((data)=>{
      console.log(data[0].username);
      console.log(data[1].username);
      console.log(data[2].username);
      setData(data)
      setLoading(false)
     
    })
    .catch(err=>{
      setError(err)
      setLoading(false)
    })
  },[])
  if(loading){
    console.log("loading.");
    return <div>Loading...</div>
  }
  if(error){
    return <div>Error : {error.message}</div>
  }
  return (
    <div>
    <h4>Data Fetching Component</h4>
    <h5>Hello</h5>
    <ul>
      {data.map(item=>{
        <li key={item.id}>{item.username}</li>
      })}
    </ul>
    </div>
  )
}

export default SetName