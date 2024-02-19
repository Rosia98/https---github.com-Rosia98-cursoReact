import { AlertClock } from "./AlertCLock";
import { Clock } from "./Clock";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import { Message } from "./Message";
import { MouseClicker } from "./MouseClicker";
import { Welcome } from "./Welcome";


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
            <Welcome name={"Rosa"} age={25}/>

            <AlertClock onClickHandler={handleClick}/>
            <Counter/>
            <MouseClicker/>
            <Clock/>
          
        </div>
    )
}