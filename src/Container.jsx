import { useState } from "react";

export function Container({tittle, children}){
    const[isCollapsed, setCollapsed] = useState(false)

    function handleToggleCollapse(){
        setCollapsed(|isCollapsed)
    }

    return(
        <div style={{border: '1px solid blue', background: 'grey', padding: '10px', margin: '20px'}}>
            <h2 style={{cursor:'pointer'}} onClick={handleToggleCollapse}>{tittle} - {isCollapsed ? 'Collapsed': 'Expanded'}</h2>
            {!isCollapsed && <div>{children}</div>}
        </div>
    )
}