
import { useState } from "react";

export default function Counter() {

    const [count, setCount] = useState(0)

    return (
        <div>
            <h2>Contador</h2>
            
            <p>Você clicou {count} vezes</p>  

            <button onClick={()=>{setCount(count+1)}}>
                Click Aqui
            </button>


        </div>
    )

}