import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(props) {

    let[ifClicked,changing] = useState(
       "Add to Cart"
    )
    let[count,setcount] = useState(0)
  function cart(ifClicked){
    if(ifClicked=='Add to Cart'){
      ifClicked = "Remove From cart"
      setcount(count+1)
      changing(ifClicked)
    }
    else{
      ifClicked = "Add to Cart"
      setcount(count-1)
      changing(ifClicked)
    }
  }
{/* <button className="btn btn-primary">hello</button> */}
  return (
      <div className="col-lg-3 col-md-3 col-sm-12">
      <div class="card">
          <img src={props.src} class="card-img-top"></img>
          <div class="card-body">
          <h5 class="card-title">{props.name}</h5>
          <h5 class="card-title">{props.rate}</h5>
          {/* <a href="#" class="btn btn-primary">Add to cart</a> */}
          <button class="btn btn-primary" onClick={()=>cart(ifClicked)}>{ifClicked}</button>
     </div>
     </div>
     </div>

  )
  
}

export default App
