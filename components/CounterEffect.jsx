import { useState, useEffect } from "react";


export default function CounterEffect () {

    const [count, setCount] = useState(0)
    const [isEven, setIsEven] = useState(false)

    //Efeito que será dependente da variável 'count'
    useEffect(()=>{
        console.log(`O contador mudou para: ${count}`)

        //O valor é par ?
        setIsEven(count % 2 === 0)

        //Efeito visual baseado no valor
        document.title = `Contagem ${count}`


    }, [count])

    return (
        <div>

            <h2>Contador com efeito dependente</h2>
            <p>Valor Atual: {count} </p>
            <p>O número é impar/par</p>

            <button onClick={()=>{setCount(c=>c+1)}}>
                incrementar
            </button>

            <button onClick={()=>{setCount(0)}}>
                resetar
            </button>


        </div>

    )
}