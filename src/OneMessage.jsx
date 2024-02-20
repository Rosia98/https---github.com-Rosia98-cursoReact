import React,{ useEffect, useRef } from "react";

export function OneMessage(){
    const esMontado = useRef(false)

    useEffect(()=>{
        if(!esMontado.current){
            console.log("Mensaje montado")
            esMontado.current=true
        }
    },[])

    return(
        <div>Hola hola, caracola</div>
    ) 
}