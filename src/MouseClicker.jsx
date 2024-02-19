export function MouseClicker(){

    function handleClick(event){
        console.log(event.target.name)
    }

    function handleImagenClick(event){
        console.log("Imagen src: ", event.target.src)
        {/*Se puede evitar la propagación del evento con: */}
        event.stopPropagation()
    }
    return(
        <button name="uno" onClick={handleClick}>
            <img src="imagen.jpg" alt="imagen" onClick={handleImagenClick} />
            Púlsame :D
        </button>
    )
}