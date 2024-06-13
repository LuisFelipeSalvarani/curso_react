import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import City from "./assets/city.jpg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Seção 3</h1>
        {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
        {/* Imagem em assets */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
    </>
  )
}

export default App
