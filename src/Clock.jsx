import { useEffect, useState } from "react"
import styles from "./Clock.module.scss"
import { useLenguage } from "./LenguageContext"


export function Clock(){
    const [date, setDate]= useState(new Date())
    const {lenguage} =useLenguage()

    function getCurrentTimeMessage(){
        const currentTime = new Date().toLocaleTimeString(lenguage)
        return lenguage==='en' ? 'Current time is: ${currentTime}' : 'La hora actual es: ${currentTime}'
    }

    useEffect(()=>{
      const intervalid = setInterval(()=>{
            console.log("Cargando hora...")
            setDate(new Date())
        }, 1000)
})
    return(
        <div className={styles.clock-container}>
            <h2 className={classes.h2}>Hora: {date.toLocaleTimeString()}</h2>
        </div>
    )
}