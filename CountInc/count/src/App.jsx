import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App(props) {
  const[data,setdata] = useState(props.price)
  const[count,setCount] = useState(props.count)

  const handleInce = () => {
    // const innernum = parseInt(document.getElementById("nums").innerHTML)
    // console.log(innernum);
    // var inc = innernum+1;
    // document.getElementById("nums").innerHTML = inc
    setCount(count+1)
    var pricenum = (props.price)
    var ans = 0
    var added = count +1
    var ans = added * pricenum
    setdata(ans)
    
  }

  const handleDre = () => {
    // const innernum = parseInt(document.getElementById("nums").innerHTML)
    if(count-1>=0){
      
    
    
      setCount(count-1)
      var pricenum = (props.price)
      var ans = 0
      var added = count-1
      var ans = added * pricenum
      setdata(ans)
  } 
  }

   const handleRemove = () =>{
    setCount(props.count)
    setdata(props.price)
   }
  
  return (
    <div className="container main">
      <div className="row">
        <div className="col-lg-3 col-sm-12">
          <div className="card">
  <img src={props.src} className="card-img-top" alt="..."></img>
</div>
        </div>
        <div className="col-6 mt-3">
          <h3>{props.phone}</h3>
          <div className="para mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, repellendus vel. Culpa officiis accusamus nihil earum, distinctio vel. Modi, incidunt.
          </div>
          <h5 className='mt-4'>Sustaniability</h5>
        </div>
        <div className="col-3">
          <div className='button'>
          <button onClick={handleDre}>-</button>
          <button className='btnNum' id='nums'>{count}</button>
          {console.log(count)}
          <button onClick={handleInce}>+</button>
          <h5 className='ml-2'>${data}</h5>
          </div>
          <button className='btn btn-danger mt-4 remove' onClick={handleRemove}>Remove</button>
        </div>
      </div>
      <hr className='hrs'/>
      <div className="row mt-4">
        <div className="col-4">
          <h4>Subtotal</h4>
          <h4>Shipping</h4>
        </div>
        <div className="col-5">

        </div>
        <div className="col-3">
          <h4>${data}</h4>
          <h4>FREE</h4>
        </div>
      </div>
      <hr className='hrs'/>
      <div className="row mt-4">
        <div className="col-4">
          <h4>Total : </h4>
        </div>
        <div className="col-5">

        </div>
        <div className="col-3">
          <h4>${data}</h4>
          <h6>Get Daily Cash With Nespola Card</h6>
        </div>
      </div>
    </div>

    
  )
}

export default App
