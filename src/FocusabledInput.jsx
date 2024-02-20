import { useEffect, useRef } from "react";

export function FocusabledInput(){
    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current.focus()
    }, [])

    return <input ref={inputRef} />
}