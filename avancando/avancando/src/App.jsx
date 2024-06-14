import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import City from "./assets/city.jpg"
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Fragments from './components/Fragment'

function App() {
  const [count, setCount] = useState(0)
  // const name = "Joaquim"
  const [useName] = useState("Maria")

  const cars = [
    {id:1, brand: "Ferrari", color: "Vermelho", newCar: true, km: 0},
    {id:2, brand: "Kia", color: "Branco", newCar: false, km: 34343},
    {id:3, brand: "Renault", color: "Azul", newCar: false, km: 234},
  ]

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
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      {/* props */}
      <ShowUserName name={useName}/>
      {/* destructuring */}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false}/>
      {/* reaproveitamento */}
      <CarDetails brand="Ford" km={0} color="Vermelho" newCar={true}/>
      <CarDetails brand="Fiat" km={4500} color="Branco" newCar={false}/>
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} newCar={car.newCar} km={car.km}/>
        ))}
      {/* fragment */}
      <Fragments propFragment="teste"/>
    </>
  )
}

export default App
