export function Age({age}){
    return(
        <div>
            {age >18 ?(
                <p>Your age is: {age}</p>
            ) : (
                <p>You're very young!</p>
            )}
        </div>
    )
}