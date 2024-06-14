import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './components/MyComponent'

function App() {
  const n = 15
  const [name] = useState("Matheus")

  const redTitle = false

  return (
    <>
      {/* CSS global */}
      <h1>React com CSS</h1>
      {/* CSS de componente */}
      <MyComponent />
      <p>Este parágrafo é do App.js</p>
      {/* CSS Inline */}
      <p style={{color: "magenta", padding: "25px", borderTop: "2px solid red"}}>Este elemento foi estilizado de forma inline</p>
      <p style={{color: "magenta", padding: "25px", borderTop: "2px solid red"}}>Este elemento foi estilizado de forma inline</p>
      {/* CSS Inline dinâmico */}
      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS dinâmico</h2>
      <h2 style={n > 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS dinâmico</h2>
      <h2 style={name === "Matheus" ? ({color: "green", backgroundColor: "#000"}) : null}>Teste nome</h2>
      {/* classe dinâmica */}
    <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter calsse dinâmica</h2>
    </>
  )
}

export default App
