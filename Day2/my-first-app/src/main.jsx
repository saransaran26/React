import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import Home from './Home.jsx'
//import Price from './price.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Home></Home>
    {/* <Price></Price> */}
  </React.StrictMode>,
)
