import { useEffect, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export function FocusabledInput(){
    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current.focus()
    }, [])

    return (
    <div className="container mt-4">
        <h2>Focusable Input</h2>
        <input ref={inputRef}/>
       
  </div>)}