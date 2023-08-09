import React, { useState } from 'react'

function Home() {
    // const myarr = [
    //     {id:1, name:"item1"},
    //     {id:2, name:"item2"},
    //     {id:3, name:"item3"},
    //     {id:4, name:"item4"}
    // ]
    const [myarr,setmyarr] = useState([
        {id:1, name:"item1"},
        {id:2, name:"item2"},
        {id:3, name:"item3"},
        {id:4, name:"item4"}
    ])
    const UpdateEvent = (itemId)=>{
        const update = myarr.filter((item)=> item.id != itemId)
        console.log(update);
        setmyarr(update)
    }
  return (
    <div>
        {console.log("rendering")}
        <ol>
            {myarr.map((item)=>(
                <li key={item.id}>
                    {item.name} <button onClick={()=>UpdateEvent(item.id)}>Remove</button>
                </li>
            ))}
        </ol>
    </div>
  )
}

export default Home