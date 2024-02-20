import { useState } from "react"

function createData(){
    return{
        username: '',
        password: '',
        remember: false, 
    }
}

export function Login({onLogin}){
    const [data, setData]= useState(createData())

    function handleInputChange(event){
        const name = event.target.name
        const value = event.target.value
        const checked = event.target.checked
        const type = event.target.type
        
        setData((data)=>{
            return{
                ...data,
                [name]:type==='checkbox' ? checked: value,
            }
        })
    }

    function handleLogin(event){
        event.preventDefault()
        onLogin({createData})
    }
    function handleResetForm(){
        setData(createData())
    }
    return(
        <div>
            <input name="username" type="text" value={data.username} onChange={handleInputChange} placeholder="Name"/>
            <input name="password" type="password" value={data.password} onChange={handleInputChange} placeholder="Password" />
            <input name="remember" type="checkbox" checked={data.remember} onChange={handleInputChange}/> Remember me?
            <button onClick={handleLogin} disabled={!data.username || !data.password}>Login</button>
            <button onClick={handleResetForm}>Reset</button>
        </div>
    )

}