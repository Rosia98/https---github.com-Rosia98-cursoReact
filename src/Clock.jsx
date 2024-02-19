import { useEffect, useState } from "react"

export function Clock(){
    const [date, setDate]= useState(new Date())

    useEffect(()=>{
      const intervalid = setInterval(()=>{
            console.log("Cargando hora...")
            setDate(new Date())
        }, 1000)
})
    return(
        <div>
            <h2>Hora: {date.toLocaleTimeString()}</h2>
        </div>
    )
}