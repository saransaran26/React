import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Animal from './Animal'

function App() {
  

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              {/* <Link to="/">Home</Link> */}
              <Link to="/animal/dog">Dog</Link>
            </li>
            <li>
              {/* <Link to="/Contact">Contact</Link> */}
              <Link to="/animal/cat">Cat</Link>
            </li>
            <li>
              {/* <Link to="/About">About</Link> */}
              <Link to="/animal/Rabbit">Rabbit</Link>
            </li>
          </ul>
        </nav>
        <Routes>
        {/* <Route path="/" exact Component={Home}></Route>
        <Route path="/Contact" exact Component={Contact}></Route>
        <Route path="/About" exact Component={About}></Route> */}
        <Route path="/animal/:name" Component={Animal}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
