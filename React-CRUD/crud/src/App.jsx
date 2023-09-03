import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './Component/Shared/Layout'
import Allpages from './Allpages'
import {Route,Routes} from 'react-router-dom'
import Forms from './Forms'
import Update from './Update'
import Delete from './Delete'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Allpages></Allpages>}></Route>
        <Route path='/add-fruit' element={<Forms></Forms>}></Route>
        <Route path='/update/:id' element={<Update></Update>}></Route>
        {/* <Route path='/delete/:id' element={<Delete></Delete>}></Route> */}
      </Routes>
    </Layout>
  )
}

export default App
