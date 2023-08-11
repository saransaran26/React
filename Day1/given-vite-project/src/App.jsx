import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './main.jsx'

function App(props) {
  // let[count,setcount] = useState(0)
  let count = 0
    let counted = true
    let[ifClicked,changing] = useState(
       "Add to Cart"
    )

    function foo(ifClicked){
      if(ifClicked=='Add to Cart'){
        count = count + 1
        console.log(count);
      }
      else{
        count = count - 1
        console.log(count);

      }
    }


  function cart(ifClicked){
    if(ifClicked=='Add to Cart'){
      foo(ifClicked)
      ifClicked = "Remove From cart"
      changing(ifClicked)
    }
    else{
      foo(ifClicked)
      ifClicked = "Add to Cart"
      changing(ifClicked)
    }
  }

  return (
      <div className="col-lg-3 col-md-3 col-sm-12">
      <div class="card">
          <img src={props.src} class="card-img-top"></img>
          <div class="card-body">
          <h5 class="card-title">{props.name}</h5>
          <h5 class="card-title">{props.rate}</h5>
          <button class="btn btn-primary" onClick={()=>cart(ifClicked)}>{ifClicked}</button>
     </div>
     </div>
     </div>
  )
  
}

export default App
