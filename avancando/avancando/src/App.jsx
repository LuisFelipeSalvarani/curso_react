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
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'
import UserDatails from './components/UserDatails'

function App() {
  const [count, setCount] = useState(0)
  // const name = "Joaquim"
  const [useName] = useState("Maria")

  const cars = [
    {id:1, brand: "Ferrari", color: "Vermelho", newCar: true, km: 0},
    {id:2, brand: "Kia", color: "Branco", newCar: false, km: 34343},
    {id:3, brand: "Renault", color: "Azul", newCar: false, km: 234},
  ]

  function showMessage() {
    console.log("Evento do componente pai!")
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  const users = [
    {id: 1, name: "João", age: 17, job: "Estudante"},
    {id: 2, name: "Marta", age: 30, job: "Arquiteta"},
    {id: 3, name: "Mario", age: 26, job: "Programador"}
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
      {/* children */}
      <Container myValue="testing">
        <p>e Este é o conteúdo</p>
      </Container>
      <Container myValue="testing 2">
        <h5>Testando o container</h5>
      </Container>
      {/* executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
      {users.map((user) => (
        <UserDatails key={user.id} name={user.name} age={user.age} job={user.job} />
      ))}
    </>
  )
}

export default App
