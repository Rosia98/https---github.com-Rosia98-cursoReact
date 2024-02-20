
export function UncontrolledLogin({onLogin}){
    function handledSubmit(event){
        event.preventDefault();

        const username= event.target.elements.usernameInput.value
        const password= event.target.elements.passwordInput.value
        const remember= event.target.elements.rememberInput.checked

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
            <input type="text" id="usernameInput" />

            <label htmlFor="passwordInput">Password:</label>
            <input type="password" id="passwordInput" />

            <label>
                <input type="checkbox" id="rememberInput" />
                Remember me?
            </label>
            <button type="burron" onClick={handleReset}>Reset</button>
        </form>
    )
}