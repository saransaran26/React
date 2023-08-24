import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router,Route,Link,Routes} from 'react-router-dom'
import All from './All'
import Fullstack from './Fullstack'
import Datascience from './Datascience'
import Cybersecurity from './Cybersecurity'
import Career from './Career'

function App() {
 
  

  return (
    <>
    
    
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"><img src="/Guvilogo.webp"></img></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mx-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">COURSES <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item dropdown active">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
          LIVE CLASSES
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">
            <h5>Zen Classes</h5>
            <h6>LIVE Online Intensive Program + 100% Placement Support</h6><br />
            <h5>Full Stack Development Program(FSD)</h5>
            <h6>Learn Javascript, HTML, CSS, Java, Data Structure, MongoDB & more</h6><br />
            <h5>IIT-M Advanced Programming and Data Science Program</h5>
            <h6>Learn Python, Machine Learning, NLP, Tableau, PowerBI & more</h6><br />
            <h5>Automation and Testing Program</h5>
            <h6>Learn Selenium, Python, Java, Jenkins, Jmeter, API Testing & more</h6>
          </a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Explore More Programs</a>
        </div>
      </li>
      <li class="nav-item dropdown active">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
          PRATICE
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">
            <h5>CodeKata</h5>
            <h6>Sharpen Your Coding Skills,Prepare For interviews</h6><br />
            <h5>WebKata</h5>
            <h6>Build Basic Frontend and Backend Development Skills</h6><br />
            <h5>IDE - Online Complier</h5>
            <h6>Run and Test your Code in any Programming Languages</h6>
          </a>
        </div>
      </li>
      <li class="nav-item dropdown active">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
          RESOURCES
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Rewards</a><br />
          <a class="dropdown-item" href="#">Referral action</a><br />
          <a class="dropdown-item" href="#">Forum Support</a><br />
          <a class="dropdown-item" href="#">Blogs</a>
        </div>
      </li>
      <li class="nav-item dropdown active">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
          OUR PRODUCTS
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">
            <h5>Hackerkid</h5>
            <h6>Coding Classes Paltform for k-12 Children</h6><br />
            <h5>GUVI for Corporates</h5>
            <h6>Meet your hiring needs at ease</h6>
          </a>
        </div>
      </li>
    </ul>
  </div>
</nav>


<div className="container">
  <div className="row">
      <div className="col-lg-12 col-md-12">
      <img src="Blogheader.webp"></img>
      </div>
  </div>
</div>

{/* <img src="https://www.guvi.in/blog/wp-content/uploads/2022/10/blog-header-2048x315.png"></img> */}


 {/*  main nav bar Starts here */}
 <Router>
  <div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#"></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  
  <div className="collapse navbar-collapse newdata" id="navbarSupportedContent">
    <ul className="navbar-nav mx-auto">
      <li className="nav-item active">
         {/* <a class="nav-link" href="#">All <span class="sr-only">(current)</span></a>  */}
         <Link to='/'>All</Link>
      </li>
      <li className="nav-item active">
        {/* <a class="nav-link" href="#">Full Stack Development</a> */}
         <Link to='/Fullstack'>Fullstack</Link>
      </li>
      <li className="nav-item active">
        {/* <a class="nav-link" href="#">Data Science</a>  */}
         <Link to='/Datascience'>Datascience</Link>
      </li>
      <li className="nav-item active">
        {/* <a class="nav-link" href="#">Cyber Security</a> */}
        <Link to='/Cybersecurity'>Cybersecurity</Link>
      </li>
      <li className="nav-item active">
        {/* <a class="nav-link" href="#">Carrer</a> */}
        <Link to='/Career'>Career</Link>
      </li>   
    </ul>
   </div>

 </nav>
<Routes>
        <Route path="/" exact Component={All}></Route>
        <Route path="/Fullstack" exact Component={Fullstack}></Route>
        <Route path="/Datascience" exact Component={Datascience}></Route>
        <Route path="/Cybersecurity" exact Component={Cybersecurity}></Route>
        <Route path="/Career" exact Component={Career}></Route>
      </Routes>
      </div>


 </Router>


 {/* Components calling starts here */}
    

</>

  )
}

export default App
