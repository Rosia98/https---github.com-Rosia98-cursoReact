import { Route, Router, Routes } from "react-router-dom";
import { AlertClock } from "./AlertCLock";
import { Clock } from "./Clock";
import { Colors } from "./Colors";
import { Counter } from "./Counter";
import { FocusabledInput } from "./FocusabledInput";
import GithubUser from "./GithubUser";
import { Hello } from "./Hello";
import { InteractiveWelcome } from "./InteactiveWelcome";
import { LenguageProvider, useLenguage } from "./LenguageContext";
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

            <AlertClock onClickHandler={handleClick}/>
            <Counter/>
            <MouseClicker/>
            <LenguageProvider>
                <div>
                    <h1>Lenguaje Selector</h1>
                    <LenguageSelector/>
                    <Clock/>
                </div>  
            </LenguageProvider>
          
            
            <InteractiveWelcome/>
            <Login/>
            <UncontrolledLogin/>
            <FocusabledInput/>
            <StrictMode> <OneMessage/> </StrictMode>

            <h3>Colores: </h3>
            <Colors colors={colorData}/>
            <TodoList/>

             <div>
                <h2>Github Información usuario:</h2>
                <GithubUser username="octocat"/>
             </div>

             <Router>
                <Routes>
                 <Route path="/" element={<Welcome name="John" />} />
                </Routes>
             </Router>
            
        </div>
    )

}

    function LenguajeSelector(){
        const{changeLenguage}= useLenguage()
    
        function handleLenguageChange(e){
            changeLenguage(e.target.value)
    }
    return(
    <div>
      <label htmlFor="languageSelect">Select Language: </label>
      <select id="languageSelect" onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </div>
    )
    }
