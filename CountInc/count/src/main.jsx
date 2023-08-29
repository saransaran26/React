import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App src="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    phone="iphone 9" price={549} count={1}/>
    <App src="https://i.dummyjson.com/data/products/2/thumbnail.jpg" phone="iphone X" price={899} count={1}></App>
    <App src="https://i.dummyjson.com/data/products/3/thumbnail.jpg" phone="Samsung Universe 9" price={1249} count={1}></App>
    <App src="https://i.dummyjson.com/data/products/4/thumbnail.jpg" phone="OPPOF19" price={280} count={1}></App>
    <App src="https://i.dummyjson.com/data/products/5/thumbnail.jpg" phone="Huawei P30" price={499} count={1}></App>
  </React.StrictMode>,
)
