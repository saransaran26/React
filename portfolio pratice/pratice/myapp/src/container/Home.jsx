import React from 'react'
import Header from '../components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from '../components/Nav'
import ProductList from '../components/ProductList'
import Cart from '../components/cart'


function Home() {
  return (
    <div>
        <Header></Header>
        <Routes>
            <Route path='/' exact Component={Nav}></Route>
            <Route path='/ProductList/:id' Component={ProductList}></Route>
            <Route path='/cart' Component={Cart}></Route>
        </Routes>
    </div>
  )
}

export default Home