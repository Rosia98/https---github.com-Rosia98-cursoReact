import { createContext, useContext, useState } from "react";

const LenguageContext = createContext()
export function LenguageContext({children}){
    const[lenguage, setLenguage] = useState('en')

    function changeLenguage (newLenguage){
        setLenguage(newLenguage)
    }

    return(
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}
export function useLenguage(){
    return useContext(LenguageContext)
}