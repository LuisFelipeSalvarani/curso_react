import { useEffect, useState } from 'react'

const HookUseEffect = () => {
    // 1 - useEffect, sem dependências
    useEffect(() => {
        console.log("Estou sendo executado!")
    })

    const [number, setNumber] = useState(1)

    const changeSomething = () => {
        setNumber(number + 1)
    }

    // 2 - useEffect com array de dependência vazio
    useEffect(() => {
        console.log("Serei executado só uma vez!")
    }, [])

  return (
    <div>
        <h2>useEffect</h2>
        {/* 1 - useEffect, sem dependências */}
        <p>Número: {number}</p>
        <button onClick={changeSomething}>Executar!</button>
        <hr />
    </div>
  )
}

export default HookUseEffect