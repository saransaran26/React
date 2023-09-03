import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

const CricketContext = createContext()

function CricketProvider({children}) {
    const[count,setcount] = useState(0)
  return (
   <CricketContext.Provider value={{count,setcount}}>
    {children}
   </CricketContext.Provider>
  )
}

export { CricketContext, CricketProvider }