import { AlertClock } from "./AlertCLock";
import { Clock } from "./Clock";
import { Colors } from "./Colors";
import { Counter } from "./Counter";
import { FocusabledInput } from "./FocusabledInput";
import { Hello } from "./Hello";
import { InteractiveWelcome } from "./InteactiveWelcome";
import { Login } from "./Login";
import { Message } from "./Message";
import { MouseClicker } from "./MouseClicker";
import { OneMessage } from "./OneMessage";
import { TodoList } from "./TodoList";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { Welcome } from "./Welcome";
import { StrictMode } from "react";

const colorData=[
    {id: 1, nombre: 'rojo' },
    {id: 2, nombre: 'azul' },
    {id: 3, nombre: 'morado' },

]
export function App(){
    {/*Se crea una función dentro de la función que pasará el evento al botón */}
    const handleClick=()=>{
        const now = new Date()
        alert(`La hora es: ${now.toLocaleTimeString()}`)
    };
    
    return(
        <div>
           
                {/* Se puede usar el Hello.jsx más de una vez en el App.jsx */}
            <Hello/>
            <Hello/>
             {/* Se puede renderizar el Message.jsx directamente dentro del App.jsx */}
            <Message/>
            {/**Sí se podría establecer un valor predeterminado usando defaultProps, si no se le da un valor se usará el predeterminado que le 
             * hayamos específicado
             */}
            <Welcome/>

            <AlertClock onClickHandler={handleClick}/>
            <Counter/>
            <MouseClicker/>
            {/*<Clock/>*/}
            <InteractiveWelcome/>
            <Login/>
            <UncontrolledLogin/>
            <FocusabledInput/>
            <StrictMode> <OneMessage/> </StrictMode>

            <h3>Colores: </h3>
            <Colors colors={colorData}/>
            <TodoList/>

            
        </div>
    )
}
