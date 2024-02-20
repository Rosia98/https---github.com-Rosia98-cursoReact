import { useEffect, useRef, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";
{/*Se puede usar el useState para  gestionar el valor del componente,
 al llamar al valor setter deberá ser una función porque sabremos que estamos consiguiendo el valor más reciente*/}
export function Counter({initialValue=0, increment=1, decrement=1, reset=0}){
    const[count, setCount]= useState(initialValue);
    const directionRef=useRef(null)

    useEffect(()=>{
        directionRef.current = count > initialValue ? 'arriba' : 'abajo'

        console.log('Dirección: ', directionRef.current)
    },[count, initialValue])

    function handlerIncrementCounter(){
        setCount((c)=>{
            return (c+increment)
        })
    }
    function handlerDecrementCounter(){
        setCount((c)=>{
            return(c-decrement)
        })
    }
    function handlerResetCounter(){
        setCount(reset);
    }
    return(
        <div>
            <CounterDisplay count={count}/>
            <button onClick={handlerIncrementCounter}>+</button>
            <button onClick={handlerDecrementCounter}>-</button>
            <button onClick={handlerResetCounter}>Reset</button>
        </div>
    )
}
