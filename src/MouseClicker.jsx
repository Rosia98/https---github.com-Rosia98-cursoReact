export function MouseClicker(){
    function handleClick(event){
        console.log(event.target.name)
    }
    return(
        <button name="uno" onClick={handleClick}>Púlsame</button>
    )
}