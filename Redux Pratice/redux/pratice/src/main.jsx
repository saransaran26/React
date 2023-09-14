import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './Store.jsx'
import Display from './Display.jsx'
import Login from './Login.jsx'
import Setcolor from './Setcolor.jsx'
//import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    {/* <Display></Display>
    <Login></Login>
    <Setcolor></Setcolor> */}
    </Provider>
    
  </React.StrictMode>,
)
