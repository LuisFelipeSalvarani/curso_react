import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'

// pages
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import Products from './pages/Products'

function App() {

  return (
    <>
      <h1>Context API</h1>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
