import React from 'react'
import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const[alltodo,setalltodo] = useState([])
  const[newtitle,setTitle] = useState("")
  const[newdescription,setDescription] = useState("")
  const[completed,setCompleted] = useState([])
  const [isCompletedScreen,setIsCompletedScreen] = useState(false)

  const handleTodoitem = () => {
    let name = document.getElementById("name").value
    let description = document.getElementById("description").value
    if(name==''){
      alert("Please enter the Todo name")
    }
    else if(description==''){
      alert("Please enter the Todo description")
    }
    else{
      let todoData = {
      title:newtitle,
      description:newdescription
    }
    let updatedTodo = [...alltodo]
    updatedTodo.push(todoData)
    setalltodo(updatedTodo)
    console.log(updatedTodo)
    localStorage.setItem('todolist',JSON.stringify(updatedTodo))
    document.getElementById("name").value = ""
    document.getElementById("description").value = ""
    }  
  }

  useEffect(()=>{
    let savedTodos = JSON.parse(localStorage.getItem('todolist'))
    let savedcompletedTodo = JSON.parse(localStorage.getItem('completedtodo'))
    if(savedTodos){
      setalltodo(savedTodos)
    }
    if(savedcompletedTodo){
      setCompleted(savedcompletedTodo)
    }
  },[])
  const handleDeleteTodo = (index) => {
    let todeletedata = [...alltodo]
    todeletedata.splice(index,1)

    localStorage.setItem('todolist',JSON.stringify(todeletedata))
    setalltodo(todeletedata)
    
  }
  const handleCompletedDeleteTodo = (index) => {
    let completedDeleteTodo = [...completed]
    completedDeleteTodo.splice(index,1)
    localStorage.setItem('completedtodo',JSON.stringify(completedDeleteTodo))
    setCompleted(completedDeleteTodo)
  }
  const hnadleCompleteTodo = (index) =>{
    const date = new Date();
    let d = date.getDate()
    let mm = date.getMonth()
    let yy = date.getFullYear() + 1
    let hrs = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    let finaldate = d + '-' + mm + "-" + yy + ' at ' + hrs + ':' + min + ":" + sec;
    let getCompleteData = {
      ...alltodo[index],
      completedOn : finaldate
    }
    let updatedCompleteData = [...completed,getCompleteData]
    setCompleted(updatedCompleteData)
    localStorage.setItem('completedtodo',JSON.stringify(updatedCompleteData))
    handleDeleteTodo(index)
    
  }
  return (
    <div className='container mt-lg-5 mt-md-5'>
      <h1 className='text-center'>My Todos</h1>
      <div className='todolist'>
      <div className="inputbox">
        <label htmlFor="name">Name : </label>
        <input type="text" id='name' placeholder='Enter the Todo Name' onChange={(e)=>setTitle(e.target.value)} />
      </div>
      <div className="inputbox">
        <label htmlFor="description">Description : </label>
        <input type="text" id='description' placeholder='Enter the Todo description' onChange={(e)=>setDescription(e.target.value)} />
      </div>
      <button className='btn btn-primary' onClick={handleTodoitem}>Add</button>
      </div>
      <div className="todomain">
        <button className={`firstbtn ${isCompletedScreen==false && 'active'}`} onClick={()=>{setIsCompletedScreen(false)}}>Todo</button>
        <button className={`secondbtn ${isCompletedScreen==true && 'active'}`} onClick={()=>{setIsCompletedScreen(true)}}>Completed Todos</button>
      </div>

      <div className="todomaindata">
        {isCompletedScreen==false && 
        alltodo.map((item,index)=>(
          <div className="names">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <span>
            <button className='btn btn-danger content1' onClick={()=>handleDeleteTodo(index)}>Delete</button>
           <button className='btn btn-primary content2' onClick={()=>hnadleCompleteTodo(index)}>Completed</button></span>
          </div>
      
   
        ))}

  {isCompletedScreen==true && 
          completed.map((item,index)=>(
            <div className="names">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <p><small>completed On : {item.completedOn}</small></p>
              <span>
              <button className='btn btn-danger content1' onClick={()=>handleCompletedDeleteTodo(index)}>Delete</button>
            </span>
            </div>
        
    
          ))}
        </div>
      </div>
      
  )
}

export default App


// useEffect(()=>{
//   const saveddata = JSON.parse(localStorage.getItem('info'))
//   setValue(saveddata)
// },[])