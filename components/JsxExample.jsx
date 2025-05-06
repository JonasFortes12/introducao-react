import { use } from "react"

import "../style.css"

export default function JsxExample() {

    const name = "React"
    const user = {
        firstName: 'Maria',
        lastName: "Silva"
    }

    return (
        <div className="divJsx">
            <h2>Exemplo JSX</h2>
            <p>Olá, {name}!</p>
            <p>
                Usuario: {user.firstName}
                         {user.lastName}
            </p>

            <p>2 + 2 = {2+2}</p>

        </div>
        
    )


}