import React ,{ createContext , useContext , useState} from 'react'

const CricketContext = createContext()

function HandleAllData({children}){
    const[age,setAge] = useState('38')

    return (
        <CricketContext.Provider value={{age,setAge}}>
            {children}
        </CricketContext.Provider>
    )
}

export {CricketContext,HandleAllData}