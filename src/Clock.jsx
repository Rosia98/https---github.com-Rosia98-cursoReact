import { useEffect, useState } from "react"
import styles from "./Clock.module.scss"


export function Clock(){
    const [date, setDate]= useState(new Date())

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