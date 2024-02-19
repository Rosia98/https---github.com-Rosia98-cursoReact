import { useState } from "react";
{/*Se puede usar el useState para  gestionar el valor del componente, y al usarlo sabemos que estamos consiguiendo el 
valor más reciente*/}
export function Counter({initialValue=0}){
    const[counter, setCounter]= useState(initialValue);

    function handlerIncrementCounter(){
        setCounter((c)=>{
            return (c+1)
        })
    }
    return(
        <div>
            <h2>Su número es: {counter}</h2>
            <button onClick={handlerIncrementCounter}>Pulsame</button>
        </div>
    )
}
