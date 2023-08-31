import React,{createContext,useContext,useState} from 'react'

const NameContext = createContext()

function HandleName({children}){
    const[names,setNames] = useState("SARAN")

    return (
        <NameContext.Provider value={{names,setNames}}>
            {children}
        </NameContext.Provider>
    )
}

export {NameContext,HandleName}