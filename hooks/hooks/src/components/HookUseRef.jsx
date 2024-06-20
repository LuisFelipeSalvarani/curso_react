import { useRef, useEffect, useState } from 'react'

const HookUseRef = () => {
    // 1 - useRef
    const numberRef = useRef(0)
    const [counter, setCounter] = useState(0)
    const [counterB, setCounterB] = useState(0)

    useEffect(() => {
        numberRef.current = numberRef.current + 1
    })
    
  return (
    <div>
        <h2>UseRef</h2>
        <p>O componente renderizou: {numberRef.current} vezes.</p>
        <p>Counter 1: {counter}</p>
        <button onClick={(e) => setCounter(counter + 1)}>Contador A</button>
        <p>Counter 2: {counterB}</p>
        <button onClick={(e) => setCounterB(counterB + 1)}>Contador B</button>
        <hr />
    </div>
  )
}

export default HookUseRef