// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

 import './App.css'
import ChangeName from './ChangeName'
import {CricketProvider} from './CricketContext'
// import setName from './setName'
import {CricketContext} from './CricketContext'
import Newvalue from './Newvalue'



function App() {
  

  return (
   <CricketProvider>
    <div>
    <h1>Starts here</h1>
    <Newvalue></Newvalue>
    <ChangeName></ChangeName>
    </div>
   </CricketProvider>
    
  )
}

export default App
