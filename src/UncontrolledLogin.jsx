import styles from './styles.css';
export function UncontrolledLogin({onLogin}){
    function handledSubmit(event){
        event.preventDefault();
        {/*
        Ventajas:
            -Su uso fácil para recopilar datos de los formularios
            -Manejar archivos, se pueden manchar ficheros al servidor juntos con los datos del form
            -Soporte para diferentes codificaciones de carácteres de forma automática
        
        Desventajas:
            -Se complica para campos no estándar del modelos html
            -No es tan explícito para rastrear y gestionar los datos del formulario
            -Es necesario manipular el documento DOM para acceder a los valores*/}
        const formData = new FormData(event.target)

        const username= formData.get('usernameInput')
        const password= formData.get('passwordInput')
        const remember= formData.get('rememberInput')=== 'on'

        onLogin({username, password, remember})
    }
    function handleReset(){
        document.getElementById('usernameInput').value=''
        document.getElementById('passwordInput').value=''
        document.getElementById('rememberInput').checked=false
    }

    return(
        <form action="#" onSubmit={handledSubmit}>
            <label htmlFor="usernameInput">Username:</label>
            <input type="text" id="usernameInput" name="usernameInput"/>

            <label htmlFor="passwordInput">Password:</label>
            <input type="password" id="passwordInput" name="passwordInput" />

            <label>
                <input type="checkbox" id="rememberInput" name="rememberInput"/>
                Remember me?
            </label>
            <button type="submit">Login</button>
            <button type="button" onClick={handleReset}>Reset</button>
        </form>
    )
}