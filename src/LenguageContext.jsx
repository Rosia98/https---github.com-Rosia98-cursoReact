import { createContext, useContext, useState } from "react";

const LenguageContext = createContext()
export function LenguageProvider({children}){
    const[lenguage, setLenguage] = useState('en')

    function changeLenguage (newLenguage){
        setLenguage(newLenguage)
    }

    return(
        <LenguageContext.Provider value={{lenguage, changeLenguage}}>
            {children}
        </LenguageContext.Provider>
    )
}
export function useLenguage(){
    return useContext(LenguageContext)
}