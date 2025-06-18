
import './App.css'
import Saludo from './Saludo'

function Saludo(){
 return <h2>Hola,Bienvenido a mi aplicación react!</h2>
}

function App() {
 
  return (
    <>
     <img src="./src/assets/gojologo.png.jfif" className='logo' alt="logo" />
      <h1>Welcome to my react App</h1>
      <Saludo/>
      <p>esta es una aplicación</p>
    </>
  )
}

export default App
