import React from 'react'
import ReactDOM from 'react-dom/client'
//import Mytype from './mytype'
//import Home from './Home'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Shopping Cart</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mx-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#product">Products</a>
      </li>
    </ul>
  </div>
</nav>
<section id="home">
  <h2 id="black">Shop in Style</h2>
  <h3>With this shop hompeage template</h3>
</section>
    <section id="product">
      <h1 className='text-center p-5'>Choose Your Products</h1>
    <div className='container'>
      <div className='row'>
    <App name="Men's Shirt" rate="$350-$600" src="https://img.freepik.com/free-photo/men-s-formal-wear-collection_53876-16559.jpg"/>
    <App name="Shoes" rate="$250-$550" src="https://cdn.pixabay.com/photo/2015/08/05/09/55/mens-shoes-875948_640.jpg"/>
    <App name="Watches" rate="$1500-$3500" src="https://media.istockphoto.com/id/1298597562/photo/a-variety-of-womens-watches-in-a-storage-box.jpg?s=612x612&w=0&k=20&c=UfN65cE73g5uFxUzG__YRgSvvZBs_SclXpWmxlA09Dw="/>
    <App name="Wallet" rate="$300" src="https://media.istockphoto.com/id/1147402027/photo/female-hands-of-the-customer-trying-hand-made-crafted-leather-wallet-on-background-of-a-shop.jpg?s=612x612&w=0&k=20&c=t34GwXVHSKYooCQs8_5CB_x48vHkOKfXDr45fixnTHY="/>
    </div>
    </div>
    <div className='container'>
      <div className='row'>
    <App name="32inch Samsung TV" rate="$24999" src="https://www.jiomart.com/images/product/original/492338494/samsung-138-cm-55-inch-qled-4k-smart-tv-8-series-55q80a-digital-o492338494-p590440996-0-202108121647.jpeg?im=Resize=(420,420)"/>
    <App name="Iphone 14" rate="$73,900" src="https://www.jiomart.com/images/product/original/493177798/apple-iphone-14-pro-max-128-gb-deep-purple-digital-o493177798-p593687919-5-202306301822.jpeg?im=Resize=(420,420)"/>
    <App name="Refrigerator" rate="$17,500" src="https://images-eu.ssl-images-amazon.com/images/I/61067tLjElL._AC_UL420_SR420,420_.jpg"/>
    <App name="Sport's Tshirt" rate="$250-$350" src="https://images-eu.ssl-images-amazon.com/images/I/911zmGPDGdL._AC_UL420_SR420,420_.jpg"/>
    </div>
    </div>
    </section>
    {/* <Home></Home> */}
    {/* <Mytype></Mytype> */}
  </React.StrictMode>,
)

