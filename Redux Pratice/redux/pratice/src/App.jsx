import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Pratice from './Pratice'
import Userslist from './Userslist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' exact Component={Pratice}></Route>
        <Route path='/user' exact Component={Userslist}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
