import './App.css'
import CarDetails from './components/CarDetails'

function App() {
  const myCars = [
    { name: "Fusca", km: 10000, color: "Branca"},
    { name: "Polo", km: 32000, color: "Cinza"},
    { name: "Onix", km: 0, color: "Preto"},
  ]
  

  return (
    <>
      <h1 className='title'>Showroom de carros</h1>
      <div className="car-container">
        {myCars.map((car) => (
          <CarDetails car={car} />
        ))}
      </div>
    </>
  )
}

export default App
