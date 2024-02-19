import { Hello } from "./Hello";
import { Message } from "./Message";
import { Welcome } from "./Welcome";
export function App(){
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
            <Welcome name={"Rosa"}/>
            <Welcome age={25}/>
        </div>
    )
}