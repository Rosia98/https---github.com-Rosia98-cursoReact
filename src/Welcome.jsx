import { Age } from "./Age";

export function Welcome({name, age}){
    return(
        <div>
            <p>Welcome, <strong>{name}</strong>!</p>
            {/*Mayor que 18*/}
            {age > 18 && <Age age={age} />}

            {/* Si age está presente */}
            {age && <Age age={age} />}

            {/* Si está entre 18 y 65 */}
            {age > 18 && age < 65 && <Age age={age} />}

            {/* Si age está entre 18 y 65 y el name es "John" */}
            {age > 18 && age < 65 && name === "John" && <Age age={age} />}
            
        </div>
        
    )
}