import { useEffect, useRef } from "react";
import { FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export function FocusabledInput(){
    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current.focus()
    }, [])

    return 
    (<div className="container mt-4">
        <h2>Focusable Input</h2>
        <FormControl ref={inputRef} type="text" placeholder="Type something..." className="mb-3" />
        <Button onClick={focusInput} variant="primary">
            Focus Input
        </Button>
  </div>
)}